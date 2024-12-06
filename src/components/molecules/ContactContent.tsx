"use client";
import React from "react";

// scss
import styles from "./styles/ContactContent.module.scss";

// google
// import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

// components

const ContactContent = () => {
  return (
    <div className={styles.contact}>
      {/* <GoogleReCaptchaProvider
        reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ""}
        language="ja"
      > */}
      <form action={process.env.NEXT_PUBLIC_NEWT_FORM_ENDPOINT} method="post">
        <label htmlFor="name">
          お名前<span className={styles.icon}>*</span>
        </label>
        <input id="name" name="name" required />
        <label htmlFor="email">
          メールアドレス<span className={styles.icon}>*</span>
        </label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="message">
          お問い合わせ内容<span className={styles.icon}>*</span>
        </label>
        <textarea id="message" name="message" required></textarea>
        <button type="submit">送信</button>
      </form>
      {/* </GoogleReCaptchaProvider> */}
    </div>
  );
};

export default ContactContent;
