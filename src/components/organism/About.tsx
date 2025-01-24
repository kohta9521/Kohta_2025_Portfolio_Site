"use client";
import React from "react";

// scss
import styles from "./styles/About.module.scss";

// hooks
import useAOS from "@/hooks/useAOS";

// spline
// import Spline from "@splinetool/react-spline/next";

// components
import SecTitle from "../atoms/SecTitle";
import MainButton from "../atoms/MainButton";

const About = () => {
  useAOS();
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <SecTitle
          id="about-title"
          jaTitleSize="default"
          jaTitle="私について"
          enTitle="About me"
        />
        <h1 className={styles.title} data-aos="fade-up">
          全ての人にITで期待を超える価値を提供する
          <br />
          クリエイターとしてのプライドをかけて
        </h1>
        <p className={styles.desc} data-aos="fade-up">
          初めまして、kohta kochiと申します!
          <br />
          <br />
          都内の大学の法学部法学科に在学中の学部3年生です。
          <br />
          大学生をしながら、Web制作やソフトウェア開発、デザイン制作などの活動を行っています。
          <br />
          <br />
          ITで人の役に立つのに年齢制限はない
          <br />
          <br />
          大学生という時間と場所に縛られない自由さを活かし、
          <br />
          テクノロジーとプロの知見でその壁を共に越えたいと考えています。
          <br />
          <br />
          <span className={styles.accentText}>
            わたしは丁寧かつ真摯にクリエイティブに取り組み、
            <br />
            お客さまと共に輝き溢れる未来を共創します。
          </span>
        </p>
        <div className={styles.buttonBox} data-aos="fade-up">
          <MainButton
            id="about-me"
            text="さらに詳しく"
            link="/about"
            size="medium"
          />
        </div>
        {/* test spline */}
        {/* <div className={styles.splineBox}>
          <Spline scene="https://prod.spline.design/uafgBPD4tGPDGkhR/scene.splinecode" />
        </div> */}
      </div>
    </div>
  );
};

export default About;
