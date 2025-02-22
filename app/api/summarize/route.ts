import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { text } = await req.json();
    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

    const url = `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`;

    try {

        if(!text) {
            return NextResponse.json({ error: "No text provided" }, {status:400});
        }

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                contents: [{ parts: [{ text: `Summarize this news article: ${text}`}]}],
            }),  
        });

        const data = await response.json();

        if(data.candidates && data.candidates.length > 0) {
            return NextResponse.json({ summary: data.candidates[0].content.parts[0].text});
        }

        return NextResponse.json({ error: "No summary generated!"}, { status: 500});

    } catch (error) {
        console.error("getting an error: ", error);
        return NextResponse.json({ error: "Failed to summarize article"}, { status : 500});
    }
}