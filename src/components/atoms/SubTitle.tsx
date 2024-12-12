import React from "react";

// scss
import styles from "./styles/SubTitle.module.scss";

// components

// props
export type SubTitleProps = {
  id: string;
  size: "h1" | "h2" | "h3" | "h4";
  text: string;
};

const SubTitle = ({ id, size = "h1", text }: SubTitleProps) => {
  const Tag = size;
  return (
    <div className={styles.box} key={id}>
      <Tag className={`${styles.title} ${styles[size]}`}>{text}</Tag>
    </div>
  );
};

export default SubTitle;
