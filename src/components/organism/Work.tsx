"use client";
import React, { useState } from "react";

// scss
import styles from "./styles/Work.module.scss";

// hooks
import useAOS from "@/hooks/useAOS";

// components
import SecTitle from "../atoms/SecTitle";
import WorkCard, { WorkCardProps } from "../molecules/WorkCard";

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
  // 他のWorkCardを追加可能
];

const Work = () => {
  useAOS();
  const [currentIndex, setCurrentIndex] = useState(0);

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
              transform: `translateX(-${currentIndex * (600 + 30)}px)`, // WorkCardの幅520px + margin-right: 30px
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
          <button className={styles.button} onClick={handlePrev}>
            ←
          </button>
          <button className={styles.button} onClick={handleNext}>
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Work;
