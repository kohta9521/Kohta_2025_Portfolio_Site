import React from "react";

// next
import Link from "next/link";

// scss
import styles from "./styles/FooterItemsCard.module.scss";

// props
export type FooterItemsCardProps = {
  id: string;
  link: string;
  reactIcon: React.ReactNode;
  pageTitle: string;
  jaTitle: string;
  enTitle: string;
};

const FooterItemsCard = ({
  id,
  link,
  reactIcon,
  pageTitle,
  jaTitle,
  enTitle,
}: FooterItemsCardProps) => {
  return (
    <div className={styles.card} key={id}>
      <Link className={styles.mainTitle} href={link}>
        <p className={styles.mainTitleText}>{pageTitle}</p>
      </Link>
      <div className={styles.subItems}>
        {reactIcon}
        <p className={styles.jaTitle}>{jaTitle}</p>
        <p className={styles.enTitle}>{enTitle}</p>
      </div>
    </div>
  );
};

export default FooterItemsCard;
