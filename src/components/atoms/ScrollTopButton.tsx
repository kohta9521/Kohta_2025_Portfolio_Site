"use client";
import React, { useState, useEffect } from "react";

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
    <div className="fixed bottom-4 right-4">
      {isVisible && (
        <button className="text-red-500" onClick={scrollToTop}>
          ↑ Top
        </button>
      )}
    </div>
  );
};

export default ScrollTopButton;
