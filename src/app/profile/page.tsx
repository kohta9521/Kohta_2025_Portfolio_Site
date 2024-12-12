import React from "react";

// scss
import styles from "./Profile.module.scss";

// components
import SubPageTemp from "@/components/template/SubPageTemp";
import SubTitle from "@/components/atoms/SubTitle";

const Profile = () => {
  return (
    <SubPageTemp
      id="profile"
      enTitle="PROFILE"
      jaTitle="プロフィール"
      desc="私に関する情報をご紹介します。"
      sectionArray={[
        { id: "profile", title: "Profile", link: "/" },
        { id: "career", title: "Career", link: "/profile/#career" },
        { id: "skills", title: "Skills", link: "/profile/#skills" },
        { id: "future", title: "Future Career", link: "/profile/#future" },
        { id: "hobby", title: "Hobby", link: "/profile/#hobby" },
      ]}
    >
      <SubTitle id="profile" size="h1" text="Profile" />
      <SubTitle id="profile" size="h2" text="Profile" />
      <SubTitle id="profile" size="h3" text="Profile" />
      <SubTitle id="profile" size="h4" text="Profile" />
    </SubPageTemp>
  );
};

export default Profile;
