import React from "react";

// components
import SecTitle from "../atoms/SecTitle";
import CaseCard from "../molecules/CaseCard";
import ViewMoreButton from "../atoms/ViewMoreButton";

const Case = () => {
  return (
    <div className="w-screen h-auto py-20">
      <div className="w-10/12 max-w-11/12 mx-auto">
        <SecTitle id="home-case" jaText="過去の実績" enText="CASE" />
        <p className="w-full text-sm text-red-600 font-semibold my-4">
          こちらでは私のこれまでに製作した数々のお仕事をご覧いただくことができます。
        </p>
        {/* Card MicroCMS */}
        {/* gapを使用してPCで横に3個、mobileで縦並びで表示 */}
        <div className="w-full h-auto pt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <CaseCard
            id="case-card-1"
            link="/"
            image="/images/ufes.png"
            tag="イベントLP"
            category="Webサイト制作"
            title="UFES2024のイベントLPを制作しました"
          />
          <CaseCard
            id="case-card-1"
            link="/"
            image="/images/hokulea.png"
            tag="シンプル"
            category="Webサイト製作"
            title="MicroCMSで簡単なブログをNext.js + TailwindCSSで作成"
          />
          <CaseCard
            id="case-card-1"
            link="/"
            image="/images/freers.png"
            tag="シンプル"
            category="Webサイト製作"
            title="MicroCMSで簡単なブログをNext.js + TailwindCSSで作成"
          />
        </div>
        <div className="w-full h-auto pt-20">
          <ViewMoreButton id="case-view-more" link="/case" position="center" />
        </div>
      </div>
    </div>
  );
};

export default Case;
