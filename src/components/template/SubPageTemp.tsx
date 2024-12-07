"use client";
import React from "react";

// next
import Image from "next/image";

// hooks
import useAOS from "@/hooks/useAOS";

// data
import { profileSubItems, worksSubItems, blogSubItems } from "@/data/subItems";

// scss
import styles from "./styles/SubPageTemp.module.scss";

// components
import Header from "../organism/Header";
import ListItem from "../molecules/ListItem";

// props
export type SubPageTempProps = {
  id: string;
  img: string;
  enTitle: string;
  jaTitle: string;
  desc: string;
  children: React.ReactNode;
};

const SubPageTemp = ({
  id,
  img,
  enTitle,
  jaTitle,
  desc,
  children,
}: SubPageTempProps) => {
  useAOS();
  return (
    <div className={styles.page} key={id}>
      <Header id="profile">
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
          mainLink="/blog"
          mainTitle="Blog"
          subItems={blogSubItems}
        />
      </Header>
      {/* <Image
        data-aos="fade-up"
        className={styles.topImage}
        src={img}
        width={400}
        height={400}
        alt="top-image"
      /> */}
      <div className={styles.top}>
        <h1 className={styles.title} data-aos="fade-up">
          {enTitle}
        </h1>
        <h2 className={styles.jaTitle} data-aos="fade-up">
          {jaTitle}
        </h2>
        <p className={styles.desc} data-aos="fade-up">
          {desc}
        </p>
      </div>
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default SubPageTemp;
