import React from "react";

// next
import Link from "next/link";

// clsx
import clsx from "clsx";

// props
export type ListBlockItemProps = {
  id: string;
  link: string;
  icon: React.ReactNode;
  text: string;
};

const ListBlockItem = ({ id, link, icon, text }: ListBlockItemProps) => {
  return (
    <Link
      key={id}
      href={link}
      className={clsx(
        "group mr-6 flex items-center border-2 rounded-md px-3 py-1 cursor-pointer transition-all duration-300 hover:border-red-600"
      )}
    >
      {icon}
      <p className="transition-all duration-300 group-hover:text-red-600">
        {text}
      </p>
    </Link>
  );
};

export default ListBlockItem;
