export type SupportedLocale = "es" | "en";

export type LocalizedText = Record<SupportedLocale, string>;

export type NavigationItem = {
  labelKey: string;
  href: `#${string}`;
};

export type ProjectImage = {
  src: string;
  alt: LocalizedText;
  fit?: "cover" | "contain";
};

export type Project = {
  id: string;
  eyebrow: LocalizedText;
  title: string;
  description: LocalizedText;
  result: LocalizedText;
  images: readonly ProjectImage[];
  repositoryUrl: string;
  websiteUrl?: string;
  stack: readonly string[];
};

export type Experience = {
  period: LocalizedText;
  role: LocalizedText;
  company: string;
  description: LocalizedText;
  stack: readonly string[];
};

export type Technology = {
  name: string;
  icon: string;
  color: `#${string}`;
  detail?: LocalizedText;
};

export type TechnologyGroup = {
  id: string;
  label: LocalizedText;
  items: readonly Technology[];
};
