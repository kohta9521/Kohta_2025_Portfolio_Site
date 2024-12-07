"use client";
import { useState, useEffect } from "react";

// types
import { News } from "@/types/news";

function useGetAllNews() {
  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    fetch("/api/news")
      .then((res) => res.json())
      .then((data) => setNews(data))
      .catch((error) => console.error("Error fetching news:", error));
  }, []);

  return news;
}

export default useGetAllNews;