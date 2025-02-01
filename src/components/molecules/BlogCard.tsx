"use client";
import React from "react";

// next
import Link from "next/link";
import Image from "next/image";

// hooks
import useAOS from "@/hooks/useAOS";

// clsx
import clsx from "clsx";

// props
export type BlogCardProps = {
  id: string;
  link: string;
  type: "Card" | "List";
  image: string;
  date: string;
  title: string;
};

const BlogCard = ({ id, link, type, image, date, title }: BlogCardProps) => {
  useAOS();
  return (
    <Link
      key={id}
      href={link}
      data-aos="fade-up"
      className={clsx(
        "block w-full transition-all duration-300 mb-2",
        type === "Card"
          ? "rounded-xl overflow-hidden  hover:shadow-2xl hover:scale-[1.02]"
          : "border-b border-gray-700 py-4 px-2 duration-700 transition-all hover:border-b-red-800 hover:pl-4 hover:pr-2"
      )}
    >
      {type === "Card" && (
        <div>
          {/* 🖼️ 画像 */}
          <Image
            src={image}
            alt={title}
            width={550}
            height={400}
            className="w-11/12 mx-auto object-cover"
          />
          {/* 📝 テキスト */}
          <div className="p-5">
            <p className="text-sm text-gray-400">{date}</p>
            <h3 className="mt-1 text-xl font-bold text-white">{title}</h3>
          </div>
        </div>
      )}

      {type === "List" && (
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-400">{date}</p>
            <h3 className="text-lg font-semibold text-white">{title}</h3>
          </div>
          <span className="text-red-500 text-2xl font-bold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            →
          </span>
        </div>
      )}
    </Link>
  );
};

export default BlogCard;
