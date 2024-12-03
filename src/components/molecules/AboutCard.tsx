"use client";
import React from "react";

// next
import Link from "next/link";
import Image from "next/image";

// hooks
import useAOS from "@/hooks/useAOS";

// scss
import styles from "./styles/AboutCard.module.scss";

// props
export type AboutCardProps = {
  id: string;
  title: string;
  desc: string;
  linkText?: string;
  link: string;
  imgArray: string[];
};

const AboutCard = ({
  id,
  title,
  desc,
  linkText = "詳しくみる",
  link,
  imgArray,
}: AboutCardProps) => {
  useAOS();
  return (
    <div className={styles.card} key={id} data-aos="fade-up">
      <div className={styles.left}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.desc}>{desc}</p>
        <Link className={styles.link} href={link}>
          <p className={styles.linkText}>{linkText}</p>
        </Link>
      </div>
      <div className={styles.right}>
        <div className={styles.sliderContainer}>
          <div className={styles.sliderTrack}>
            {[...imgArray, ...imgArray].map((path, index) => (
              <Image
                className={styles.image}
                key={index}
                src={path}
                alt={title}
                width={190}
                height={150}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
