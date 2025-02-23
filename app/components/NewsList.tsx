"use client";

import { useEffect, useState } from "react";
import NewsBox from "./NewsBox";

interface NewsArticle {
  title: string;
  urlToImage?: string | null;
  url: string;
  content: string;
}

function NewsList() {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);

  const shortenTitle = (title?: string, maxLength: number = 50) => {
    if (!title) return "";
    return title.length > maxLength ? title.slice(0, maxLength) + "..." : title;
  };

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("/api/getTrendingNews");
        const data = await response.json();

        console.log(data);
        setNews(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <p>Loading News...</p>;

  return (
    <div>
      <div className="my-8">
      <h1 className="text-4xl kalnia font-bold">Top Trending News</h1>
      </div>
    <div className="flex flex-wrap gap-8">

      {news.map((article, index) => (<div key={index}>
        <NewsBox key={index} title={shortenTitle(article.title, 40)} image={article.urlToImage} url={article.url} content={article.content} />
        </div>
      ))}

    </div>
    </div>
  );
}

export default NewsList;
