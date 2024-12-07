import React from "react";

// next
import Link from "next/link";
import Image from "next/image";

// scss
import styles from "./styles/WorkTemp.module.scss";

// icons
import { FaExternalLinkAlt } from "react-icons/fa";

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
export type WorkTempProps = {
  id: string;
  client: string;
  title: string;
  desc: string;
  link: string;
  img: string;
  children: React.ReactNode;
};

const WorkTemp = ({
  id,
  client,
  title,
  desc,
  link,
  img,
  children,
}: WorkTempProps) => {
  return (
    <div className={styles.page} key={id}>
      <Header id="work-children">
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
        <ListItem
          id="qa"
          mainLink="/question"
          mainTitle="Q&A"
          subItems={qaSubItems}
        />
      </Header>
      <div className={styles.hero}>
        <p className={styles.client}>{client}</p>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.desc}>{desc}</p>
        <Link className={styles.link} href={`${link}`}>
          <p className={styles.linkText}>Webサイトを見る</p>
          <FaExternalLinkAlt className={styles.linkIcon} />
        </Link>
        <Image
          className={styles.image}
          src={img}
          width={1280}
          height={700}
          alt="work-top-image"
        />
      </div>
      <div className={styles.container}>{children}</div>
      <Contact />
    </div>
  );
};

export default WorkTemp;
