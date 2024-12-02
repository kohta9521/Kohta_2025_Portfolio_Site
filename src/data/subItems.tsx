// types
import { SubItem } from "@/types/types";

// react icons
import { FaUser, FaGlobe } from "react-icons/fa";

export const aboutSubItems: SubItem[] = [
  {
    key: "profile",
    link: "/about/#profile",
    reactIcon: <FaUser />,
    jaTitle: "プロフィール",
    enTitle: "Profile",
  },
  {
    key: "whatthissite",
    link: "/about/#whatthissite",
    reactIcon: <FaGlobe />,
    jaTitle: "このサイトについて",
    enTitle: "About This Site",
  },
];
