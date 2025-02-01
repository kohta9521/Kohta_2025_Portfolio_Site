"use client";
import React from "react";

// next
import Link from "next/link";

// hooks
import useAOS from "@/hooks/useAOS";

// clsx
import clsx from "clsx";

// props
export type NewsCardProps = {
  id: string;
  link: string;
  date: string;
  title: string;
};

const NewsCard = ({ id, link, date, title }: NewsCardProps) => {
  useAOS();
  return (
    <Link
      key={id}
      href={link}
      className={clsx(
        "relative group block w-full mb-3  mx-auto overflow-hidden rounded-xl p-6 border border-red-600 shadow-md transition-all duration-500",
        "hover:scale-[1.02] hover:shadow-xl hover:border-red-500",
        "sm:p-8"
      )}
      data-aos="fade-up"
    >
      {/* 🔥 背景エフェクト（ホバー時に広がる） */}
      <div className="absolute inset-0 bg-red-600 opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>

      {/* 🔥 ボーダーアニメーション */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-500 transition-all duration-500"></div>

      {/* 📆 日付 */}
      <p className="text-sm text-red-400 group-hover:text-white transition-colors duration-300">
        {date}
      </p>

      {/* 📰 タイトル */}
      <h3 className="mt-2 text-xl font-bold text-white group-hover:text-red-500 transition-colors duration-300">
        {title}
      </h3>

      {/* ➡️ ホバー時のアイコン */}
      <div className="absolute right-5 bottom-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <span className="text-red-500 text-2xl font-bold">→</span>
      </div>
    </Link>
  );
};

export default NewsCard;
