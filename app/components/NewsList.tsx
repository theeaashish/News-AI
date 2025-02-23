"use client";

import { useEffect, useState } from "react";
import NewsBox from "./NewsBox";

interface NewsArticle {
  title: string;
  urlToImage: string;
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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">

      {news.map((article, index) => (
        <NewsBox key={index} title={shortenTitle(article.title, 50)} image={article.urlToImage} url={article.url} content={article.content} />
      ))}

    </div>
  );
}

export default NewsList;
