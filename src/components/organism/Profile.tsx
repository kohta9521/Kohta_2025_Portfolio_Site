import React from "react";

// next
import Image from "next/image";

// scss
import styles from "./styles/Profile.module.scss";

// components
import SecTitle from "../atoms/SecTitle";

const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.container}>
        <SecTitle
          id="profile-title"
          jaTitleSize="default"
          jaTitle="kohtaとは"
          enTitle="who is kohta"
        />
        <div className={styles.top}>
          <div className={styles.left}>
            <Image
              className={styles.image}
              src="/images/home/ufes.png"
              width={550}
              height={700}
              alt="profile-image"
            />
          </div>
          <div className={styles.right}>
            <p className={styles.enName}>kochi kohta</p>
            <h2 className={styles.name}>高知幸田</h2>
            <ul>
              <li>学習院大学法学部法学科学部3年生 (21)</li>
              <li>株式会社Enter CEO</li>
              <li>株式会社AMIJAM CTO</li>
            </ul>
            <p className={styles.desc}>
              大学1年生でプログラミングと出会い没頭、勉強を始めてから数年間ほぼ毎日コーディングをしている。
              主にフロントエンドを中心にWeb開発を行っており、Reactを使った開発が得意。最近はバックエンドも勉強中。
              <br />
              現在は会社にエンジニアとして所属しながら、フリーランス、業務委託という形で開発を行っている。
              <br />
              その他にも、イベント運営・イベントのDX化などを自身で行っておりコーディングだけではないクライアントとのやり取りも得意。
              大学学内で友人と共同開発でサービスをリリースしたり、学内でエンジニアになりたい学生の支援なども行っている。
              音楽が好きということもあり趣味でDJなども行っている。
            </p>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.left}>
            <p className={styles.title}>Frontend</p>
          </div>
          <div className={styles.center}>
            <p className={styles.title}>Backend</p>
          </div>
          <div className={styles.right}>
            <p className={styles.title}>Others</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
