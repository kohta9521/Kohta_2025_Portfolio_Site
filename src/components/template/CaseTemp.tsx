import React from "react";

// next
import Link from "next/link";
import Image from "next/image";

// utils
import { formatDate } from "@/utils/formatDate";

// icons
import { IoIosArrowForward } from "react-icons/io";

// components
import Header from "../organism/Header";
import Footer from "../organism/Footer";
import MobileHeader from "../organism/MobileHeader";

// props
export type CaseTempProps = {
  id: string;
  link: string;
  image: string;
  category: string;
  date: string;
  title: string;
  children: React.ReactNode;
};

const CaseTemp = ({
  id,
  link,
  image,
  category,
  date,
  title,
  children,
}: CaseTempProps) => {
  return (
    <div key={id} className="w-screen h-auto">
      <Header />
      <MobileHeader />
      <div className="w-full h-auto">
        {/* Link Area */}
        <div className="w-11/12 h-auto mx-auto py-6 overflow-x-auto whitespace-nowrap flex items-center gap-3 sm:mb-1 sm:max-w-screen-xl">
          <Link href="/" className="block">
            <p className="text-red-500 text-xs font-semibold sm:text-sm">
              2025 Kohta Engineer Portfolio トップ
            </p>
          </Link>
          <IoIosArrowForward className=" text-red-400" />
          <Link href="/works">
            <p className="text-gray-500 text-xs sm:text-sm">制作実績トップ</p>
          </Link>
          <IoIosArrowForward className="text-red-400" />
          <Link href={link}>
            <p className="text-gray-500 text-xs sm:text-sm">{title}</p>
          </Link>
        </div>
        {/* main */}
        <div className="w-11/12 mx-auto sm:max-w-screen-xl sm:block">
          {/* Article */}
          <div>
            <div className="w-full">
              <Image
                className="w-full h-auto"
                src={image}
                width={500}
                height={300}
                alt="articleImage"
              />
              <div className="flex justify-between py-8 sm:mb-6">
                <p className="bg-red-600 text-white px-2 py-1.5 rounded-xl text-xs font-semibold">
                  {category}
                </p>
                <p className="">{formatDate(date)}</p>
              </div>
            </div>
            <h1 className="mb-20 text-xl font-semibold sm:text-4xl">{title}</h1>
            <div className="w-full">{children}</div>
          </div>
          {/* sidebar */}
          <div></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CaseTemp;
