import React from "react";

// ============================
// TEMPLATE IMAGES
// ============================
import TEMPLATE_ONE_IMG from "../assets/Resumeheaderimg.jpeg";
import TEMPLATE_TWO_IMG from "../assets/Resumeheaderimg.jpeg";
import TEMPLATE_THREE_IMG from "../assets/Resumeheaderimg.jpeg";

// ============================
// RESUME TEMPLATES
// ============================
export const resumeTemplates = [
  {
    id: "01",
    thumbnailImg: TEMPLATE_ONE_IMG,
    colorPaletteCode: "themeOne",
  },
  {
    id: "02",
    thumbnailImg: TEMPLATE_TWO_IMG,
    colorPaletteCode: "themeTwo",
  },
  {
    id: "03",
    thumbnailImg: TEMPLATE_THREE_IMG,
    colorPaletteCode: "themeThree",
  },
];

// ============================
// THEME COLOR PALETTE
// ============================
export const themeColorPalette = {
  themeOne: [
    ["#EBF0FF", "#A1F4FD", "#CEFAFE", "#62B8DB", "#4A5565"],
    ["#E9FBF8", "#84EFE7", "#93E2DA", "#2AC9A8", "#304C5A"],
    ["#F0FAFF", "#06F0FF", "#AAFDEF", "#3399FF", "#445361"],
    ["#FFF5F7", "#FFE0EC", "#FAC6D4", "#F6729C", "#5A5A5A"],
    ["#F9FAFB", "#E4E7EB", "#CBD5E0", "#1F9CFF", "#203748"],
    ["#F4FFFD", "#03FDF2", "#B0E904", "#34C790", "#384C48"],
  ],

  themeTwo: [
    ["#EBF0FF", "#A1F4FD", "#CEFAFE", "#209B8DB", "#4A5565"],
    ["#E9FBF8", "#84EFE7", "#93E2DA", "#2AC9A8", "#304C5A"],
    ["#F5FAFF", "#E0CBFF", "#C9C2F8", "#857901", "#48485C"],
    ["#F0FAFF", "#06F0FF", "#AAFDEFF", "#3399FF", "#445361"],
    ["#FFF5F7", "#FFE0EC", "#FAC6D4", "#F6729C", "#5A5A5A"],
    ["#F9FAFB", "#E4E7EB", "#CBD5E0", "#1F9CFF", "#203748"],
  ],

  themeThree: [
    ["#F4FFFD", "#03FDF2", "#B0E904", "#34C790", "#384C48"],
    ["#FFF7F0", "#FFE609", "#FFD2BA", "#FF9561", "#4C4743"],
    ["#E9E3FB", "#D0CAF9", "#A862F4", "#1E88E5", "#0047A1"],
    ["#FFFDF6", "#FFE407", "#FFE7A8", "#FFD208", "#57534E"],
    ["#EFFCFF", "#CBE0FF", "#99E0FF", "#6978A7", "#283442"],
    ["#FFF7F7", "#FEE4E4", "#FCFCFC", "#4AAAAA", "#222222"],
  ],
};

// ============================
// DUMMY RESUME DATA
// ============================

export const DUMMY_RESUME_DATA = {
  profileInfo: {
    profileImg: null,
    previewUrl: "",
    fullName: "John Doe",
    designation: "Senior Software Engineer",
    summary:
      "Passionate and results-driven developer with 6+ years of experience building scalable applications with modern technologies.",
  },

  contactInfo: {
    email: "john.doe@example.com",
    phone: "+1234567890",
    location: "#12 Anywhere, Any City, Any Country",
    linkedin: "https://linkedin.com/timetoprogram",
    github: "https://github.com/timetoprogram",
    website: "https://timetoprogram.com",
  },

  workExperience: [
    {
      company: "Tech Solutions",
      role: "Senior Frontend Engineer",
      startDate: "2022-03",
      endDate: "2025-04",
      description:
        "Leading the frontend team to build scalable enterprise applications using React.",
    },
    {
      company: "Coding Dev",
      role: "Full Stack Developer",
      startDate: "2020-01",
      endDate: "2022-02",
      description:
        "Worked on cross-functional teams developing full-stack solutions with React, Node.js, and MongoDB.",
    },
    {
      company: "Startup Company",
      role: "Junior Web Developer",
      startDate: "2018-06",
      endDate: "2019-12",
      description:
        "Built responsive websites for startups and small businesses.",
    },
  ],

  education: [
    {
      degree: "M.Sc. Software Engineering",
      institution: "Tech University",
      startDate: "2021-08",
      endDate: "2023-06",
    },
    {
      degree: "B.Sc. Computer Science",
      institution: "State University",
      startDate: "2017-05",
      endDate: "2021-05",
    },
    {
      degree: "High School Diploma",
      institution: "Central High School",
      startDate: "2015-06",
      endDate: "2017-05",
    },
  ],

  skills: [
    { name: "JavaScript", progress: 95 },
    { name: "React", progress: 90 },
    { name: "Node.js", progress: 85 },
    { name: "TypeScript", progress: 80 },
    { name: "MongoDB", progress: 75 },
  ],

  projects: [
    {
      title: "Project Manager App",
      description: "A task and team management app built with the MERN stack.",
      github: "https://github.com/timetoprogram/project-manager-app",
    },
    {
      title: "E-Commerce Platform",
      description:
        "An e-commerce site built with Next.js and Stripe integration.",
      liveDemo: "https://ecommerce-demo.timetoprogram.com",
    },
    {
      title: "Blog CMS",
      description:
        "A custom CMS for blogging using Express and React. Includes WYSIWYG editor.",
      github: "https://github.com/timetoprogram/blog-cms",
      liveDemo: "https://blogcms.timetoprogram.dev",
    },
  ],

  certifications: [
    {
      title: "Full Stack Web Developer",
      issuer: "Udemy",
      year: "2023",
    },
    {
      title: "React Advanced Certification",
      issuer: "Coursera",
      year: "2022",
    },
  ],

  languages: [
    { name: "English", progress: 100 },
    { name: "Spanish", progress: 70 },
    { name: "French", progress: 40 },
  ],

  interests: ["Reading", "Open Source Contribution", "Hiking"],
};
