"use client";
import React, { useState, useEffect } from "react";

// scss
import styles from "./styles/Blog.module.scss";

// hooks
import useAOS from "@/hooks/useAOS";
import useGetAllBlog from "@/hooks/useGetAllBlogs";

// components
import SecTitle from "../atoms/SecTitle";
import MainButton from "../atoms/MainButton";
import BlogCard from "../molecules/BlogCard";

const Blog = () => {
  useAOS();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(400); // 初期値600px

  // カードデータを取得
  const blogs = useGetAllBlog();

  // ウィンドウ幅に応じたカード幅を設定
  useEffect(() => {
    const updateCardWidth = () => {
      if (window.innerWidth <= 768) {
        setCardWidth(250); // スマホ幅
      } else {
        setCardWidth(400); // デスクトップ幅
      }
    };

    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);

    return () => {
      window.removeEventListener("resize", updateCardWidth);
    };
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? blogs.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= blogs.length - 1 ? 0 : prev + 1));
  };
  return (
    <div className={styles.blog}>
      <div className={styles.container}>
        <SecTitle
          id="blog-title"
          jaTitleSize="default"
          jaTitle="ブログ記事"
          enTitle="Blogs"
        />
        <div className={styles.slideBox}>
          <div
            data-aos="fade-up"
            className={styles.slider}
            style={{
              transform: `translateX(-${currentIndex * (cardWidth + 30)}px)`, // カード幅 + margin-right: 30px
            }}
          >
            {blogs.map((blog) => (
              <div key={blog.id} className={styles.slide}>
                <BlogCard
                  id={blog.id}
                  title={blog.title}
                  link={`/blogs/${blog.id}`}
                  img={blog.topImage?.url || "/images/home/blog.png"}
                  date={blog.createdAt}
                />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.bottom} data-aos="fade-up">
          <div className={styles.left}>
            <button className={styles.button} onClick={handlePrev}>
              ←
            </button>
            <button className={styles.button} onClick={handleNext}>
              →
            </button>
          </div>
          <div className={styles.right}>
            <MainButton
              id="blog-more"
              text="もっと見る"
              link="/blogs"
              size="medium"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
