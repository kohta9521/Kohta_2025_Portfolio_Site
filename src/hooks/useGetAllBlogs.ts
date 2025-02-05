"use client";
import { useState, useEffect } from "react";

// types
import { Blog } from "@/types/blog";

export function useGetAllBlogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    fetch("/api/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);

  return blogs;
}

export default useGetAllBlogs;
