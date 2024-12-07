"use client";
import React from "react";

// next
import Link from "next/link";
import Image from "next/image";

// scss
import styles from "./styles/BlogCard.module.scss";

// props
export type BlogCardProps = {
  id: string;
  title: string;
  img: string;
  link: string;
  date: string;
};

const BlogCard = ({ id, title, link, img, date }: BlogCardProps) => {
  return (
    <Link className={styles.card} key={id} href={link}>
      <Image
        className={styles.image}
        src={img}
        width={520}
        height={330}
        alt="blog-top-image"
      />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.date}>{date}</p>
    </Link>
  );
};

export default BlogCard;
