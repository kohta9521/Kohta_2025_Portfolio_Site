"use client";
import React from "react";

// next
import { useParams } from "next/navigation";

// components
import BlogTemp from "@/components/template/BlogTemp";
import ScrollTopButton from "@/components/atoms/ScrollTopButton";

// hooks
import { useGetBlogById } from "@/hooks/useGetBlogById.ts";

const BlogsDetail = () => {
  const { id } = useParams();
  const blogId = Array.isArray(id) ? id[0] : id;
  const { blog, error } = useGetBlogById(blogId);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!blog) {
    return <p>Loading ...</p>;
  }

  return (
    <BlogTemp
      id={blog.id}
      link={`/works/${blog.id}`}
      image={blog.topImage.url}
      category={blog.tags.name}
      date={blog.createdAt}
      title={blog.title}
    >
      <div
        className="w-full prose mb-32 lg:prose-lg max-w-none sm:mb-40"
        dangerouslySetInnerHTML={{ __html: blog.body }}
      />
      <ScrollTopButton />
    </BlogTemp>
  );
};

export default BlogsDetail;
