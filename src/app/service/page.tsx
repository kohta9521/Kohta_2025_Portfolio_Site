import React from "react";

// next
import Image from "next/image";

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
      <p className="subpage-main-text">
        こちらのページでは私、kohtaの提供しているサービスをご覧いただくことが可能です。
        <br />
        私はWebサイトの制作から動画の制作、イベントなどの企画など多岐にわたるお仕事を請け負ってきました。
        様々なお仕事を単体で捉えるだけでなく、それぞれから学んだ知見や経験を全て糧にして次のクリエイティブに繋げていきます。
      </p>
      <SubPageTitle id="service-title-2" title="Web制作" />
      <Image
        src="/images/freers.png"
        width={1280}
        height={720}
        alt="service-page-web-image"
        className="subpage-main-image"
      />
      <p className="subpage-main-text">
        私がいただいているお仕事の大半がこちらのWebサイト制作です。
        <br />
        Webサイトと言っても種類は様々ですが主に企業様の公式ホームページ・イベント用LP・通販サイトの構築が挙げられます。
        <br />
      </p>
      <SubPageTitle id="service-title-3" title="モバイルアプリ開発" />
      <SubPageTitle id="service-title-4" title="写真撮影・動画編集" />
      <SubPageTitle id="service-title-5" title="イベント企画" />
    </BasicTemp>
  );
};

export default Service;
