// type
import { Sns } from "@/types/sns";

// react icons
import { FaGithub, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

// data
export const SnsItems: Sns[] = [
  {
    id: "1",
    link: "/",
    name: "GitHub",
    icon: <FaGithub />,
  },
  {
    id: "2",
    link: "/",
    name: "Instagram",
    icon: <FaInstagram />,
  },
  {
    id: "3",
    link: "/",
    name: "Twitter",
    icon: <FaTwitter />,
  },
  {
    id: "4",
    link: "/",
    name: "LinkedIn",
    icon: <FaLinkedin />,
  },
];
