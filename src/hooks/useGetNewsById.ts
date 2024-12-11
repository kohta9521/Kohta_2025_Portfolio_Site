"use client";

import { useState, useEffect } from "react";

// type
import { News } from "@/types/news";

export function useGetNewsById(id: string | undefined) {
  const [news, setNews] = useState<News | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    fetch(`/api/news/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch news");
        return res.json();
      })
      .then((data: News) => setNews(data))
      .catch((err) => {
        console.error("Error fetching news:", err);
        setError(err.message);
      });
  }, [id]);

  return { news, error };
}
