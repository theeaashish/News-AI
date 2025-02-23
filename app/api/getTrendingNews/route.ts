import { NextResponse } from "next/server";

export async function GET() {
    const NEWS_API_KEY = process.env.NEWS_API_KEY;
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_API_KEY}`;
    
    try {

        const response = await fetch(url);
        const data = await response.json();

        if(!data.articles) {
            return NextResponse.json({ error: "No articles found"}, { status: 404 });
        }

        return NextResponse.json(data.articles);
        
    } catch (error) {
        console.error("Error fetching news:", error);
        return NextResponse.json({ error: "Failed fetching news"}, { status: 500 });
    }
}