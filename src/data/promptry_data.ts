import {
  Code2,
  Server,
  Palette,
  Briefcase,
  Stethoscope,
  Scale,
  Monitor,
  Database,
  Cloud,
  PenTool,
  Megaphone,
  Activity,
  Eye,
  HeartPulse,
} from "lucide-react";

import type { Role } from "@/types/promprty";

export const roles: Role[] = [
  {
    id: "developer",
    title: "Developer",
    icon: Code2,
    description: "Build software, architecture, and scalable systems.",
    expertises: [
      {
        id: "frontend",
        title: "Frontend",
        icon: Monitor,
        description: "UI engineering and interaction systems.",
        actions: [
          {
            id: "landing-page",
            title: "Build Landing Page",
            description: "Generate modern landing page prompts.",
            promptTemplate: `You are a senior frontend engineer and UI designer.
                        Build a modern responsive landing page using:
                        - React
                        - TypeScript
                        - TailwindCSS
                        - shadcn/ui

                        Requirements:
                        - Minimal aesthetic
                        - Glassmorphism
                        - Mobile responsive
                        - Accessible
                        - Smooth animations

                        Context:
                        {{context}}`,
          },
          {
            id: "component",
            title: "Generate Component",
            description: "Create reusable React components.",
            promptTemplate: `Create a production-grade React component using TypeScript and Tailwind.

                        Component requirements:
                        {{context}}`,
          },
        ],
      },

      {
        id: "backend",
        title: "Backend",
        icon: Database,
        description: "APIs, databases, and architecture.",
        actions: [
          {
            id: "api-design",
            title: "Design API",
            description: "REST and scalable architecture prompts.",
            promptTemplate: `Act as a senior backend engineer.

                        Design a scalable backend architecture for:
                        {{context}}

                        Include:
                        - Database schema
                        - Authentication
                        - Rate limiting
                        - Deployment
                        - Scalability`,
          },
        ],
      },

      {
        id: "devops",
        title: "DevOps",
        icon: Cloud,
        description: "Deployment, CI/CD and infrastructure.",
        actions: [
          {
            id: "deploy",
            title: "Deployment Strategy",
            description: "CI/CD and infrastructure planning.",
            promptTemplate: `You are a DevOps architect.

                        Create a complete deployment pipeline for:
                        {{context}}`,
          },
        ],
      },
    ],
  },

  {
    id: "designer",
    title: "Designer",
    icon: Palette,
    description: "Craft elegant interfaces and visual systems.",
    expertises: [
      {
        id: "uiux",
        title: "UI/UX",
        icon: PenTool,
        description: "Experience and interaction design.",
        actions: [
          {
            id: "design-system",
            title: "Design System",
            description: "Create scalable design systems.",
            promptTemplate: `Create a modern design system for:
                        {{context}}

                        Include:
                        - Typography
                        - Color system
                        - Components
                        - Motion system
                        - Accessibility`,
          },
        ],
      },
    ],
  },

  {
    id: "marketer",
    title: "Marketer",
    icon: Megaphone,
    description: "Growth, positioning and audience strategy.",
    expertises: [
      {
        id: "content",
        title: "Content Marketing",
        icon: Briefcase,
        description: "Content strategy and growth.",
        actions: [
          {
            id: "write-content",
            title: "Write Content",
            description: "Generate content prompts.",
            promptTemplate: `Act as a senior content strategist.

                        Write a high-quality article about:
                        {{context}}

                        Tone:
                        - Insightful
                        - Professional
                        - Human
                        - Clear`,
          },
          {
            id: "content-plan",
            title: "Content Plan",
            description: "Weekly content roadmap.",
            promptTemplate: `Create a 30-day content strategy for: {{context}}`,
          },
        ],
      },
    ],
  },

  {
    id: "doctor",
    title: "Doctor",
    icon: Stethoscope,
    description: "Medical workflows and clinical support.",
    expertises: [
      {
        id: "nutrition",
        title: "Nutrition",
        icon: HeartPulse,
        description: "Diet and healthy lifestyle guidance.",
        actions: [
          {
            id: "meal-plan",
            title: "Meal Plan",
            description: "Nutrition planning prompts.",
            promptTemplate: `Act as a professional nutrition specialist.

                        Create a personalized meal plan for:
                        {{context}}`,
          },
        ],
      },
      {
        id: "eye",
        title: "Eye Care",
        icon: Eye,
        description: "Eye health and consultation support.",
        actions: [
          {
            id: "eye-check",
            title: "Eye Consultation",
            description: "Patient consultation prompts.",
            promptTemplate: `Act as an ophthalmologist.

                        Provide guidance for:
                        {{context}}`,
          },
        ],
      },
      {
        id: "general-health",
        title: "General Health",
        icon: Activity,
        description: "General healthcare assistance.",
        actions: [
          {
            id: "symptom-review",
            title: "Symptom Review",
            description: "Medical analysis prompts.",
            promptTemplate: `Act as a professional doctor.

                        Analyze these symptoms:
                        {{context}}`,
          },
        ],
      },
    ],
  },

  {
    id: "lawyer",
    title: "Lawyer",
    icon: Scale,
    description: "Contracts, legal writing and compliance.",
    expertises: [
      {
        id: "contracts",
        title: "Contracts",
        icon: Scale,
        description: "Legal contract assistance.",
        actions: [
          {
            id: "contract-review",
            title: "Review Contract",
            description: "Analyze and summarize contracts.",
            promptTemplate: `Act as a legal advisor.

                        Review the following contract:
                        {{context}}`,
          },
        ],
      },
    ],
  },
];
