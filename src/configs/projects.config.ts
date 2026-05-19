import type { ProjectCategory } from "@/types/project";

export const projectCategories: { label: string; value: ProjectCategory }[] = [
  { label: "All", value: "all" },
  { label: "Backend", value: "backend" },
  { label: "Frontend", value: "front-web" },
  { label: "Mobile", value: "front-mobile" },
];
