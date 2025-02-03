"use client";
import React from "react";

// next
import Link from "next/link";
import Image from "next/image";

// hooks
import useAOS from "@/hooks/useAOS";

// clsx
// import clsx from "clsx";

// props
export type CaseCardProps = {
  id: string;
  link: string;
  image: string;
  category: string;
  title: string;
  tag: string;
};

const CaseCard = ({ id, link, image, tag, title, category }: CaseCardProps) => {
  useAOS();
  return (
    <Link
      key={id}
      href={link}
      className="w-full sm:w-1/2 lg:w-full  group block overflow-hidden rounded-lg transition-all duration-500  hover:border-red-600 hover:shadow-2xl"
      data-aos="fade-up"
    >
      {/* 🖼️ 画像 */}
      <div className="relative w-full h-auto overflow-hidden rounded-lg mb-4">
        <Image
          className="w-full h-auto transition-all duration-500 ease-in-out transform group-hover:scale-110 group-hover:brightness-75"
          src={image}
          width={500}
          height={300}
          quality={100}
          alt={`${title}-image`}
        />
      </div>

      {/* 📌 カテゴリーラベル */}
      <p className="block w-28 mb-3 px-2 py-1 text-xs text-center font-semibold leading-full text-white bg-red-600 rounded-md">
        {category}
      </p>

      {/* 📰 タイトル */}
      <h3 className="w-full mb-2 text-2xl text-white font-semibold truncate">
        {title}
      </h3>

      {/* 🏷️ タグ */}
      <p className="text-gray-300 text-xs"># {tag}</p>
    </Link>
  );
};

export default CaseCard;
