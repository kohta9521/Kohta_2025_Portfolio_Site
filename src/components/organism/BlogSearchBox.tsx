import React from "react";

// scss
import styles from "./styles/BlogSearchBox.module.scss";

// icons
import { FaSearch } from "react-icons/fa";
import { FaTags } from "react-icons/fa6";
import { FaPencilAlt } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";

// components

const BlogSearchBox = () => {
  return (
    <div className={styles.box}>
      <div className={styles.top}>
        <div className={styles.top_left}>
          <FaSearch className={styles.icon} />
          <p className={styles.title}>キーワードで検索</p>
        </div>
        <div className={styles.top_right}>
          <input
            className={styles.textInput}
            type="text"
            placeholder="Next.jsでの環境構築について"
          />
        </div>
      </div>
      <div className={styles.middle}>
        <div className={styles.middle_left}>
          <FaTags className={styles.icon} />
          <p className={styles.title}>タグで検索</p>
        </div>
        <div className={styles.middle_right}></div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.bottom_left}>
          <FaPencilAlt className={styles.icon} />
          <p className={styles.title}>記事投稿日</p>
          <input type="date" />
        </div>
        <div className={styles.bottom_right}>
          <FaCalendarAlt className={styles.icon} />
          <p className={styles.title}>最終更新日</p>
          <input type="date" />
        </div>
      </div>
      <button className={styles.searchButton}>検索する</button>
    </div>
  );
};

export default BlogSearchBox;
