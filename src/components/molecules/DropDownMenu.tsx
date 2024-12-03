"use client";
import React, { useState } from "react";

// scss
import styles from "./styles/DropDownMenu.module.scss";

// types
import { SubItem } from "@/types/types";

// components
import DropDownItem from "../atoms/DropDownItem";

// props
export type DropDownMenuProps = {
  id: string;
  mainTitle: string;
  subItems: SubItem[];
};

const DropDownMenu = ({ id, mainTitle, subItems }: DropDownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={styles.dropdown} key={id}>
      <div className={styles.titleBox} onClick={toggleDropdown}>
        <p className={styles.title}>{mainTitle}</p>
        <span>{isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen && (
        <div className={styles.content}>
          {subItems.map((item) => (
            <DropDownItem
              key={item.key}
              link={item.link}
              reactIcon={item.reactIcon}
              jaTitle={item.jaTitle}
              enTitle={item.enTitle}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDownMenu;
