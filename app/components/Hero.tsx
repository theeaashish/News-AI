"use client";
import { useEffect, useState } from "react";
// import Image from 'next/image';

interface NewsArticle {
  title: string;
  image: string;
  date: string;
}

const Hero = () => {
  const [news, setNews] = useState<NewsArticle[]>([]);

  const shortenTitle = (title?: string, maxLength: number = 50) => {
    if (!title) return "";
    return title.length > maxLength ? title.slice(0, maxLength) + "..." : title;
  };

  useEffect(() => {
    const fetchNews = async () => {
      const response = await fetch("/api/getNews");
      const data = await response.json();

      setNews(data.articles);
    };

    fetchNews();
  }, []);

  return (
    <section className="min-h-[755px] flex gap-4 items-center border-t-4 mt-1 border-black">
      <div className="relative w-[1084px] h-[665px] overflow-hidden rounded-md object-cover">
        <img
          className="w-full h-full rounded-md"
          src={news[0]?.image}
          alt={news[0]?.title}
        />
        <div className="absolute bottom-0 bg-gradient-to-t w-full h-[150px] from-black to-transparent p-8 text-white">
          <h2 className="text-3xl font-bold mt-10">
            {shortenTitle(news[0]?.title, 60)}
          </h2>
          <p className="text-sm italic">
            {new Date(news[0]?.date).toDateString()}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="relative w-[444px] h-[324px] rounded-md overflow-hidden">
          <img
            className="w-full h-full rounded-md object-cover"
            src={news[1]?.image}
            alt=""
          />
          <div className="absolute bottom-0 bg-gradient-to-t w-full h-[150px] from-black to-transparent p-4 text-white">
            <h2 className="text-xl font-bold mt-10">
              {shortenTitle(news[1]?.title, 60)}
            </h2>
            <p className="text-sm italic">
              {new Date(news[1]?.date).toDateString()}
            </p>
          </div>
        </div>

        <div className="relative w-[444px] h-[324px] overflow-hidden rounded-md">
          <img
            className="w-full h-full rounded-md object-cover"
            src={news[2]?.image}
            alt=""
          />
          <div className="absolute bottom-0 bg-gradient-to-t w-full h-[150px] from-black to-transparent p-4 text-white">
            <h2 className="text-xl font-bold mt-10">
              {shortenTitle(news[2]?.title, 60)}
            </h2>
            <p className="text-sm italic">
              {new Date(news[2]?.date).toDateString()}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
