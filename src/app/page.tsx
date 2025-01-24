import React from "react";

// scss
import styles from "../styles/page.module.scss";

// data
import {
  profileSubItems,
  worksSubItems,
  blogSubItems,
  qaSubItems,
} from "@/data/subItems";

// components
import Header from "@/components/organism/Header";
import ListItem from "@/components/molecules/ListItem";
import Hero from "@/components/organism/Hero";
import About from "@/components/organism/About";
import Work from "@/components/organism/Work";
import Blog from "@/components/organism/Blog";
import Profile from "@/components/organism/Profile";
import News from "@/components/organism/News";
import Contact from "@/components/organism/Contact";
import Footer from "@/components/organism/Footer";
import Service from "@/components/organism/Service";

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
      <Hero />
      <About />
      <Service />
      <Profile />
      <Work />
      <Blog />
      <News />
      <Contact />
      <Footer />
    </div>
  );
}
