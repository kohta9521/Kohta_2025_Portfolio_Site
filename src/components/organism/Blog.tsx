"use client";
import React from "react";

// hooks
import useGetAllBlogs from "@/hooks/useGetAllBlogs";
import { useGetBlogById } from "@/hooks/useGetBlogById.ts";

// components
import SecTitle from "../atoms/SecTitle";
import ViewMoreButton from "../atoms/ViewMoreButton";
import BlogCard from "../molecules/BlogCard";

const Blog = () => {
  // ブログ一覧を取得
  const blogs = useGetAllBlogs();
  // Pick up記事の取得
  const { blog: pickBlog, error } = useGetBlogById("c1-hz88kjm");

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!pickBlog) {
    return <p>Loading...</p>;
  }

  return (
    <div className="w-screen h-auto py-10 sm:py-28">
      <div className="w-11/12 mx-w-11/12 mx-auto sm:w-9/12">
        <SecTitle id="blog" jaText="ブログ" enText="Blog" />
        {/* Main Tech */}
        <div className="py-12">
          <p className="block bg-red-600 mb-3 w-32 text-center text-white py-1 px-2 rounded-full font-semibold text-xs">
            テクノロジー関連
          </p>
          <h3 className="text-3xl font-bold mb-3">- Technology</h3>
          <p className="w-full text-xs text-red-600 font-semibold mb-10 sm:text-base">
            日々のエンジニアリング関連の勉強、そして新技術いついてや書籍の感想などITに関する幅広い情報を発信しています。
          </p>
          <div className="sm:flex sm:justify-between">
            <div className="sm:w-2/5">
              <p className="mb-2 text-lg font-semibold sm:block">Pickup!</p>

              {/* <BlogCard
                id="blog-card-1"
                link="/"
                type="Card"
                image="/images/sample.png"
                date="2025.1.10"
                title="Next.jsの使い方を解説します"
              /> */}
              <BlogCard
                id={pickBlog.id}
                link={`/blogs/${pickBlog.id}`}
                type="Card"
                image={pickBlog.topImage.url}
                date={pickBlog.createdAt}
                title={pickBlog.title}
              />
            </div>

            {/* List */}
            <div className="w-full h-auto my-12 sm:w-3/6">
              {blogs.slice(0, 4).map((blog) => (
                <BlogCard
                  key={blog.id}
                  id={blog.id}
                  link={`/blogs/${blog.id}`}
                  type="List"
                  image={blog.topImage.url}
                  date={blog.createdAt}
                  title={blog.title}
                />
              ))}
              <div className="w-full h-10"></div>
              <ViewMoreButton
                id="blog-view-more"
                link="/blog"
                position="center"
              />
            </div>
          </div>
        </div>
        {/* Stock */}
        <div className="py-12">
          <p className="block bg-red-600 mb-3 w-32 text-center text-white py-1 px-2 rounded-full font-semibold text-xs">
            株式・金融関連
          </p>
          <h3 className="text-3xl font-bold mb-3">- Stock</h3>
          <p className="w-full text-xs text-red-600 font-semibold mb-10 sm:text-base">
            私が日々行なっているトレードのポートフォリオや株式投資全般の勉強内容、税金や金融に関する内容をテックとは分けてブログにしています。Stock
            Blogは別サイトに遷移するためご注意ください。
          </p>
          <div className="sm:flex sm:justify-between">
            <div className="sm:w-2/5">
              <p className="mb-2 text-lg font-semibold sm:block">Pickup!</p>
              <BlogCard
                id="blog-card-1"
                link="/"
                type="Card"
                image="/images/sample.png"
                date="2025.1.10"
                title="Next.jsの使い方を解説します"
              />
            </div>

            {/* List */}
            <div className="w-full h-auto my-12 sm:w-3/6">
              <BlogCard
                id="blog-card-1"
                link="/"
                type="List"
                image="/images/sample.png"
                date="2025.1.10"
                title="Next.jsの使い方を解説します"
              />
              <BlogCard
                id="blog-card-1"
                link="/"
                type="List"
                image="/images/sample.png"
                date="2025.1.10"
                title="Next.jsの使い方を解説します"
              />
              <BlogCard
                id="blog-card-1"
                link="/"
                type="List"
                image="/images/sample.png"
                date="2025.1.10"
                title="Next.jsの使い方を解説します"
              />
              <BlogCard
                id="blog-card-1"
                link="/"
                type="List"
                image="/images/sample.png"
                date="2025.1.10"
                title="Next.jsの使い方を解説します"
              />
              <div className="w-full h-10"></div>
              <ViewMoreButton
                id="blog-view-more"
                link="/blog"
                position="center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
