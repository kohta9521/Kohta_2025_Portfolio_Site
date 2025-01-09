import React from "react";

// scss
// import styles from "./Profile.module.scss";

// components
import SubPageTemp from "@/components/template/SubPageTemp";
import SubTitle from "@/components/atoms/SubTitle";
import SubText from "@/components/atoms/SubText";

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
      <SubTitle id="#profile" size="h1" text="Profile" />
      <SubTitle id="#career" size="h1" text="Career" />
      <SubTitle id="#skills" size="h1" text="Skills" />
      <SubTitle id="#future" size="h1" text="Future" />
      <SubTitle id="#hobby" size="h1" text="Hobby" />
    </SubPageTemp>
  );
};

export default Profile;
