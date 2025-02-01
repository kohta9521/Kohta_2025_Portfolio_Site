"use client";
import React from "react";

// hooks
import useAOS from "@/hooks/useAOS";

// props
export type SecTitleProps = {
  id: string;
  jaText: string;
  enText: string;
};

const SecTitle = ({ id, jaText, enText }: SecTitleProps) => {
  useAOS();
  return (
    <div key={id} className="h-auto" data-aos="fade-up">
      <p className="text-xs mb-2 font-semibold text-red-600 sm:text-xl">
        {jaText}
      </p>
      <h2 className="text-5xl font-semibold sm:text-7xl">{enText}</h2>
    </div>
  );
};

export default SecTitle;
