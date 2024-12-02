import React from "react";

// next
import Link from "next/link";

// icon

// scss
import styles from "./styles/ListBoxItem.module.scss";

// props
export type ListBoxItemProps = {
  id: string;
  link: string;
  text: string;
  iconBool?: boolean;
  reactIcon?: React.ReactNode;
  bgColor?: "pink" | "white";
};

const ListBoxItem = ({
  id,
  link,
  text,
  iconBool = false,
  reactIcon,
  bgColor = "pink",
}: ListBoxItemProps) => {
  return (
    <Link
      key={id}
      className={`${styles.button} ${styles[bgColor]}`}
      href={link}
    >
      {iconBool && <div className={styles.icon}>{reactIcon}</div>}
      <p className={styles.text}>{text}</p>
    </Link>
  );
};

export default ListBoxItem;
