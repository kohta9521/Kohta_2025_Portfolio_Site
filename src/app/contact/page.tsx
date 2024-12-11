import React from "react";

// scss
import styles from "./Contact.module.scss";

// components
import SubPageTemp from "@/components/template/SubPageTemp";

const Contact = () => {
  return (
    <SubPageTemp
      id="contact"
      enTitle="CONTACT"
      jaTitle="お問い合わせ"
      desc="お仕事のご依頼やお問い合わせなどはこちらからお願いします。"
    >
      <p className={styles.title}>contact form</p>
    </SubPageTemp>
  );
};

export default Contact;
