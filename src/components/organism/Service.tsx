"use client";
import React from "react";

// hooks
import useAOS from "@/hooks/useAOS";

// components
import ServiceCard from "../molecules/ServiceCard";
import ViewMoreButton from "../atoms/ViewMoreButton";

const Service = () => {
  useAOS();
  return (
    <div className="w-screen h-auto pt-20 pb-16 bg-white rounded-t-3xl">
      <div className="w-10/12 max-w-11/12 mx-auto sm:w-9/12">
        <p
          className="text-xs mb-2 font-bold text-red-600 sm:text-xl"
          data-aos="fade-up"
        >
          提供サービス一覧
        </p>
        <h2
          className="text-5xl font-semibold text-black sm:text-7xl"
          data-aos="fade-up"
        >
          SERVICE
        </h2>
        <div className="w-full h-auto py-20">
          <ServiceCard
            id="service-card-1"
            title="Webサイトの構築"
            image="/images/service-card-1.png"
            tag="Web・LP・Shop"
            subTitle="お客様の要望に合わせたWebサイトを制作いたします。"
            desc="ヒアリング・デザイン・コーディング・公開まで一貫して対応いたします。また、SEO対策やアクセス解析なども行います。Webサイトを構築したいけどドメインってどうやって取得するの？といった疑問もお気軽にご相談ください。ドメインの購入からサーバーの設定まで全て対応いたします。また、一般的なWebサイト制作の他にも、ランディングページやECサイトの制作も行っております。お値段のプランなども複数個ご用意ございますのでお気軽にお問い合わせください。"
            subDesc="使用技術 : React / Next.js / AWS / SEO"
          />
          <ServiceCard
            id="service-card-2"
            title="モバイルアプリ開発"
            image="/images/service-card-2.png"
            tag="iOS・Android"
            subTitle="お客様の要望に合わせたモバイルアプリを開発いたします。"
            desc="こちらもwebサイト制作と同様に、ヒアリング・デザイン・コーディング・公開まで一貫して対応いたします。また、SEO対策やアクセス解析なども行います。また、Apple Store・Google PlayStoreへの申請も代行いたします。アプリの開発に関してもお値段のプランなども複数個ご用意ございますのでお気軽にお問い合わせください。"
            subDesc="使用技術 : React Native / Expo / AWS Amplify"
          />
          <ServiceCard
            id="service-card-3"
            title="写真撮影・動画編集"
            image="/images/service-card-3.png"
            tag="Photo・Movie"
            subTitle="サイト用の写真撮影・イベントなどの動画の撮影・編集を行います。"
            desc="お客様の要望に合わせた写真撮影・動画編集を行います。また、イベントの撮影も行っております。SONYやEPSONのコンテストで複数回受賞経験があるカメラマンが撮影いたします。また、動画編集も行っており、YouTubeやTikTokなどの動画編集も行っております。縦型・横型・比率指定なども承っています。レタッチも含め可能です。"
            subDesc="使用機材・ソフト : α7III / α7RV / DaVinci Resolve / Adobe Photo shop"
          />
          <ServiceCard
            id="service-card-4"
            title="DJ活動・イベント企画"
            image="/images/service-card-4.png"
            tag="DJ・Event"
            subTitle="DJ活動・イベント企画を行います。"
            desc="DJ活動も趣味で行っています。主に都内のクラブやイベントスペースでEDM/Houseを中心にプレイしています。また、イベントの企画なども行っており、過去には大学生を1000人規模で集めたイベントも企画しました。企業とのタイアップや協賛なども大歓迎です。お気軽にご連絡ください。"
          />
          <ViewMoreButton
            id="service-view-more"
            link="/service"
            position="center"
          />
        </div>
      </div>
    </div>
  );
};

export default Service;
