import type { CollaborationType } from "@/types/collaboration";
import { Code2, Layers3, Rocket } from "lucide-react";

export const scopeOptions = [
  "API / Backend",
  "Landing Page",
  "Company / Personal Website",
  "Dashboard / Admin Panel",
  "Telegram / Bale Bot",
  "Marketplace",
  "Mobile app",
];

export const platformOptions = ["Web", "Android", "IOS", "API"];

export const collaborationOptions: {
  value: CollaborationType;
  label: string;
  desc: string;
}[] = [
  {
    value: "freelance",
    label: "Freelance project",
    desc: "You need a developer to design, build, or improve a product.",
  },
  {
    value: "cto-cofounder",
    label: "CTO / cofounder discussion",
    desc: "You want a technical partner to help shape product and execution.",
  },
  {
    value: "technical-partner",
    label: "Technical consulting",
    desc: "You need help with architecture, product direction, or implementation planning.",
  },
  {
    value: "not-sure",
    label: "Not sure yet",
    desc: "You have an idea and want help defining what should be built.",
  },
];

export const collaborationHighlights = [
  {
    icon: <Code2 className="h-5 w-5" />,
    title: "Full-stack execution",
    text: "React, Django, and React Native for products that need thoughtful frontend and solid backend foundations.",
  },
  {
    icon: <Layers3 className="h-5 w-5" />,
    title: "Clean product thinking",
    text: "I care about structure, clarity, and maintainable systems—not just shipping screens quickly.",
  },
  {
    icon: <Rocket className="h-5 w-5" />,
    title: "MVP to growth",
    text: "Useful for early products, founder-led startups, and teams that want momentum without messy execution.",
  },
];
