import React from "react";

// components
import BasicTemp from "@/components/template/BasicTemp";
import SubPageTitle from "@/components/atoms/SubPageTitle";

const Sitemap = () => {
  return (
    <BasicTemp
      id="sitemap"
      linkArr={[{ link: "/sitemap", text: "サイトマップ" }]}
      title="サイトマップ"
      desc="サイトマップです。"
    >
      <SubPageTitle id="sitemap-title-1" title="サイトマップ" />
      <p className="subpage-main-text">
        トップページ
        <br />
        お問い合わせ
        <br />
        個人情報の取り扱いについて
        <br />
        サイトマップ
      </p>
    </BasicTemp>
  );
};

export default Sitemap;
