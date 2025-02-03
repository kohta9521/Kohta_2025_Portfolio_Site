import React from "react";

// spline
// import Spline from "@splinetool/react-spline/next";

const Hero = () => {
  return (
    <div className="relative w-screen h-screen  flex items-center justify-center">
      {/* Spline Wrapper */}
      {/* <div className="w-full h-full flex justify-center items-center overflow-hidden">
        <Spline
          className="w-auto h-full max-h-screen object-contain"
          scene="https://prod.spline.design/NhFAEoemg3q4zeRY/scene.splinecode"
        />
      </div> */}

      {/* テキスト */}
      <div className="absolute bottom-24 left-3 sm:bottom-32 sm:left-14 text-white">
        <p className="text-xl mb-0 text-red-600 font-semibold sm:text-3xl sm:leading-10">
          Kohta Kochi
        </p>
        <h1 className="text-3xl font-semibold sm:text-6xl sm:leading-tight">
          SCALABLE IT SOLUTIONS,
          <br />
          DESIGNED FOR PERFORMANCE & USER EXPERIENCE
        </h1>
      </div>
    </div>
  );
};

export default Hero;
