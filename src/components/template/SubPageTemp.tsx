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
  jaTitle: string;
  enTitle: string;
  children: React.ReactNode;
};

const SubPageTemp = ({ id, jaTitle, enTitle, children }: SubPageTempProps) => {
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
      <div className={styles.top}>
        <h1 className={styles.jaTitle}>{jaTitle}</h1>
        <p className={styles.enTitle}>{enTitle}</p>
      </div>
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default SubPageTemp;
