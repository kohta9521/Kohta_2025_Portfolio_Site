import React from "react";

// icons
import { FaRegFilePdf } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";

// components
import Logo from "../atoms/Logo";
import ListItem from "../atoms/ListItem";
import ListBlockItem from "../atoms/ListBlockItem";

// components

const Header = () => {
  return (
    <div className="hidden sm:block sm:w-screen sm:h-16 sm:py-4">
      <div className="w-11/12 h-auto mx-auto flex justify-between items-center">
        <Logo id="top-logo" link="/" size="x-large" color="white" />
        <div className="hidden sm:w-auto sm:flex justify-between items-center">
          <ListItem id="top-link-1" link="/about" text="About" />
          <ListItem id="top-link-2" link="/profile" text="Profile" />
          <ListItem id="top-link-3" link="/works" text="Works" />
          <ListItem id="top-link-4" link="/blog" text="Blog" />
          <ListItem id="top-link-5" link="/news" text="News" />
        </div>
        <div className="hidden  sm:flex sm:justify-end sm:items-center">
          <ListBlockItem
            id="top-link-6"
            link="/pdf/portfolio.pdf"
            icon={
              <FaRegFilePdf
                size={17}
                className="mr-2 transition-all duration-300 group-hover:text-red-600"
              />
            }
            text="PDF"
          />
          <ListBlockItem
            id="top-link-7"
            link="/contact"
            icon={
              <FaPhone
                size={15}
                className="mr-2 transition-all duration-300 group-hover:text-red-600"
              />
            }
            text="Contact"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
