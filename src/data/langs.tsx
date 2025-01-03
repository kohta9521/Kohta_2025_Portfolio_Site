// type
import { Lang } from "@/types/langs";

// react icons
import {
  FaHtml5,
  FaCss3,
  FaSass,
  FaReact,
  FaNodeJs,
  FaRust,
  FaDocker,
} from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { IoLogoJavascript, IoLogoFigma } from "react-icons/io5";
import {
  SiTypescript,
  SiGo,
  SiAdobepremierepro,
  SiAdobephotoshop,
  SiDavinciresolve,
  SiStorybook,
  SiEslint,
  SiPrettier,
  SiNotion,
  SiJest,
} from "react-icons/si";
import { TbBrandCpp, TbBrandThreejs } from "react-icons/tb";

export const frontend: Lang[] = [
  {
    id: "1",
    name: "HTML",
    version: ["4.01", "5"],
    reactIcon: <FaHtml5 />,
    years: 5,
    skill: 4,
    desc: "HTML5の基本的な構文を理解しています。",
  },
  {
    id: "2",
    name: "CSS",
    version: ["2", "3"],
    reactIcon: <FaCss3 />,
    years: 5,
    skill: 4,
    desc: "CSS3の基本的な構文を理解しています。",
  },
  {
    id: "3",
    name: "Sass",
    version: ["1.70.0"],
    reactIcon: <FaSass />,
    years: 3,
    skill: 3,
    desc: "Sassの基本的な構文を理解しています。",
  },
  {
    id: "4",
    name: "Tailwind CSS",
    version: ["2.0.2"],
    reactIcon: <RiTailwindCssFill />,
    years: 1,
    skill: 2,
    desc: "チートシートを確認しながらの使用経験があります。",
  },
  {
    id: "5",
    name: "JavaScript",
    version: ["ES5", "ES6"],
    reactIcon: <IoLogoJavascript />,
    years: 4,
    skill: 3,
    desc: "ES6の基本的な構文を理解しています。",
  },
  {
    id: "6",
    name: "TypeScript",
    version: ["4.1.2"],
    reactIcon: <SiTypescript />,
    years: 2,
    skill: 3,
    desc: "TypeScriptの基本的な構文を理解しています。",
  },
  {
    id: "7",
    name: "React",
    version: ["17", "18"],
    reactIcon: <FaReact />,
    years: 3,
    skill: 3,
    desc: "Reactの基本的な構文を理解しています。",
  },
  {
    id: "8",
    name: "Next.js",
    version: ["10.0.7"],
    reactIcon: <RiNextjsFill />,
    years: 1,
    skill: 2,
    desc: "Next.jsの基本的な構文を理解しています。",
  },
  {
    id: "9",
    name: "Storybook",
    version: ["6.3.0"],
    reactIcon: <SiStorybook />,
    years: 1,
    skill: 2,
    desc: "Storybookの基本的な構文を理解しています。",
  },
  {
    id: "10",
    name: "Eslint",
    version: ["7.22.0"],
    reactIcon: <SiEslint />,
    years: 1,
    skill: 2,
    desc: "Eslintの基本的な構文を理解しています。",
  },
  {
    id: "11",
    name: "Prettier",
    version: ["2.2.1"],
    reactIcon: <SiPrettier />,
    years: 1,
    skill: 2,
    desc: "Prettierの基本的な構文を理解しています。",
  },
  {
    id: "12",
    name: "Three.js",
    version: ["0.124.0"],
    reactIcon: <TbBrandThreejs />,
    years: 1,
    skill: 1,
    desc: "Three.jsの基本的な構文を理解しています。",
  },
  {
    id: "13",
    name: "Jest",
    version: ["26.6.3"],
    reactIcon: <SiJest />,
    years: 1,
    skill: 2,
    desc: "Jestの基本的な構文を理解しています。",
  },
];

export const Backend: Lang[] = [
  {
    id: "1",
    name: "Go",
    version: ["1.16.3"],
    reactIcon: <SiGo />,
    years: 1,
    skill: 1,
    desc: "Goの基本的な構文を理解しています。",
  },
  {
    id: "2",
    name: "Node.js",
    version: ["14.16.0"],
    reactIcon: <FaNodeJs />,
    years: 1,
    skill: 1,
    desc: "Node.jsの基本的な構文を理解しています。",
  },
  {
    id: "3",
    name: "Rust",
    version: ["1.50.0"],
    reactIcon: <FaRust />,
    years: 1,
    skill: 1,
    desc: "Rustの基本的な構文を理解しています。",
  },
  {
    id: "4",
    name: "C++",
    version: ["17"],
    reactIcon: <TbBrandCpp />,
    years: 1,
    skill: 1,
    desc: "C++の基本的な構文を理解しています。",
  },
];

export const Others: Lang[] = [
  {
    id: "1",
    name: "Docker",
    version: ["20.10.5"],
    reactIcon: <FaDocker />,
    years: 1,
    skill: 2,
    desc: "Dockerの基本的な構文を理解しています。",
  },
  {
    id: "2",
    name: "React Native",
    version: ["0.64.0"],
    reactIcon: <FaReact />,
    years: 1,
    skill: 2,
    desc: "React Nativeの基本的な構文を理解しています。",
  },
  {
    id: "3",
    name: "Figma",
    version: ["98.0"],
    reactIcon: <IoLogoFigma />,
    years: 1,
    skill: 2,
    desc: "Figmaの基本的な構文を理解しています。",
  },
  {
    id: "4",
    name: "Adobe Photoshop",
    version: ["2021"],
    reactIcon: <SiAdobephotoshop />,
    years: 1,
    skill: 2,
    desc: "Adobe Photoshopの基本的な構文を理解しています。",
  },
  {
    id: "5",
    name: "Adobe Premiere Pro",
    version: ["2021"],
    reactIcon: <SiAdobepremierepro />,
    years: 1,
    skill: 2,
    desc: "Adobe Premiere Proの基本的な構文を理解しています。",
  },
  {
    id: "6",
    name: "DaVinci Resolve",
    version: ["17"],
    reactIcon: <SiDavinciresolve />,
    years: 1,
    skill: 2,
    desc: "DaVinci Resolveの基本的な構文を理解しています。",
  },
  {
    id: "7",
    name: "notion",
    version: ["2.0.11"],
    reactIcon: <SiNotion />,
    years: 1,
    skill: 2,
    desc: "notionの基本的な構文を理解しています。",
  },
];
