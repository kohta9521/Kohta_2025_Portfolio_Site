import React from "react";

// next
import Link from "next/link";

// props
export type HamburgerScreenButtonProps = {
  id: string;
  link: string;
  icon: React.ReactNode;
  text: string;
};

const HamburgerScreenButton = ({
  id,
  link,
  icon,
  text,
}: HamburgerScreenButtonProps) => {
  return (
    <Link
      key={id}
      href={link}
      className="w-screen h-auto py-3 flex items-center"
    >
      {icon}
      <p className="ml-3 text-xl">{text}</p>
    </Link>
  );
};

export default HamburgerScreenButton;
