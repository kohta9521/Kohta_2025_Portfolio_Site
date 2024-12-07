import React from "react";

// scss
import styles from "./styles/Footer.module.scss";

// components

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}></div>
        <div className={styles.center}></div>
        <div className={styles.bottom}></div>
      </div>
    </div>
  );
};

export default Footer;
