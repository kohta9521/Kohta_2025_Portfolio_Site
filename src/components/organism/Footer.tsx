import React from "react";

// next
import Link from "next/link";

// scss
import styles from "./styles/Footer.module.scss";

// components
import Logo from "../atoms/Logo";

// data
// import {
//   profileSubItems,
//   worksSubItems,
//   blogSubItems,
//   qaSubItems,
// } from "@/data/subItems";

// type
export type snsArray = {
  id: string;
  link: string;
  icon: React.ReactNode;
};

const Footer = () => {
  const sns: snsArray[] = [
    {
      id: "twitter",
      link: "https://twitter.com/kohta",
      icon: <i className="fab fa-twitter"></i>,
    },
  ];
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <Logo id="footer-logo" link="/" size="medium" />
          <div className={styles.right}>
            <Link className={styles.topButton} href="/">
              <p className={styles.text}>Top</p>
            </Link>
          </div>
        </div>
        <div className={styles.center}>
          <div className={styles.left}>
            {sns.map((item) => (
              <Link key={item.id} className={styles.icon} href={item.link}>
                {item.icon}
              </Link>
            ))}
          </div>
          <div className={styles.right}></div>
        </div>
        <div className={styles.bottom}>
          <Link className={styles.link} href="/privacypolicy">
            <p className={styles.text}>privacy policy</p>
          </Link>
          <p className={styles.copyRight}>© 2025 kohta portfolio site</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
