import React from "react";

// next
import Link from "next/link";

// icons
import { IoArrowForwardCircleSharp } from "react-icons/io5";

// props
export type ButtonProps = {
  id: string;
  link: string;
  text: string;
};

const Button = ({ id, link, text }: ButtonProps) => {
  return (
    <Link
      key={id}
      className="inline-flex items-center justify-center w-72 h-12 mb-20 py-2 px-4 border border-red-600 rounded-full text-red-600 font-medium text-lg transition-all duration-300 hover:bg-red-600 hover:text-white group"
      href={link}
    >
      <p className="mr-3 transition-transform duration-300 group-hover:translate-x-1">
        {text}
      </p>
      <IoArrowForwardCircleSharp
        size={24}
        className="transition-transform duration-300 group-hover:translate-x-1"
      />
    </Link>
  );
};

export default Button;
