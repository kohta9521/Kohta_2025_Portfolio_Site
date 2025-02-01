"use client";
import React, { useState } from "react";
import HamburgerButton from "../molecules/HamburgerButton";
import HamburgerMenu from "../molecules/HamburgerMenu";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div>
      <HamburgerButton isOpen={isOpen} toggleMenu={toggleMenu} />
      <HamburgerMenu isOpen={isOpen} closeMenu={closeMenu} />
    </div>
  );
};

export default Hamburger;
