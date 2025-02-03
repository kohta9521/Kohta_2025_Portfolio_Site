import React from "react";

// next
import Link from "next/link";

// props
export type FooterBottomItemProps = {
  id: string;
  link: string;
  text: string;
};

const FooterSubItem: React.FC<FooterBottomItemProps> = ({ id, link, text }) => {
  return (
    <Link key={id} href={link} className="block group mb-2 sm:mr-6">
      <p className="text-xs text-gray-400 group-hover:text-red-500 transition-all duration-150 sm:text-sm">
        {text}
      </p>
    </Link>
  );
};

export default FooterSubItem;
