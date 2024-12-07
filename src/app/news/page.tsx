import React from "react";

// scss
import styles from "./News.module.scss";

// components

const News = () => {
  return (
    <div className={styles.news}>
      <div className={styles.container}>
        <h1 className={styles.title}>this area appear all news list</h1>
      </div>
    </div>
  );
};

export default News;
