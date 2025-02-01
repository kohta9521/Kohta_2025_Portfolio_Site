"use client";
import React from "react";

// next
import Link from "next/link";

// clsx
import clsx from "clsx";

// hooks
import useAOS from "@/hooks/useAOS";

// icons
import { IoArrowForwardCircleSharp } from "react-icons/io5";

// props
export type ViewMoreButtonProps = {
  id: string;
  link: string;
  position?: "left" | "center" | "right";
};

const ViewMoreButton = ({ id, link, position }: ViewMoreButtonProps) => {
  useAOS();
  return (
    <div
      className={clsx("w-full", {
        "text-left": position === "left",
        "text-center": position === "center",
        "text-right": position === "right",
      })}
      data-aos="fade-up"
    >
      <Link
        key={id}
        href={link}
        className="inline-flex items-center justify-center w-56 h-12 border border-red-600 rounded-full text-red-600 font-medium text-lg transition-all duration-300 hover:bg-red-600 hover:text-white group"
      >
        <span className="mr-3 transition-transform duration-300 group-hover:translate-x-1">
          View More
        </span>
        <IoArrowForwardCircleSharp
          size={24}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </Link>
    </div>
  );
};

export default ViewMoreButton;
