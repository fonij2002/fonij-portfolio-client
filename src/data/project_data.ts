import type { Project } from "@/types/project";

export const projectData: Project[] = [
  {
    id: 1,
    title: "Kalado - Marketplace Platform",
    category: "front-web",
    techStack: ["React.js", "Material-UI", "Figma", "TypeScript"],
    description:
      "Designed the user experience and developed the frontend of an online marketplace as part of an Agile Software Development course project.",
    githubUrl: "https://github.com/fonij2002/Kalado",
  },
  {
    id: 2,
    title: "FilmGozin - Movie Recommendation System",
    category: "backend",
    techStack: ["Django", "DRF", "PostgreSQL"],
    description:
      "Developed the backend API for a movie recommendation system as my Bachelor's thesis, designing RESTful services, database models, and recommendation workflows using Django.",
    liveUrl: "https://github.com/FilmGozin/filmgozin-server",
  },
  {
    id: 3,
    title: "Wizzylist - Your Easy Wishlist",
    category: "front-web",
    techStack: ["React.js", "TailwindCSS", "TypeScript"],
    description:
      "A lightweight wishlist web application built with React.js that lets you create and share your wishlists with your friends and family, so they always know what you actually want! This project started as an AI-assisted prototype and refactored into a more maintainable, responsive, and production-ready application.",
    liveUrl: "https://fonij2002.github.io/wizzylist/",
  },
  {
    id: 4,
    title: "Gold Trading Marketplace",
    category: "front-mobile",
    techStack: ["React Native", "Typescript", "Cross-platform Development"],
    description:
      "Built a full-stack mobile and web application for a gold trading platform, implementing authentication, marketplace listings, wallet transactions, order management, and an admin dashboard. Delivered a functional MVP for stakeholder validation.",
    githubUrl: "https://github.com/Gold-Trading-Marketplace",
  },
];
