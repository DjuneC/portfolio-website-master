import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import promptshareImg from "@/public/promptshare.jpg";
import lamamiaImg from "@/public/lamamia.jpg";
import joanaBraidImg from "@/public/joana-braid.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Python/Django Developer",
    location: "Cap-Haitian, HT",
    description:
      "I worked as a Django developer for 1 year.",
    icon: React.createElement(LuGraduationCap),
    date: "2021-2022",
  },
  {
    title: "NodeJs/Backend Developer",
    location: "Cap-Haitian, HT",
    description:
      "I worked as a backend developer for 1 year. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2022-2023",
  },
  {
    title: "Front-End Developer",
    location: "San Antonio, TX",
    description:
      "I'm now a frontend developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "PromptShare",
    description:
      "web project that connects users to share creative prompts and ignite inspiration within an online community. It showcases my web development skills and passion for nurturing creativity.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: promptshareImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: lamamiaImg,
  },
  {
    title: "Joana Hair Braiding",
    description:
      "web project for a beauty industry client, emphasizing braiding services. It includes a braided hairstyle gallery and user-friendly appointment booking.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: joanaBraidImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
