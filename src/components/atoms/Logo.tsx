import React from "react";

// next
import Link from "next/link";

// clsx
import clsx from "clsx";

// props
export type LogoProps = {
  id: string;
  link?: string;
  size: "x-small" | "small" | "medium" | "large" | "x-large";
  color: "white" | "black" | "red";
};

const Logo = ({
  id,
  link = "/",
  size = "medium",
  color = "white",
}: LogoProps) => {
  return (
    <Link
      key={id}
      href={link}
      className={clsx("block group leading-10 font-semibold cursor-pointer", {
        "text-xs": size === "x-small",
        "text-sm": size === "small",
        "text-base": size === "medium",
        "text-lg": size === "large",
        "text-xl": size === "x-large",
      })}
    >
      <p
        className={clsx("", {
          "text-white transition-all duration-200 hover:text-red-600":
            color === "white",
          "text-black": color === "black",
          "text-red-600": color === "red",
        })}
      >
        Kohta Portfolio
      </p>
    </Link>
  );
};

export default Logo;
