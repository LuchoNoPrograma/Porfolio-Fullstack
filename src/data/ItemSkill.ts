import { TechSkillsCardItem } from "../types/ComponentType.ts";

const itemsLanguages: TechSkillsCardItem[] = [
  {
    name: "Java",
    icon: "java",
  },
  {
    name: "JavaScript",
    icon: "javascript",
  },
  {
    name: "TypeScript",
    icon: "typescript",
  },
];

const itemsFrontend: TechSkillsCardItem[] = [
  {
    name: "Vue",
    icon: "vue",
  },
  {
    name: "SASS",
    icon: "scss",
  },
  {
    name: "TailwindCSS",
    icon: "tailwind",
  },
];

const itemsBackend: TechSkillsCardItem[] = [
  {
    name: "Spring Boot",
    icon: "spring",
  },
  {
    name: "PostgreSQL",
    icon: "postgresql",
  },
  {
    name: "MySQL",
    icon: "mysql",
  },
];

const itemsTools: TechSkillsCardItem[] = [
  {
    name: "Docker",
    icon: "docker",
  },
];

export const itemsSkills: { title: string; items: TechSkillsCardItem[] }[] = [
  {
    title: "Lenguajes",
    items: itemsLanguages,
  },
  {
    title: "Frontend",
    items: itemsFrontend,
  },
  {
    title: "Backend",
    items: itemsBackend,
  },
  {
    title: "Tools",
    items: itemsTools,
  },
];