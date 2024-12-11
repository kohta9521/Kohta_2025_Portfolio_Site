import React from "react";

// scss
import styles from "./Blogs.module.scss";

// components
import SubPageTemp from "@/components/template/SubPageTemp";

const Blogs = () => {
  return (
    <SubPageTemp id="blogs" enTitle="BLOGS" jaTitle="ブログ" desc="ブログ一覧">
      <p className={styles.main}>ブログ一覧</p>
    </SubPageTemp>
  );
};

export default Blogs;
