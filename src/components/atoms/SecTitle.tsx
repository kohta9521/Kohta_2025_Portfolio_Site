import React from "react";

// scss
import styles from "./styles/SecTItle.module.scss";

// props
export type SecTitleProps = {
  id: string;
  jaTitleSize?: "small" | "default";
  jaTitle: string;
  enTitle: string;
};

const SecTitle = ({
  id,
  jaTitleSize = "default",
  jaTitle,
  enTitle,
}: SecTitleProps) => {
  return (
    <div className={styles.titleBox} key={id}>
      <h2 className={`${styles[jaTitleSize]} ${styles.jaTitle}`}>{jaTitle}</h2>
      <h3 className={styles.enTitle}>{enTitle}</h3>
    </div>
  );
};

export default SecTitle;
