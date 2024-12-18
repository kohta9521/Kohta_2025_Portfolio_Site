"use client";

// next
import { useParams } from "next/navigation";

// hooks
import { useGetBlogById } from "@/hooks/useGetBlogById.ts";

// scss
// import styles from "./BlogId.module.scss";

// components
import BlogTemp from "@/components/template/BlogTemp";
import LoadingScreen from "@/components/template/LoadingScreen";
import ScrollTopButton from "@/components/molecules/ScrollTopButton";

const BlogDetailPage = () => {
  const { id } = useParams();
  const blogId = Array.isArray(id) ? id[0] : id;
  const { blog, error } = useGetBlogById(blogId);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!blog) {
    return <LoadingScreen />;
  }

  return (
    <>
      <BlogTemp
        id={blog.id}
        title={blog.title}
        img={blog.topImage.url}
        createdAt={blog.createdAt}
        updatedAt={blog.updatedAt}
      >
        <div dangerouslySetInnerHTML={{ __html: blog.body }} />
        <ScrollTopButton />
      </BlogTemp>
    </>
  );
};

export default BlogDetailPage;
