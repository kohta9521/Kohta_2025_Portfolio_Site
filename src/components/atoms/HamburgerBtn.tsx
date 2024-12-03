"use client";
import React, { useState } from "react";

// scss
import styles from "./styles/HamburgerBtn.module.scss";

// components
import Menu from "../organism/Menu";

const HamburgerBtn = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={styles.box}>
        <button className={styles.hamburger} onClick={toggleMenu}>
          <span className={isOpen ? styles.open : ""}></span>
          <span className={isOpen ? styles.open : ""}></span>
          <span className={isOpen ? styles.open : ""}></span>
        </button>
      </div>
      <Menu isOpen={isOpen} />
    </>
  );
};

export default HamburgerBtn;
