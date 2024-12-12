import React from "react";

// scss
import styles from "./styles/SubText.module.scss";

// props
export type SubTextProps = {
  id: string;
  text: string;
  size?: "Default" | "Small" | "Large";
};

const SubText = ({ id, text, size = "Default" }: SubTextProps) => {
  return (
    <p className={`${styles.text} ${styles[size]}`} key={id}>
      {text}
    </p>
  );
};

export default SubText;
