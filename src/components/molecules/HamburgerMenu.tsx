"use client";
import React from "react";

// next
import Link from "next/link";

// components
// import HamburgerScreenButton from "../atoms/HamburgerScreenButton";

// props
export type HamburgerMenuProps = {
  isOpen: boolean;
  closeMenu: () => void;
};

// icon
// import { IoHomeOutline } from "react-icons/io5";

const HamburgerMenu = ({ isOpen, closeMenu }: HamburgerMenuProps) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen bg-black text-white transition-opacity duration-300 z-50 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <button
        onClick={closeMenu}
        className="absolute top-6 right-7 text-2xl font-bold text-white"
      >
        ✕
      </button>
      <ul className="flex flex-col items-center justify-center h-full space-y-6">
        <li>
          <Link
            href="/"
            onClick={closeMenu}
            className="text-xl hover:underline"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            onClick={closeMenu}
            className="text-xl hover:underline"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/service"
            onClick={closeMenu}
            className="text-xl hover:underline"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            href="/work"
            onClick={closeMenu}
            className="text-xl hover:underline"
          >
            Works
          </Link>
        </li>
        <li>
          <Link
            href="/blog"
            onClick={closeMenu}
            className="text-xl hover:underline"
          >
            Blogs
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            onClick={closeMenu}
            className="text-xl hover:underline"
          >
            Contact
          </Link>
        </li>
        {/* <li>
          <HamburgerScreenButton
            id="sample"
            link="/"
            icon={<IoHomeOutline size={20} className="text-semibold" />}
            text="Sample"
          />
        </li> */}
      </ul>
    </div>
  );
};

export default HamburgerMenu;
