import React from "react";

// components
import BasicTemp from "@/components/template/BasicTemp";
import SubPageTitle from "@/components/atoms/SubPageTitle";

const Works = () => {
  return (
    <BasicTemp
      id="works"
      linkArr={[{ link: "/works", text: "仕事" }]}
      title="kohtaの仕事について"
      desc="私、kohtaの普段行っているお仕事、そしてこれまでのプロジェクトなどをご覧いただけます。"
    >
      <SubPageTitle id="profile-title-1" title="過去の仕事概要" />
    </BasicTemp>
  );
};

export default Works;
