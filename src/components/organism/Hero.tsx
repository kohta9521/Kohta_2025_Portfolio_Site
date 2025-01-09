import React from "react";

// scss
import styles from "./styles/Hero.module.scss";

// spline
import Spline from "@splinetool/react-spline/next";

// components

const Hero = () => {
  return (
    <div className={styles.hero}>
      <Spline scene="https://prod.spline.design/NhFAEoemg3q4zeRY/scene.splinecode" />
      <div className={styles.titleBox}>
        <p className={styles.subTitle}>kohta kochi</p>
        <h1 className={styles.title}>
          SCALABLE IT SOLUTIONS,
          <br />
          DESIGNED FOR PERFORMANCE & USER EXPERIENCE
        </h1>
        {/* <div className={styles.hideLogo}></div> */}
      </div>
    </div>
  );
};

export default Hero;
