import React from "react";

// next
import Image from "next/image";

// data
import { regalcore, simple } from "@/data/resume";

// components
import BasicTemp from "@/components/template/BasicTemp";
import SubPageTitle from "@/components/atoms/SubPageTitle";
import ResumeBox from "@/components/subpage/ResumeBox";
import ResumeCard from "@/components/molecules/ResumeCard";

const Profile = () => {
  return (
    <BasicTemp
      id="profile"
      linkArr={[{ link: "/profile", text: "kohtaのプロフィール" }]}
      title="kohtaのプロフィール"
      desc="私、kohtaのこれまでの経歴や普段使用しているプログラミング言語・ツールなどを習熟度などと共に紹介しています。"
    >
      <SubPageTitle id="profile-title-1" title="基本情報" />
      <p className="subpage-main-text">私、kohtaの経歴をご覧いただけます。</p>
      {/* 画像 */}
      <Image
        className="mb-20"
        src="/images/profile.jpg"
        width={500}
        height={400}
        alt="プロフィール画像"
      />
      <ul className="my-20">
        <li className="">2003年生まれ・東京都出身</li>
        <li className="">学習院高等科卒業</li>
        <li className="">学習院大学法学部法学科在籍</li>
        <li className="">プログラミングの学習を始める</li>
      </ul>
      <p className="subpage-main-text">
        大学1年生でプログラミングと出会い没頭、勉強を始めてから数年間ほぼ毎日コーディングをしている。
        <br />
        主にフロントエンドを中心にWeb開発を行っており、React/Next.jsを使った開発が得意。最近はバックエンドも勉強中。
        <br />
        現在は会社にエンジニアとして所属しながら、フリーランス、業務委託という形で開発を行っている。
        <br />
        その他にも、イベント運営・イベントのDX化などを自身で行っておりコーディングだけではないクライアントとのやり取りも得意。
        <br />
        大学学内で友人と共同開発でサービスをリリースしたり、学内でエンジニアになりたい学生の支援なども行っている。
        <br />
        音楽が好きということもあり趣味でDJなども行っている。
      </p>
      <SubPageTitle id="profile-title-2" title="職務経歴" />
      <p className="subpage-main-text">
        こちらではkohtaのこれまでの経歴の詳細をご覧いただくことが可能です。
      </p>
      {/* 独自デザイン */}
      <ResumeBox id="profile">
        <ResumeCard {...regalcore} />
        <ResumeCard {...simple} />
      </ResumeBox>
    </BasicTemp>
  );
};

export default Profile;
