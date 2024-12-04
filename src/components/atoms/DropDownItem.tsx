import React from "react";

// next
import Link from "next/link";

// scss
import styles from "./styles/DropDownItem.module.scss";

// props
export type DropDownItemProps = {
  key: string;
  link: string;
  reactIcon: React.ReactNode;
  jaTitle: string;
  enTitle: string;
};

const DropDownItem = ({
  key,
  link,
  reactIcon,
  jaTitle,
  enTitle,
}: DropDownItemProps) => {
  return (
    <Link key={key} className={styles.button} href={link}>
      <div className={styles.icon}>{reactIcon}</div>
      <div className={styles.box}>
        <p className={styles.jaTitle}>{jaTitle}</p>
        <p className={styles.enTitle}>{enTitle}</p>
      </div>
    </Link>
  );
};

export default DropDownItem;
