"use client";
import React from "react";

// scss
import styles from "./styles/News.module.scss";

// hooks
import useGetAllNews from "@/hooks/useGetAllNews";

// utils
import { formatDate } from "@/utils/formatDate";

// components
import SecTitle from "../atoms/SecTitle";
import NewsCard from "../molecules/NewsCard";

const News = () => {
  const news = useGetAllNews();
  return (
    <div className={styles.news}>
      <div className={styles.container}>
        <SecTitle
          id="news-title"
          jaTitleSize="default"
          jaTitle="ニュース"
          enTitle="News"
        />
        <div className={styles.content}>
          <div className={styles.left}>
            <p className={styles.desc}>
              kohtaの活動などの最新情報をこちらからご覧いただけます。
              制作実績や案件受注、現在開発している新サービスなどの情報などを定期的に発信していきます。
            </p>
          </div>
          <div className={styles.right}>
            {news.map((item) => (
              <NewsCard
                key={item.id}
                id={item.id}
                link={`/news/${item.id}`}
                date={formatDate(item.date)}
                text={item.title}
                genre={item.category.name}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
