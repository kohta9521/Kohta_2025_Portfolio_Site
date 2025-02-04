import React from "react";

// next
import Image from "next/image";

// components
import SecTitle from "../atoms/SecTitle";
import ViewMoreButton from "../atoms/ViewMoreButton";

const Profile = () => {
  return (
    <div className="w-screen h-auto py-20 sm:py-28">
      <div className="w-10/12 max-w-10/12 mx-auto sm:w-9/12">
        <SecTitle id="home-profile" jaText="kohtaについて" enText="PROFILE" />
        <div className="w-full h-auto pt-16 sm:flex sm:justify-between sm:items-center">
          <div className="sm:w-2/5">
            <Image
              className="w-full h-auto mx-auto mb-6"
              src="/images/profile.jpg"
              width={300}
              height={300}
              alt="profile-image"
            />
          </div>

          <div className="sm:w-1/2">
            <p className="mb-1 text-red-600 sm:text-xl">Kochi Kohta</p>
            <h1 className="mb-7 text-3xl font-semibold sm:text-5xl sm:mb-10">
              河内 光太
            </h1>
            <ul className="mb-7 text-sm font-medium leading-6 sm:leading-7 sm:text-base">
              <li>・学習院大学法学部法学科学部3年生(21)</li>
              <li>・株式会社Enter CEO</li>
              <li>・株式会社AMIJAM CTO</li>
              <li>・株式会社メディアエイド 新規事業PT本部 PDM</li>
              <li>・株式会社MugendAI フロントエンドエンジニア</li>
            </ul>
            <p className="mb-20 text-sm font-medium text-white leading-6 sm:text-base sm:leading-loose">
              大学1年生でプログラミングと出会い没頭、勉強を始めてから数年間ほぼ毎日コーディングをしている。
              主にフロントエンドを中心にWeb開発を行っており、React/Next.jsを使った開発が得意。最近はバックエンドも勉強中。
              <br />
              現在は会社にエンジニアとして所属しながら、フリーランス、業務委託という形で開発を行っている。
              その他にも、イベント運営・イベントのDX化などを自身で行っておりコーディングだけではないクライアントとのやり取りも得意。
              <br />
              大学学内で友人と共同開発でサービスをリリースしたり、学内でエンジニアになりたい学生の支援なども行っている。
              音楽が好きということもあり趣味でDJなども行っている。
            </p>
            <ViewMoreButton
              id="profile-view-more"
              link="/profile"
              position="center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
