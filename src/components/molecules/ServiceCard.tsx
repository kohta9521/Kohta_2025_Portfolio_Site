"use client";
import React from "react";

// next
import Image from "next/image";
// import Link from "next/link";

// hooks
import useAOS from "@/hooks/useAOS";

// props
export type ServiceCardProps = {
  id: string;
  title: string;
  image: string;
  tag: string;
  subTitle: string;
  desc: string;
  subDesc?: string;
  //   moreLink: string;
};

const ServiceCard = ({
  id,
  title,
  image,
  tag,
  subTitle,
  desc,
  subDesc,
}: //   moreLink,
ServiceCardProps) => {
  useAOS();
  return (
    <div
      key={id}
      className="w-full h-auto mb-10 sm:w-10/12 sm:mb-20 sm:mx-auto sm:flex sm:items-center sm:justify-between"
      data-aos="fade-up"
    >
      <div className="sm:w-1/2 text-left">
        <h1 className="mb-6 text-red-600 text-3xl font-semibold leading-relaxed sm:text-4xl sm:mb-10">
          {title}
        </h1>
        <Image
          className="mx-auto max-w-11/12 h-auto mb-5 sm:mx-0"
          src={image}
          width={300}
          height={150}
          alt={`${title}-image`}
        />
      </div>
      <div className="sm:w-1/2 text-left">
        <p className="w-28 h-6 mb-5 py-1 px-2 rounded-full text-xs text-center font-semibold bg-red-600">
          {tag}
        </p>
        <h3 className="mb-4 text-red-600 text-xl font-bold leading-7 sm:text-3xl">
          {subTitle}
        </h3>
        <p className="text-sm font-semibold text-black leading-6 sm:text-base">
          {desc}
          <span className="block mt-4 text-xs text-gray-600 sm:text-sm">
            {subDesc}
          </span>
        </p>
      </div>

      {/* <Link className="" href={moreLink}>
        <p className="">Vire More</p>
      </Link> */}
    </div>
  );
};

export default ServiceCard;
