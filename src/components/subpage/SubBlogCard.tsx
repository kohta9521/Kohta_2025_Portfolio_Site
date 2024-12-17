"use client";
import React from "react";

// next
import Link from "next/link";
import Image from "next/image";

// scss
import styles from "./styles/SubBlogCard.module.scss";

// types
export type SubBlogCardProps = {
  id: string;
  title: string;
  img: string;
  link: string;
  date: string;
};

const SubBlogCard = ({ id, title, link, img, date }: SubBlogCardProps) => {
  return (
    <Link className={styles.card} key={id} href={link}>
      <Image
        className={styles.image}
        src={img}
        width={350} // サムネイル画像の幅調整
        height={220}
        alt="blog-top-image"
      />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.date}>{date}</p>
    </Link>
  );
};

export default SubBlogCard;
