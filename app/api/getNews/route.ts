import { NextResponse } from "next/server";

export async function GET() {
    const NEWS_API_KEY = process.env.NEWS_API_KEY;
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_API_KEY}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if(!data.articles) {
            return NextResponse.json({ error: "no news found"}, { status: 500});
        }

        const articles = data.articles.slice(5,8).map((article: any) => ({
            title: article.title,
            image: article.urlToImage,
            date: article.publishedAt,
            content: article.content
        }))

        return NextResponse.json({ articles});
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch news"}, { status: 500 });
    }
}