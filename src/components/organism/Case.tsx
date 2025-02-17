"use client";
import React from "react";

// hooks
import { useGetWorkById } from "@/hooks/useGetWorkById";

// components
import SecTitle from "../atoms/SecTitle";
import CaseCard from "../molecules/CaseCard";
import ViewMoreButton from "../atoms/ViewMoreButton";

const Case = () => {
  // 記事データの取得
  const { work: work1, error: error1 } = useGetWorkById("ndesp1wspvhc");
  const { work: work2, error: error2 } = useGetWorkById("24yie7mxl");
  const { work: work3, error: error3 } = useGetWorkById("3-a1oe5z917s");

  // データ取得中またはエラー時の処理
  if (error1 || error2 || error3) {
    return <p className="text-red-500">データの取得に失敗しました</p>;
  }

  if (!work1 || !work2 || !work3) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  return (
    <div className="w-screen h-auto py-20">
      <div className="w-9/12 max-w-10/12 mx-auto">
        <SecTitle id="home-case" jaText="過去の実績" enText="CASE" />
        <p className="w-full text-sm text-red-600 font-semibold my-4">
          こちらでは私のこれまでに製作した数々のお仕事をご覧いただくことができます。
        </p>
        {/* Card MicroCMS */}
        {/* gapを使用してPCで横に3個、mobileで縦並びで表示 */}
        <div className="w-full h-auto pt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <CaseCard
            id={work1.id}
            link={`/works/${work1.id}`}
            image={work1.top_image.url}
            tag="Web制作"
            category={work1.category.name}
            title={work1.title}
          />
          <CaseCard
            id={work2.id}
            link={`/works/${work2.id}`}
            image={work2.top_image.url}
            tag="Web制作"
            category={work2.category.name}
            title={work2.title}
          />
          <CaseCard
            id={work3.id}
            link={`/works/${work3.id}`}
            image={work3.top_image.url}
            tag="Web制作"
            category={work3.category.name}
            title={work3.title}
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
