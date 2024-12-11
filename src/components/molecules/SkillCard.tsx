import React from "react";

// scss
import styles from "./styles/SkillCard.module.scss";

// props
export type SkillCardProps = {
  id: string;
  name: string;
  version: string[];
  reactIcon: React.ReactNode;
  years: number;
  skill: number;
  desc: string;
};

const SkillCard = ({
  id,
  name,
  version,
  reactIcon,
  years,
  skill,
  desc,
}: SkillCardProps) => {
  return (
    <>
      <div className={styles.card} key={id}>
        <div className={styles.icon}>{reactIcon}</div>
        <p className={styles.name}>{name}</p>
      </div>
      {/* hover div */}
      <div className={styles.hoverEvent}>
        <p>{version}</p>
        <p>{years}</p>
        <p>{skill}</p>
        <p>{desc}</p>
      </div>
    </>
  );
};

export default SkillCard;
