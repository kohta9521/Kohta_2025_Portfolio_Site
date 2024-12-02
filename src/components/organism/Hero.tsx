import React from "react";

// scss
import styles from "./styles/Hero.module.scss";

// spline
import Spline from "@splinetool/react-spline/next";

// components

const Hero = () => {
  return (
    <div className={styles.hero}>
      <Spline scene="https://prod.spline.design/2xBjYs9kFeqH7Uey/scene.splinecode" />
    </div>
  );
};

export default Hero;
