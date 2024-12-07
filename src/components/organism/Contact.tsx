"use client";
import React from "react";

// next
import Link from "next/link";

// scss
import styles from "./styles/Contact.module.scss";

// components
// import ContactContent from "../molecules/ContactContent";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.box}>
          <h2 className={styles.title}>お問い合わせ</h2>
          <p className={styles.enTitle}>Contact</p>
          <p className={styles.desc}>
            お仕事の依頼やご相談など、お気軽にお話しましょう。
          </p>
          <Link className={styles.link} href="/contact">
            <p className={styles.linkText}>話をしてみる</p>
          </Link>
        </div>
        {/* <ContactContent /> */}
      </div>
    </div>
  );
};

export default Contact;
