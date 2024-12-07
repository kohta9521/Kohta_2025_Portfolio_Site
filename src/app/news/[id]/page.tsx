"use client";

import { useGetNewsById } from "@/hooks/useGetNewsById";

import { useParams } from "next/navigation";

const NewsDetailPage = () => {
  const { id } = useParams();
  const newsId = Array.isArray(id) ? id[0] : id;
  const { news, error } = useGetNewsById(newsId);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!news) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{news.title}</h1>
      <p>{news.date}</p>
    </div>
  );
};

export default NewsDetailPage;
