import React from "react";

// scss
import styles from "./styles/Hero.module.scss";

// spline
// import Spline from "@splinetool/react-spline/next";

// components

const Hero = () => {
  return (
    <div className={styles.hero}>
      {/* <Spline scene="https://prod.spline.design/tLX1FbK2C1tvrgx6/scene.splinecode" /> */}
      <div className={styles.titleBox}>
        <p className={styles.subTitle}>kohta kochi</p>
        <h1 className={styles.title}>
          SCALABLE IT SOLUTIONS,
          <br />
          DESIGNED FOR PERFORMANCE & USER EXPERIENCE
        </h1>
      </div>
    </div>
  );
};

export default Hero;
