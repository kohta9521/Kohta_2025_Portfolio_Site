"use client";
import React from "react";

// next
// import Image from "next/image";
import Link from "next/link";

// hooks
import useAOS from "@/hooks/useAOS";

// data
import { profileSubItems, worksSubItems, blogSubItems } from "@/data/subItems";

// scss
import styles from "./styles/SubPageTemp.module.scss";

// components
import Header from "../organism/Header";
import ListItem from "../molecules/ListItem";

// type
export type SubPageSecType = {
  id: string;
  title: string;
  link: string;
};

// props
export type SubPageTempProps = {
  id: string;
  jaTitle: string;
  enTitle: string;
  sectionArray?: SubPageSecType[];
  children: React.ReactNode;
};

const SubPageTemp = ({
  id,
  jaTitle,
  enTitle,
  sectionArray = [],
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
      <div className={styles.top}>
        <p className={styles.jaTitle}>{jaTitle}</p>
        <h1 className={styles.enTitle}>{enTitle}</h1>
        <div className={styles.linkArea}>
          {sectionArray.map((i) => (
            <Link key={i.id} className={styles.link} href={i.link}>
              <p className={styles.text}>{i.title}</p>
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default SubPageTemp;
