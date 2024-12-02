import React from "react";

// scss
import styles from "./styles/News.module.scss";

// components

const News = () => {
  return (
    <div className={styles.news}>
      <div className={styles.container}>
        <p className={styles.title}>News Area</p>
      </div>
    </div>
  );
};

export default News;
