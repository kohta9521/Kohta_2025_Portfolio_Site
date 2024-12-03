import React from "react";

// scss
import styles from "./styles/Menu.module.scss";

// components

// props
interface MenuProps {
  isOpen: boolean;
}

const Menu = ({ isOpen }: MenuProps) => {
  return <div className={`${styles.menu} ${isOpen ? styles.open : ""}`}></div>;
};

export default Menu;
