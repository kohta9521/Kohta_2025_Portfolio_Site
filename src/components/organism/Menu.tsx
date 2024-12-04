import React from "react";

// scss
import styles from "./styles/Menu.module.scss";

// data
import { profileSubItems, worksSubItems, blogSubItems } from "@/data/subItems";

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
      <DropDownMenu id="work" mainTitle="Works" subItems={worksSubItems} />
      <DropDownMenu id="blog" mainTitle="Blog" subItems={blogSubItems} />
    </div>
  );
};

export default Menu;
