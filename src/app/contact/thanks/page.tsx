import React from "react";

// next
import Link from "next/link";

// scss
import styles from "./Thanks.module.scss";

// components

const Thanks = () => {
  return (
    <div className={styles.page}>
      <p className={styles.text}>this page is thanks page</p>
      <Link href="/">Topへ戻る</Link>
    </div>
  );
};

export default Thanks;
