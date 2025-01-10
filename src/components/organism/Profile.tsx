"use client";
import React from "react";

// next
import Image from "next/image";

// hooks
import useAOS from "@/hooks/useAOS";

// scss
import styles from "./styles/Profile.module.scss";

// data
// import { Backend, frontend, Others } from "@/data/langs";

// components
import SecTitle from "../atoms/SecTitle";
// import SkillCard from "../molecules/SkillCard";

const Profile = () => {
  useAOS();
  return (
    <div className={styles.profile}>
      <div className={styles.container}>
        <SecTitle
          id="profile-title"
          jaTitleSize="default"
          jaTitle="kohtaとは"
          enTitle="who is kohta"
        />
        <div className={styles.top} data-aos="fade-up">
          <div className={styles.left}>
            <Image
              className={styles.image}
              src="/images/home/profile.jpg"
              width={450}
              height={550}
              alt="profile-image"
            />
          </div>
          <div className={styles.right}>
            <p className={styles.enName}>kochi kohta</p>
            <h2 className={styles.name}>河内 光太</h2>
            <ul>
              <li>学習院大学法学部法学科学部3年生 (21)</li>
              <li>株式会社Enter CEO</li>
              <li>株式会社AMIJAM CTO</li>
              <li>株式会社メディアエイド 新規事業PT本部</li>
              <li>株式会社MugendAI フロントエンドエンジニア</li>
            </ul>
            <p className={styles.desc}>
              大学1年生でプログラミングと出会い没頭、勉強を始めてから数年間ほぼ毎日コーディングをしている。
              主にフロントエンドを中心にWeb開発を行っており、Reactを使った開発が得意。最近はバックエンドも勉強中。
              <br />
              <br />
              現在は会社にエンジニアとして所属しながら、フリーランス、業務委託という形で開発を行っている。
              <br />
              その他にも、イベント運営・イベントのDX化などを自身で行っておりコーディングだけではないクライアントとのやり取りも得意。
              <br />
              <br />
              大学学内で友人と共同開発でサービスをリリースしたり、学内でエンジニアになりたい学生の支援なども行っている。
              音楽が好きということもあり趣味でDJなども行っている。
            </p>
          </div>
        </div>
        {/* <div className={styles.bottom} data-aos="fade-up">
          <div className={styles.left}>
            <p className={styles.title}>Frontend</p>
            <div className={styles.contents}>
              {frontend.map((skill) => (
                <SkillCard
                  id={skill.id}
                  name={skill.name}
                  version={skill.version}
                  reactIcon={skill.reactIcon}
                  years={skill.years}
                  skill={skill.skill}
                  desc={skill.desc}
                />
              ))}
            </div>
          </div>
          <div className={styles.center}>
            <p className={styles.title}>Backend</p>
            <div className={styles.contents}>
              {Backend.map((skill) => (
                <SkillCard
                  id={skill.id}
                  name={skill.name}
                  version={skill.version}
                  reactIcon={skill.reactIcon}
                  years={skill.years}
                  skill={skill.skill}
                  desc={skill.desc}
                />
              ))}
            </div>
          </div>
          <div className={styles.right}>
            <p className={styles.title}>Others</p>
            <div className={styles.contents}>
              {Others.map((skill) => (
                <SkillCard
                  id={skill.id}
                  name={skill.name}
                  version={skill.version}
                  reactIcon={skill.reactIcon}
                  years={skill.years}
                  skill={skill.skill}
                  desc={skill.desc}
                />
              ))}
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Profile;
