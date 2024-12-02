// types
import { SubItem } from "@/types/types";

// react icons
import { FaUser, FaRocket } from "react-icons/fa";
import { RiProfileLine } from "react-icons/ri";

export const aboutSubItems: SubItem[] = [
  {
    key: "profile",
    link: "/about/#profile",
    reactIcon: <FaUser />,
    jaTitle: "自己紹介",
    enTitle: "My Profile",
  },
  {
    key: "career",
    link: "/about/#career",
    reactIcon: <RiProfileLine />,
    jaTitle: "これまでとこれからのキャリア",
    enTitle: "Career",
  },
  {
    key: "hobby",
    link: "/about/#hobby",
    reactIcon: <FaRocket />,
    jaTitle: "趣味や興味",
    enTitle: "Hobby",
  },
];

export const profileSubItems: SubItem[] = [
  {
    key: "profile",
    link: "/about/#profile",
    reactIcon: <FaUser />,
    jaTitle: "自己紹介",
    enTitle: "My Profile",
  },
];

export const worksSubItems: SubItem[] = [
  {
    key: "works",
    link: "/works/#works",
    reactIcon: <FaUser />,
    jaTitle: "制作物",
    enTitle: "Works",
  },
];

export const blogSubItems: SubItem[] = [
  {
    key: "blog",
    link: "/blog/#blog",
    reactIcon: <FaUser />,
    jaTitle: "ブログ",
    enTitle: "Blog",
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
