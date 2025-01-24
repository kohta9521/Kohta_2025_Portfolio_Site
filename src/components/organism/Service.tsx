import React from "react";

// scss
import styles from "./styles/Service.module.scss";

// icons
// import { RiPagesLine } from "react-icons/ri";
// import { MdOutlineDesignServices } from "react-icons/md";
// import { RiPencilRulerLine } from "react-icons/ri";
// import { MdLocalMovies } from "react-icons/md";
// import { IoIosMusicalNotes } from "react-icons/io";

// components
import SecTitle from "../atoms/SecTitle";
import AboutCard from "../molecules/AboutCard";
// import ServiceCard from "../molecules/ServiceCard";

const Service = () => {
  return (
    <div className={styles.service}>
      <div className={styles.container}>
        <SecTitle
          id="about-title"
          jaTitleSize="default"
          jaTitle="私が提供しているサービス"
          enTitle="Services I offer"
        />
        <AboutCard
          id="web-card-1"
          title="Web制作"
          desc="課題解決につながるクリエイティブをご提案します。"
          linkText="詳しくみる"
          link="/service/web"
          imgArray={[
            "/images/home/blog.png",
            "/images/home/freers.png",
            "/images/home/hokulea.png",
            "/images/home/kokogohan.png",
            "/images/home/ufes.png",
          ]}
        />
        <AboutCard
          id="software-card-2"
          title="ソフトウェア開発"
          desc="課題解決につながるクリエイティブをご提案します。"
          linkText="詳しくみる"
          link="/service/web"
          imgArray={[
            "/images/home/blog.png",
            "/images/home/freers.png",
            "/images/home/hokulea.png",
            "/images/home/kokogohan.png",
            "/images/home/ufes.png",
          ]}
        />
        <AboutCard
          id="design-card-3"
          title="デザイン制作"
          desc="課題解決につながるクリエイティブをご提案します。"
          linkText="詳しくみる"
          link="/service/web"
          imgArray={[
            "/images/home/blog.png",
            "/images/home/freers.png",
            "/images/home/hokulea.png",
            "/images/home/kokogohan.png",
            "/images/home/ufes.png",
          ]}
        />
        <AboutCard
          id="design-card-4"
          title="動画制作"
          desc="課題解決につながるクリエイティブをご提案します。"
          linkText="詳しくみる"
          link="/service/web"
          imgArray={[
            "/images/home/blog.png",
            "/images/home/freers.png",
            "/images/home/hokulea.png",
            "/images/home/kokogohan.png",
            "/images/home/ufes.png",
          ]}
        />
        <AboutCard
          id="design-card-5"
          title="DJ活動"
          desc="課題解決につながるクリエイティブをご提案します。"
          linkText="詳しくみる"
          link="/service/web"
          imgArray={[
            "/images/home/blog.png",
            "/images/home/freers.png",
            "/images/home/hokulea.png",
            "/images/home/kokogohan.png",
            "/images/home/ufes.png",
          ]}
        />
        {/* <div className={styles.cardBox}>
          <ServiceCard
            id="service-1"
            title="Web制作"
            icon={<RiPagesLine size={60} />}
            link="/service/web"
            desc="HP制作やLP制作などを請け負っています。1ページだけから大規模なサイトまで対応しております。"
          />
          <ServiceCard
            id="service-2"
            title="Webサービス制作"
            icon={<MdOutlineDesignServices size={60} />}
            link="/service/web-service"
            desc="Webサービスの企画から設計、開発、運用まで一貫して行います。"
          />
          <ServiceCard
            id="service-3"
            title="デザイン制作"
            icon={<RiPencilRulerLine size={60} />}
            link="/service/design"
            desc="ロゴ制作やUI/UXデザインなどを請け負っています。"
          />
        </div>
        <div className={styles.cardBox}>
          <ServiceCard
            id="service-4"
            title="動画制作"
            icon={<MdLocalMovies size={60} />}
            link="/service/movie"
            desc="動画制作や編集を請け負っています。"
          />
          <ServiceCard
            id="service-5"
            title="DJ活動"
            icon={<IoIosMusicalNotes size={60} />}
            link="/service/dj"
            desc="DJ活動を行っています。"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Service;
