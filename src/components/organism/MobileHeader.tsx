import React from "react";

// next
import Link from "next/link";

// components
import Logo from "../atoms/Logo";
import Hamburger from "./Hamburger";

const MobileHeader = () => {
  return (
    <div className="h-20 sm:hidden">
      <div className="w-11/12 h-full mx-auto flex justify-between items-center">
        <Logo id="mobile-header-logo" link="/" size="medium" color="white" />
        <div className="w-10 h-full flex justify-end items-center">
          <Link
            className="w-24 h-8 px-4 mr-3 rounded-lg bg-red-600 text-center"
            href="/contact"
          >
            <p className="leading-8 text-sm font-semibold">Contact</p>
          </Link>
          <Hamburger />
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
