"use client";
import React from "react";

// hooks
import useAOS from "@/hooks/useAOS";

// components
import SecTitle from "../atoms/SecTitle";
import ViewMoreButton from "../atoms/ViewMoreButton";

const About = () => {
  useAOS();
  return (
    <div className="w-screen h-auto pt-52 mb-28 sm:mb-40">
      <div className="w-10/12 mx-auto sm:w-9/12">
        <SecTitle id="home-about" jaText="このサイトについて" enText="ABOUT" />
        <div className="pt-14">
          <h3
            className="block text-base font-semibold leading-9 mb-10 sm:text-3xl sm:leading-10 sm:mb-12"
            data-aos="fade-up"
          >
            全ての人にITで期待を超える価値を提供する
            <br />
            クリエイターとしてのプライドをかけて
          </h3>
          <p
            className="block mb-20 text-sm font-semibold leading-7 sm:text-lg sm:leading-relaxed"
            data-aos="fade-up"
          >
            初めまして、kohta kochiと申します!
            <br />
            <br />
            都内の大学の法学部法学科に在学中の学部3年生です。
            大学生をしながら、Web制作やソフトウェア開発、デザイン制作などの活動を行っています。
            <br />
            <br />
            <span className="text-red-500">
              ITで人の役に立つのに年齢制限はない
            </span>
            <br />
            <br />
            大学生という時間と場所に縛られない自由さを活かし、
            テクノロジーとプロの知見でその壁を共に越えたいと考えています。
            <br />
            <br />
            わたしは丁寧かつ真摯にクリエイティブに取り組み、
            お客さまと共に輝き溢れる未来を共創します。
          </p>
          <ViewMoreButton id="about-view-more" link="/about" position="left" />
        </div>
      </div>
    </div>
  );
};

export default About;
