"use client";

// next
import { useParams } from "next/navigation";

// hooks
import { useGetBlogById } from "@/hooks/useGetBlogById.ts";

import styles from "./BlogId.module.scss";

import Image from "next/image";

const BlogDetailPage = () => {
  const { id } = useParams();
  const blogId = Array.isArray(id) ? id[0] : id;
  const { blog, error } = useGetBlogById(blogId);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!blog) {
    return <p className={styles.loading}>Loading...</p>;
  }

  return (
    <div className={styles.container}>
      <Image
        className={styles.image}
        src={blog.topImage.url}
        width={1280}
        height={700}
        alt="image"
      />
      <h1 className={styles.title}>{blog.title}</h1>
      <p className={styles.date}>
        {new Date(blog.publishedAt).toLocaleDateString()}
      </p>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: blog.body }}
      />
    </div>
  );
};

export default BlogDetailPage;
