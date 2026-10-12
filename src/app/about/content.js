// ─────────────────────────────────────────────
//  ABOUT SECTION — edit everything here
// ─────────────────────────────────────────────

import {
  SiReact, SiNextdotjs, SiJavascript, SiTailwindcss,
  SiFlutter, SiShopify, SiPython, SiCplusplus,
  SiGoogle, SiOpenai,
  SiHtml5, SiCss, SiTypescript, SiPhp, SiGo, SiRust, SiSwift, SiKotlin,
  SiGit, SiDocker, SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiMysql, SiRedis,
  SiVercel, SiNetlify, SiPostman,
  SiLaravel,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import {
  TbSql, TbPointer, TbHeart,
} from "react-icons/tb";

export const SECTION = {
  label: "About Me",
};

export const HEADING = {
  line1: "I'm",
  line2: "Gaurav",
  line3: "Developer.",   // ghost (outline) style
};

// *word* = highlighted/bold in BlurText
export const BIO = [
  "I’m a *full-stack developer* and *freelancer* who combines design, code, and creative problem-solving to build meaningful digital experiences. I create websites and applications that look *distinctive*, *feel intuitive*, and *work seamlessly*.",

  "I work across the entire development process, from *crafting intuitive interfaces* and thoughtful user experiences to developing *functional web applications* and building the logic that powers them. I enjoy turning ideas into *polished digital products*, from the first concept to the final implementation.",

  "Rather than limiting myself to a single technology, I explore *different tools*, *frameworks*, and *platforms* to find the right approach for every project. I continuously experiment with new technologies and adapt my skills to the unique challenges each project brings.",

  "Whether I’m building a product from scratch, collaborating with clients on freelance projects, or developing solutions as part of a team, my focus remains the same: *creating digital products that balance design*, *performance*, and *functionality* while solving real-world problems."
];

export const RESUME_URL = "/resume.pdf";

export const TECH = [
  { name: "React",          icon: SiReact },
  { name: "Next.js",        icon: SiNextdotjs },
  { name: "JavaScript",     icon: SiJavascript },
  { name: "TypeScript",     icon: SiTypescript },
  { name: "HTML5",          icon: SiHtml5 },
  { name: "CSS3",           icon: SiCss },
  { name: "Tailwind CSS",   icon: SiTailwindcss },
  { name: "Node.js",        icon: SiNodedotjs },
  { name: "Express",        icon: SiExpress },
  { name: "Python",         icon: SiPython },
  { name: "C++",            icon: SiCplusplus },
  { name: "PHP",            icon: SiPhp },
  { name: "Laravel",        icon: SiLaravel },
  { name: "MongoDB",        icon: SiMongodb },
  { name: "PostgreSQL",     icon: SiPostgresql },
  { name: "MySQL",          icon: SiMysql },
  { name: "Git",            icon: SiGit },
  { name: "Vercel",         icon: SiVercel },
  { name: "Netlify",        icon: SiNetlify },
  { name: "Postman",        icon: SiPostman },
];

export const CREATIVE = [
  { name: "Google Stitch",   icon: SiGoogle },
  { name: "Cursor",          icon: TbPointer },
  { name: "Codex",           icon: SiOpenai },
  { name: "Lovable",         icon: TbHeart },
];

export const EXPERIENCE = [
  { role: "Junior Full-Stack Developer",               period: "July 2026 – Present" },
  { role: "SDE intern",                                period: "Feb 2026 – June 2026" },
];
