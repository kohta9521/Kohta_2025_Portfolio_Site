"use client";
import React, { useState } from "react";

// next
import Link from "next/link";

// types
import { SubItem } from "@/types/types";

// scss
import styles from "./styles/ListItem.module.scss";

// props
export type ListItemProps = {
  id: string;
  mainLink: string;
  mainTitle: string;
  subItems: SubItem[];
};

const ListItem = ({ id, mainTitle, mainLink, subItems }: ListItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      key={id}
      className={styles.listItem}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link key={id} className={styles.mainLink} href={mainLink}>
        <p className={styles.mainTitle}>{mainTitle}</p>
      </Link>

      {/* サブメニュー */}
      <div className={`${styles.subMenu} ${isHovered ? styles.visible : ""}`}>
        {subItems.map((item) => (
          <Link href={item.link} key={item.key} className={styles.subItem}>
            <div className={styles.icon}>{item.reactIcon}</div>
            <div className={styles.text}>
              <p className={styles.jaTitle}>{item.jaTitle}</p>
              <p className={styles.enTitle}>{item.enTitle}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default ListItem;
