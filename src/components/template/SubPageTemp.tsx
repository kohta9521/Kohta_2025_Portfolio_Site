"use client";
import React from "react";

// next
import Image from "next/image";

// hooks
import useAOS from "@/hooks/useAOS";

// scss
import styles from "./styles/SubPageTemp.module.scss";

// components

// props
export type SubPageTempProps = {
  id: string;
  img: string;
  enTitle: string;
  jaTitle: string;
  desc: string;
  children: React.ReactNode;
};

const SubPageTemp = ({
  id,
  img,
  enTitle,
  jaTitle,
  desc,
  children,
}: SubPageTempProps) => {
  useAOS();
  return (
    <div className={styles.page} key={id}>
      <Image
        data-aos="fade-up"
        className={styles.topImage}
        src={img}
        width={400}
        height={400}
        alt="top-image"
      />
      <div className={styles.top}>
        <h1 className={styles.title} data-aos="fade-up">
          {enTitle}
        </h1>
        <h2 className={styles.jaTitle} data-aos="fade-up">
          {jaTitle}
        </h2>
        <p className={styles.desc} data-aos="fade-up">
          {desc}
        </p>
      </div>
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default SubPageTemp;
