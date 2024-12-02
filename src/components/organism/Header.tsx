import React from "react";

// scss
import styles from "./styles/Header.module.scss";

// icon
import { FaPhone } from "react-icons/fa";
import { GrDocumentPdf } from "react-icons/gr";

// components
import Logo from "../atoms/Logo";
import ListBoxItem from "../atoms/ListBoxItem";

// props
export type HeaderProps = {
  id: string;
  children: React.ReactNode;
};

const Header = ({ id, children }: HeaderProps) => {
  return (
    <div className={styles.header} key={id}>
      <div className={styles.container}>
        <Logo id="logo" link="/" size="medium" />
        <div className={styles.listBox}>{children}</div>
        <div className={styles.rightBox}>
          <ListBoxItem
            id="resume"
            link="/resume"
            text="Resume"
            iconBool={true}
            reactIcon={<GrDocumentPdf />}
            bgColor="pink"
          />
          <ListBoxItem
            id="contact"
            link="/contact"
            text="Contact"
            iconBool={true}
            reactIcon={<FaPhone />}
            bgColor="pink"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
