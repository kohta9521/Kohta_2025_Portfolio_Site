"use client";
import React, { useState } from "react";

// scss
import styles from "./styles/BlogPage.module.scss";

// hooks
import useGetAllBlogs from "@/hooks/useGetAllBlogs";

// components
import Pagination from "./Pagination";
import SubBlogCard from "./SubBlogCard";

const BlogsPage = () => {
  const blogs = useGetAllBlogs();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedBlogs = blogs.slice(startIndex, startIndex + itemsPerPage);

  if (!blogs || blogs.length === 0) {
    return <p className={styles.loading}>Loading...</p>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {paginatedBlogs.map((blog) => (
          <SubBlogCard
            key={blog.id}
            id={blog.id}
            title={blog.title}
            img={blog.topImage.url}
            link={`/blogs/${blog.id}`}
            date={new Date(blog.publishedAt).toLocaleDateString()}
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalCount={blogs.length}
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default BlogsPage;
