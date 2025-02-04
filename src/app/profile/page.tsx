import React from "react";

// components
import BasicTemp from "@/components/template/BasicTemp";
import SubPageTitle from "@/components/atoms/SubPageTitle";

const Profile = () => {
  return (
    <BasicTemp
      id="profile"
      linkArr={[{ link: "/profile", text: "kohtaのプロフィール" }]}
      title="kohtaのプロフィール"
      desc="私、kohtaのこれまでの経歴や普段使用しているプログラミング言語・ツールなどを習熟度などと共に紹介しています。"
    >
      <SubPageTitle id="profile-title-1" title="基本情報" />
    </BasicTemp>
  );
};

export default Profile;
