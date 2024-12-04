import React from "react";

// next
import Link from "next/link";
import Image from "next/image";

// scss
import styles from "./styles/WorkCard.module.scss";

// props
export type WorkCardProps = {
  id: string;
  link: string;
  img: string;
  clientName: string;
  title: string;
  genre: string;
};

const WorkCard = ({
  id,
  link,
  img,
  clientName,
  title,
  genre,
}: WorkCardProps) => {
  return (
    <Link href={link} key={id} className={styles.workCard}>
      <Image
        className={styles.image}
        src={img}
        width={520}
        height={330}
        alt="work-top-image"
      />
      <p className={styles.clientName}>{clientName}</p>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.genre}>{genre}</p>
    </Link>
  );
};

export default WorkCard;
