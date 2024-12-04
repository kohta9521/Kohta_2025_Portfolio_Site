"use client";
import React, { useState, useEffect } from "react";

// scss
import styles from "./styles/Work.module.scss";

// hooks
import useAOS from "@/hooks/useAOS";

// components
import SecTitle from "../atoms/SecTitle";
import WorkCard, { WorkCardProps } from "../molecules/WorkCard";
import MainButton from "../atoms/MainButton";

// デモデータ
const workCards: WorkCardProps[] = [
  {
    id: "1",
    link: "/works/project1",
    img: "/images/home/kokogohan.png",
    clientName: "Client A",
    title: "Project A",
    genre: "Web Development",
  },
  {
    id: "2",
    link: "/works/project2",
    img: "/images/home/hokulea.png",
    clientName: "Client B",
    title: "Project B",
    genre: "Software Development",
  },
  {
    id: "3",
    link: "/works/project3",
    img: "/images/home/blog.png",
    clientName: "Client C",
    title: "Project C",
    genre: "Design",
  },
  {
    id: "4",
    link: "/works/project4",
    img: "/images/home/ufes.png",
    clientName: "Client C",
    title: "Project C",
    genre: "Design",
  },
  {
    id: "5",
    link: "/works/project4",
    img: "/images/home/freers.png",
    clientName: "Client C",
    title: "Project C",
    genre: "Design",
  },
];

const Work = () => {
  useAOS();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(600); // 初期値600px

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
    setCurrentIndex((prev) => (prev === 0 ? workCards.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= workCards.length - 1 ? 0 : prev + 1));
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
            {workCards.map((card) => (
              <div key={card.id} className={styles.slide}>
                <WorkCard {...card} />
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
