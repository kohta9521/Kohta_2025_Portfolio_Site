"use client";
import React, { useState, useEffect } from "react";

// scss
import styles from "./styles/Work.module.scss";

// hooks
import useAOS from "@/hooks/useAOS";
import useGetAllWorks from "@/hooks/useGetAllWorks";

// components
import SecTitle from "../atoms/SecTitle";
import WorkCard from "../molecules/WorkCard";
import MainButton from "../atoms/MainButton";

const Work = () => {
  useAOS();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(600); // 初期値600px

  // カードデータを取得
  const works = useGetAllWorks();

  // ウィンドウ幅に応じたカード幅を設定
  useEffect(() => {
    const updateCardWidth = () => {
      if (window.innerWidth <= 768) {
        setCardWidth(280); // スマホ幅
      } else {
        setCardWidth(600); // デスクトップ幅
      }
    };

    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);

    return () => {
      window.removeEventListener("resize", updateCardWidth);
    };
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? works.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= works.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={styles.work}>
      <div className={styles.container}>
        <SecTitle
          id="work-title"
          jaTitleSize="default"
          jaTitle="制作実績"
          enTitle="Works"
        />
        {/* WorkCardコンポーネントを配置 */}
        <div className={styles.slideBox}>
          <div
            data-aos="fade-up"
            className={styles.slider}
            style={{
              transform: `translateX(-${currentIndex * (cardWidth + 30)}px)`, // カード幅 + margin-right: 30px
            }}
          >
            {works.map((work) => (
              <div key={work.id} className={styles.slide}>
                <WorkCard
                  id={work.id}
                  link={`/works/${work.id}`}
                  img={work.top_image?.url || "/images/home/blog.png"}
                  clientName={work.client}
                  title={work.title}
                  genre={work.category?.name || "No Genre"}
                />
              </div>
            ))}
          </div>
        </div>
        {/* スライドの左右切り替えボタンと詳細ボタン */}
        <div className={styles.bottom} data-aos="fade-up">
          <div className={styles.left}>
            <button className={styles.button} onClick={handlePrev}>
              ←
            </button>
            <button className={styles.button} onClick={handleNext}>
              →
            </button>
          </div>
          <div className={styles.right}>
            <MainButton
              id="work-more"
              text="もっと見る"
              link="/works"
              size="medium"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
