import React from "react";

// components
import BasicTemp from "@/components/template/BasicTemp";
import SubPageTitle from "@/components/atoms/SubPageTitle";

const Service = () => {
  return (
    <BasicTemp
      id="service"
      linkArr={[{ link: "/service", text: "kohtaの提供しているサービス一覧" }]}
      title="提供しているサービス一覧"
      desc="kohtaの提供しているサービス一覧です。ご覧ください。"
    >
      <SubPageTitle id="service-title-1" title="はじめに" />
    </BasicTemp>
  );
};

export default Service;
