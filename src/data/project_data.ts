import type { Project } from "@/types/project";

export const projectData: Project[] = [
  {
    id: 1,
    title: "Rozaan Shop",
    category: "backend",
    techStack: ["Django", "RestAPI", "PostgreSQL"],
    description: "Telegram & Bale bot for organic fragrance products",
    liveUrl: "https://ble.ir/myrozaan_bot",
  },
  {
    id: 2,
    title: "Bazarevam",
    category: "backend",
    techStack: ["Django", "RestAPI", "PostgreSQL"],
    description: "Bale bot for Pouleto startup for loan trading",
    liveUrl: "https://ble.ir/bazarevam_bot",
  },
  {
    id: 3,
    title: "Pouleto",
    category: "front-web",
    techStack: ["React.js", "TailwindCSS", "TypeScript"],
    liveUrl: "https://pouleto.com",
    description: "Pouleto website",
  },
  {
    id: 4,
    title: "Fonij React Template",
    category: "front-web",
    techStack: ["React.js", "TailwindCSS", "TypeScript"],
    description:
      "Vite + React 19 + shadcn/ui starter: multilingual, customized theme, routing. Start your SaaS, agency, or landing page in minutes.",
    githubUrl: "https://github.com/Fonij80/fonij-react-template",
  },
  {
    id: 5,
    title: "Gold Dealer Platform",
    category: "front-mobile",
    techStack: ["React Native"],
    description:
      "A dedicated platform that enables gold dealers to offer, manage, and securely trade gold, silver, and jewelry directly with their own customers",
    githubUrl: "https://github.com/Fonij80/gold_dealer_platform_client",
  },
];
