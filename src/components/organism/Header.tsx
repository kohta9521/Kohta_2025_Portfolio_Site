import React from "react";

// scss
import styles from "./styles/Header.module.scss";

// components
import Logo from "../atoms/Logo";

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
          <p>Contact</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
