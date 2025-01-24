import React from "react";

// next
import Link from "next/link";

// scss
import styles from "./styles/ServiceCard.module.scss";

// icon
import { IoIosArrowForward } from "react-icons/io";

// props
export type ServiceCardProps = {
  id: string;
  title: string;
  icon: React.ReactNode;
  desc: string;
  link: string;
};

const ServiceCard = ({ id, title, icon, desc, link }: ServiceCardProps) => {
  return (
    <div className={styles.card} key={id}>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.iconBox}>{icon}</div>
        <p className={styles.desc}>{desc}</p>
        <Link className={styles.link} href={link}>
          <p className={styles.text}>詳しく見る</p>
          <IoIosArrowForward className={styles.icon} />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
