import React from "react";

// scss
import styles from "./styles/SubText.module.scss";

// props
export type SubTextProps = {
  id: string;
  text: string;
  size?: "Default" | "Small" | "Large";
  color?: "Default" | "Primary" | "Secondary" | "Sub" | "Border" | "Box";
  weight?: "Default" | "Bold" | "Light";
  type?: "Default" | "Primary" | "Secondary" | "Sub" | "Border" | "Box";
  marginBottom?: "Default" | "Small" | "Large" | "Zero";
  // divで囲んで渡す必要あり
  children?: React.ReactNode;
};

const SubText = ({
  id,
  text,
  size = "Default",
  color = "Default",
  weight = "Default",
  type = "Default",
  marginBottom = "Default",
  children,
}: SubTextProps) => {
  return (
    <>
      <p
        className={`
        ${styles.text}
        ${styles[size]}
        ${styles[color]}
        ${styles[weight]}
        ${styles[type]}
        ${styles[marginBottom]}
      `}
        key={id}
      >
        {text}
      </p>
      {children}
    </>
  );
};

export default SubText;
