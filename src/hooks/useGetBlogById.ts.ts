"use client";
import { useState, useEffect } from "react";

// types
import { Blog } from "@/types/blog";

export function useGetBlogById(id: string | undefined) {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    fetch(`/api/blogs/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch blog");
        return res.json();
      })
      .then((data: Blog) => setBlog(data))
      .catch((err) => {
        console.error("Error fetching blog:", err);
        setError(err.message);
      });
  }, [id]);

  return { blog, error };
}
