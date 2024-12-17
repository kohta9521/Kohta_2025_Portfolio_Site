import React from "react";

// next
import Image from "next/image";

// scss
import styles from "./styles/BlogTemp.module.scss";

// lib
import { formatDate } from "@/utils/formatDate";

// icons
import { FaPencilAlt } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";

// data
import {
  profileSubItems,
  worksSubItems,
  blogSubItems,
  qaSubItems,
} from "@/data/subItems";

// components
import Header from "../organism/Header";
import ListItem from "../molecules/ListItem";
import Contact from "../organism/Contact";

// props
export type BlogTempProps = {
  id: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  img: string;
  children: React.ReactNode;
};

const BlogTemp = ({
  id,
  createdAt,
  updatedAt,
  title,
  img,
  children,
}: BlogTempProps) => {
  const createdAtFormat = formatDate(createdAt);
  const updatedAtFormat = formatDate(updatedAt);
  return (
    <div className={styles.page} key={id}>
      <Header id="blog-children">
        <ListItem
          id="profile"
          mainLink="/profile"
          mainTitle="Profile"
          subItems={profileSubItems}
        />
        <ListItem
          id="work"
          mainLink="/works"
          mainTitle="Works"
          subItems={worksSubItems}
        />
        <ListItem
          id="blog"
          mainLink="/blogs"
          mainTitle="Blog"
          subItems={blogSubItems}
        />
        <ListItem
          id="qa"
          mainLink="/question"
          mainTitle="Q&A"
          subItems={qaSubItems}
        />
      </Header>
      <div className={styles.blog}>
        <div className={styles.blogHeader}>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.dateBox}>
            <FaPencilAlt className={styles.icon} />
            <p className={styles.createdAt}>{createdAtFormat}</p>
            <FaCalendarAlt className={styles.icon} />
            <p className={styles.updatedAt}>{updatedAtFormat}</p>
          </div>
          <Image
            className={styles.image}
            src={img}
            width={1280}
            height={700}
            alt="work-top-image"
          />
        </div>
        <div className={styles.container}>{children}</div>
      </div>
      <Contact />
    </div>
  );
};

export default BlogTemp;
