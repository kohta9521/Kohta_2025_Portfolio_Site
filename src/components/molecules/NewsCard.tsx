import React from "react";

// next
import Link from "next/link";

// scss
import styles from "./styles/NewsCard.module.scss";

// props
export type NewsCardProps = {
  id: string;
  link: string;
  genre: string;
  date: string;
  text: string;
};

const NewsCard = ({ id, link, genre, date, text }: NewsCardProps) => {
  return (
    <Link className={styles.news} key={id} href={link}>
      <p className={styles.genre}>{genre}</p>
      <p className={styles.date}>{date}</p>
      <p className={styles.text}>{text}</p>
    </Link>
  );
};

export default NewsCard;
