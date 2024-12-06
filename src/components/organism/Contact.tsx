"use client";
import React from "react";

// scss
import styles from "./styles/Contact.module.scss";

// components
// import ContactContent from "../molecules/ContactContent";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.container}>
        <h1>this area is contact area</h1>
        {/* <ContactContent /> */}
      </div>
    </div>
  );
};

export default Contact;
