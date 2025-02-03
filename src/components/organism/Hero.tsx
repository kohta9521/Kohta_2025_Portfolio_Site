import Image from "next/image";
import React from "react";

// spline
// import Spline from "@splinetool/react-spline/next";

const Hero = () => {
  return (
    <div className="relative w-screen h-screen flex items-center justify-center overflow-hidden">
      {/* 📌 Hero 背景画像（中央配置 & フルサイズ） */}
      <Image
        className="absolute w-11/12 h-full mb-20 object-contain sm:w-1/3 sm:h-auto -z-10"
        src="/images/phone-2.png"
        width={1513}
        height={2704}
        alt="phone"
        priority
      />

      {/* 📝 テキスト */}
      <div className="absolute bottom-24 left-3 sm:bottom-32 sm:left-14 text-white z-10">
        <p className="text-xl mb-0 text-red-600 font-semibold sm:text-3xl sm:leading-10 hero-text">
          Kohta Kochi
        </p>
        <h1 className="text-3xl font-semibold sm:text-6xl sm:leading-tight hero-text">
          SCALABLE IT SOLUTIONS,
          <br />
          DESIGNED FOR PERFORMANCE & USER EXPERIENCE
        </h1>
      </div>
    </div>
  );
};

export default Hero;
