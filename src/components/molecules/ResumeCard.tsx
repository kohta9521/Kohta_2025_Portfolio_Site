import React from "react";

// types
export type Projects = {
  id: string;
  title: string;
  startDate: string;
  endDate: string;
  projectAbout: string;
  responsiblePhase: string[];
  langAndTools: string[];
};

// props
export type ResumeCardProps = {
  id: string;
  companyName: string;
  startDate: string;
  endDate: string;
  businessAbout: string;
  project: Projects[];
};

const ResumeCard = ({
  id,
  companyName,
  startDate,
  endDate,
  businessAbout,
  project,
}: ResumeCardProps) => {
  return (
    <div key={id} className="w-full">
      {/* title */}
      <div className="w-full">
        <h1 className="block mb-2 p-2 text-2xl text-white leading-none  font-semibold bg-red-500 rounded-sm">
          {companyName}
        </h1>
        {/* start and end date */}
        <div className="w-full mb-4 flex items-center justify-end">
          <p className="text-base mr-2 text-red-500">{startDate}</p>
          <p className="text-base mr-2 text-red-500">~</p>
          <p className="text-base mr-2 text-red-500">{endDate}</p>
        </div>
        {/* 事業内容 */}
        <p className="text-lg font-semibold mb-1">[ 事業概要 ]</p>
        <p className="subpage-main-text">{businessAbout}</p>
        {/* projectの繰り返し処理 */}
        <div className="w-full">
          {project.map((item) => {
            return (
              <div key={item.id} className="w-full">
                <p className="text-xl font-semibold  mb-2">
                  ◽️ プロジェクト概要
                  <span className="block mt-2 w-full h-[2px] bg-red-500"></span>
                </p>
                <p className="subpage-main-text">{item.title}</p>
                <p className="text-lg font-semibold  mb-1">
                  [ プロジェクト概要 ]
                </p>
                <p className="subpage-main-text">{item.projectAbout}</p>
                <p className="text-lg font-semibold  mb-1">[ 担当フェーズ ]</p>
                <ul className="mb-10">
                  {item.responsiblePhase.map((responsiblePhaseItem, index) => (
                    <li key={index} className="text-base leading-loose">
                      ・ {responsiblePhaseItem}
                    </li>
                  ))}
                </ul>
                <p className="text-lg font-semibold  mb-1">[ 言語やツール ]</p>
                <ul>
                  <ul className="mb-10">
                    {item.langAndTools.map((langItem, index) => (
                      <li key={index} className="text-base leading-loose">
                        ・ {langItem}
                      </li>
                    ))}
                  </ul>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ResumeCard;
