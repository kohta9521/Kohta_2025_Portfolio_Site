"use client";
import React, { useState, useEffect } from "react";

// scss
import styles from "./styles/ScrollTopButton.module.scss"; // スタイルファイルを作成

const ScrollTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // スクロールイベントハンドラ
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // ページトップにスムーズにスクロールする関数
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className={styles.scrollTopButton}>
      {isVisible && (
        <button onClick={scrollToTop} className={styles.button}>
          ↑ Top
        </button>
      )}
    </div>
  );
};

export default ScrollTopButton;
