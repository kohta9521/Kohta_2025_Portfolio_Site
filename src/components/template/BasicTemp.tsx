import React from "react";

// next
import Link from "next/link";

// icons
import { IoIosArrowForward } from "react-icons/io";

// components
import Header from "../organism/Header";
import MobileHeader from "../organism/MobileHeader";
import Footer from "../organism/Footer";

// props
export type BasicPageProps = {
  id: string;
  linkArr: { link: string; text: string }[];
  title: string;
  desc?: string;
  children: React.ReactNode;
};

const BasicTemp = ({ id, linkArr, title, desc, children }: BasicPageProps) => {
  return (
    <div key={id} className="w-full h-auto">
      <Header />
      <MobileHeader />
      {/* Hero */}
      <div className="w-10/12 mx-auto mt-20  mb-12 sm:mt-5  sm:max-w-screen-xl sm:mx-auto">
        {/* Link Array */}
        <div className="hidden sm:flex sm:items-center sm:gap-3 sm:mb-20">
          <Link href="/" className="group">
            <p className="text-red-500 duration-500 transition-all group-[hover]:text-red-600">
              2025 Engineer Portfolio Site トップ
            </p>
          </Link>
          {/* icon */}
          <IoIosArrowForward className="hidden sm:block sm:text-gray-400" />
          {linkArr.map((link) => (
            <Link key={link.link} href={link.link}>
              <p>{link.text}</p>
            </Link>
          ))}
        </div>
        <h1 className="text-center text-xl text-red-600 font-semibold mb-5 sm:text-left sm:text-3xl sm:mb-10">
          {title}
        </h1>
        <span className="block w-9 h-1 bg-red-600 mx-auto mb-7 sm:ml-0"></span>
        <p className="font-medium text-medium text-left sm:text-left">{desc}</p>
      </div>
      {/* Main (children) */}
      <div className="w-11/12 mx-auto pb-20 sm:max-w-screen-xl">{children}</div>
      <Footer />
    </div>
  );
};

export default BasicTemp;
