"use client";
import React from "react";

// hooks
import useGetAllNews from "@/hooks/useGetAllNews";

// components
import SecTitle from "../atoms/SecTitle";
import NewsCard from "../molecules/NewsCard";

const News = () => {
  // ニュース一覧を取得
  const news = useGetAllNews();

  return (
    <div className="w-screen h-auto pt-20 pb-20">
      <div className="w-10/12 sm:w-9/12 max-w-11/12 mx-auto">
        <SecTitle id="home-news" jaText="ニュース一覧" enText="News" />
        {/* main */}
        <div className="w-full h-auto py-16">
          {news.slice(0.6).map((item) => (
            <NewsCard
              key={item.id}
              id={item.id}
              link={`/news/${item.id}`}
              date={item.createdAt}
              tag={item.tag.text}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
