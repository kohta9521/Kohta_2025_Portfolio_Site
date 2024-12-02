import React from "react";

// scss
import styles from "./styles/About.module.scss";

// components
import SecTitle from "../atoms/SecTitle";

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
          ヒト･モノ･コトのつながりをデザインし、
          <br />
          世の中を彩るクリエイティブカンパニーです。
        </h1>
        <p className={styles.desc}>
          わたしたちは人の心が世界の原点であると信じています。
          <br />
          <br />
          そのことをとても大切に考えており、
          <br />
          関わりある方々の想いをもとに、共に生み出すものが、
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
            わたしたちは丁寧かつ真摯にクリエイティブに取り組み、
            <br />
            お客さまと共に輝き溢れる未来を共創します。
          </span>
        </p>
      </div>
    </div>
  );
};

export default About;
