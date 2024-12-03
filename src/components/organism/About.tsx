import React from "react";

// scss
import styles from "./styles/About.module.scss";

// components
import SecTitle from "../atoms/SecTitle";
import MainButton from "../atoms/MainButton";
import AboutCard from "../molecules/AboutCard";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <SecTitle
          id="about-title"
          jaTitleSize="default"
          jaTitle="私について"
          enTitle="About me"
        />
        <h1 className={styles.title}>
          全ての人にITで期待を超える価値を提供する
          <br />
          クリエイターとしてのプライドをかけて
        </h1>
        <p className={styles.desc}>
          初めまして、kohta kochiと申します!
          <br />
          <br />
          都内の大学の法学部法学科に在学中の学部3年生です。
          <br />
          大学生をしながら、Web制作やソフトウェア開発、デザイン制作などの活動を行っています。
          <br />
          社会や誰かの人生に彩りを与えられることを信じています。
          <br />
          <br />
          ですが、同時に想いの強さだけでは人の心を動かすことはできないと理解し、
          <br />
          テクノロジーとプロの知見を活かし、その壁を共に越えたいと考えています。
          <br />
          <br />
          <span className={styles.accentText}>
            わたしは丁寧かつ真摯にクリエイティブに取り組み、
            <br />
            お客さまと共に輝き溢れる未来を共創します。
          </span>
        </p>
        <div className={styles.buttonBox}>
          <MainButton
            id="about-me"
            text="さらに詳しく"
            link="/about"
            size="medium"
          />
        </div>

        <SecTitle
          id="about-title"
          jaTitleSize="default"
          jaTitle="私が提供しているサービス"
          enTitle="Services I offer"
        />
        <AboutCard
          id="web-card"
          title="Web制作"
          desc="課題解決につながるクリエイティブをご提案します。"
          linkText="詳しくみる"
          link="/service/web"
          imgArray={[
            "/images/home/blog.png",
            "/images/home/freers.png",
            "/images/home/hokulea.png",
            "/images/home/kokogohan.png",
            "/images/home/ufes.png",
          ]}
        />
        <AboutCard
          id="software-card"
          title="ソフトウェア開発"
          desc="課題解決につながるクリエイティブをご提案します。"
          linkText="詳しくみる"
          link="/service/web"
          imgArray={[
            "/images/home/blog.png",
            "/images/home/freers.png",
            "/images/home/hokulea.png",
            "/images/home/kokogohan.png",
            "/images/home/ufes.png",
          ]}
        />
        <AboutCard
          id="design-card"
          title="デザイン制作"
          desc="課題解決につながるクリエイティブをご提案します。"
          linkText="詳しくみる"
          link="/service/web"
          imgArray={[
            "/images/home/blog.png",
            "/images/home/freers.png",
            "/images/home/hokulea.png",
            "/images/home/kokogohan.png",
            "/images/home/ufes.png",
          ]}
        />
      </div>
    </div>
  );
};

export default About;
