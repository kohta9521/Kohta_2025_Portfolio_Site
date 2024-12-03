import React from "react";

// scss
import styles from "./styles/Menu.module.scss";

// data
import { profileSubItems } from "@/data/subItems";

// components
import DropDownMenu from "../molecules/DropDownMenu";

// props
interface MenuProps {
  isOpen: boolean;
}

const Menu = ({ isOpen }: MenuProps) => {
  return (
    <div className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
      <DropDownMenu
        id="profile"
        mainTitle="Profile"
        subItems={profileSubItems}
      />
    </div>
  );
};

export default Menu;
