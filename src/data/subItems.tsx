// types
import { SubItem } from "@/types/types";

// react icons
import {
  FaUser,
  FaRocket,
  FaListAlt,
  FaLaptopCode,
  FaMusic,
} from "react-icons/fa";
import { RiProfileLine } from "react-icons/ri";
import { FaPencil } from "react-icons/fa6";
import { LuCode2 } from "react-icons/lu";
import { MdOutlineDesignServices, MdMovieEdit } from "react-icons/md";

export const aboutSubItems: SubItem[] = [
  {
    key: "about",
    link: "/profile/#profile",
    reactIcon: <FaUser />,
    jaTitle: "自己紹介",
    enTitle: "My Profile",
  },
  {
    key: "career",
    link: "/profile/#career",
    reactIcon: <RiProfileLine />,
    jaTitle: "これまでとこれからのキャリア",
    enTitle: "Career",
  },
  {
    key: "hobby",
    link: "/profile/#hobby",
    reactIcon: <FaRocket />,
    jaTitle: "趣味や興味",
    enTitle: "Hobby",
  },
];

export const profileSubItems: SubItem[] = [
  {
    key: "my-profile",
    link: "/profile/#profile",
    reactIcon: <FaUser />,
    jaTitle: "自己紹介",
    enTitle: "My Profile",
  },
  {
    key: "career",
    link: "/profile/#career",
    reactIcon: <FaUser />,
    jaTitle: "経歴",
    enTitle: "Career",
  },
  {
    key: "skills",
    link: "/profile/#skills",
    reactIcon: <FaUser />,
    jaTitle: "スキルセット",
    enTitle: "Skills",
  },
  {
    key: "future-career",
    link: "/profile/#future",
    reactIcon: <RiProfileLine />,
    jaTitle: "これまでとこれからのキャリア",
    enTitle: "Future Career",
  },
  {
    key: "hobby",
    link: "/profile/#hobby",
    reactIcon: <FaRocket />,
    jaTitle: "趣味や興味",
    enTitle: "Hobby",
  },
];

export const worksSubItems: SubItem[] = [
  {
    key: "works",
    link: "/works/#works",
    reactIcon: <FaPencil />,
    jaTitle: "お仕事について",
    enTitle: "Works",
  },
  {
    key: "works-list",
    link: "/works/#works",
    reactIcon: <FaListAlt />,
    jaTitle: "制作実績一覧",
    enTitle: "Works List",
  },
  {
    key: "web",
    link: "/works/#works",
    reactIcon: <FaLaptopCode />,
    jaTitle: "Web制作事業",
    enTitle: "Web Production",
  },
  {
    key: "service",
    link: "/works/#works",
    reactIcon: <LuCode2 />,
    jaTitle: "サービス開発(Web・Phone)",
    enTitle: "Service Production",
  },
  {
    key: "design",
    link: "/works/#works",
    reactIcon: <MdOutlineDesignServices />,
    jaTitle: "デザイン作成",
    enTitle: "Design Production",
  },
  {
    key: "movie",
    link: "/works/#works",
    reactIcon: <MdMovieEdit />,
    jaTitle: "動画編集",
    enTitle: "Movie Production",
  },
  {
    key: "dj",
    link: "/works/#works",
    reactIcon: <FaMusic />,
    jaTitle: "DJ活動",
    enTitle: "DJ",
  },
];

export const blogSubItems: SubItem[] = [
  {
    key: "blog",
    link: "/blogs",
    reactIcon: <FaUser />,
    jaTitle: "ブログ",
    enTitle: "Blog",
  },
];

export const qaSubItems: SubItem[] = [
  {
    key: "qa",
    link: "/questions",
    reactIcon: <FaUser />,
    jaTitle: "よくある質問",
    enTitle: "Q&A",
  },
];

export const contactSubItems: SubItem[] = [
  {
    key: "contact",
    link: "/contact/#contact",
    reactIcon: <FaUser />,
    jaTitle: "お問い合わせ",
    enTitle: "Contact",
  },
];
