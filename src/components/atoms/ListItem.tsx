import React from "react";

// next
import Link from "next/link";

// clsx
import clsx from "clsx";

// props
export type ListItemProps = {
  id: string;
  link: string;
  text: string;
};

const ListItem = ({ id, link, text }: ListItemProps) => {
  return (
    <Link
      key={id}
      href={link}
      className={clsx("block group h-10 mr-10  cursor-pointer")}
    >
      <p className="relative text-base font-semibold leading-10 transition-all duration-300 hover:text-red-600">
        {text}
        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>
      </p>
    </Link>
  );
};

export default ListItem;
