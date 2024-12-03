import React from "react";

// scss
import styles from "../styles/page.module.scss";

// data
import { profileSubItems, worksSubItems, blogSubItems } from "@/data/subItems";

// components
import Header from "@/components/organism/Header";
import ListItem from "@/components/molecules/ListItem";
import Hero from "@/components/organism/Hero";
import About from "@/components/organism/About";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header id="home">
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
      <Hero />
      <About />
    </div>
  );
}
