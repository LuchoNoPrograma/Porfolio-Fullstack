import playwrightIcon from "devicon/icons/playwright/playwright-plain.svg";
import angularIcon from "simple-icons/icons/angular.svg";
import apacheIcon from "simple-icons/icons/apache.svg";
import mavenIcon from "simple-icons/icons/apachemaven.svg";
import cssIcon from "simple-icons/icons/css.svg";
import cypressIcon from "simple-icons/icons/cypress.svg";
import dockerIcon from "simple-icons/icons/docker.svg";
import flutterIcon from "simple-icons/icons/flutter.svg";
import gitIcon from "simple-icons/icons/git.svg";
import gitlabIcon from "simple-icons/icons/gitlab.svg";
import hibernateIcon from "simple-icons/icons/hibernate.svg";
import htmlIcon from "simple-icons/icons/html5.svg";
import intellijIcon from "simple-icons/icons/intellijidea.svg";
import javaScriptIcon from "simple-icons/icons/javascript.svg";
import junitIcon from "simple-icons/icons/junit5.svg";
import linuxIcon from "simple-icons/icons/linux.svg";
import mongoIcon from "simple-icons/icons/mongodb.svg";
import nestIcon from "simple-icons/icons/nestjs.svg";
import nginxIcon from "simple-icons/icons/nginx.svg";
import nodeIcon from "simple-icons/icons/nodedotjs.svg";
import nuxtIcon from "simple-icons/icons/nuxt.svg";
import javaIcon from "simple-icons/icons/openjdk.svg";
import postgreSqlIcon from "simple-icons/icons/postgresql.svg";
import postmanIcon from "simple-icons/icons/postman.svg";
import proxmoxIcon from "simple-icons/icons/proxmox.svg";
import redisIcon from "simple-icons/icons/redis.svg";
import seleniumIcon from "simple-icons/icons/selenium.svg";
import sqliteIcon from "simple-icons/icons/sqlite.svg";
import springIcon from "simple-icons/icons/springboot.svg";
import typeScriptIcon from "simple-icons/icons/typescript.svg";
import vueIcon from "simple-icons/icons/vuedotjs.svg";
import webStormIcon from "simple-icons/icons/webstorm.svg";
import type { Technology, TechnologyGroup } from "../types/portfolio.ts";

export const primaryStack: readonly Technology[] = [
  {
    name: "Java 17",
    icon: javaIcon,
    color: "#ED8B00",
    detail: { es: "Backend empresarial", en: "Enterprise backend" },
  },
  {
    name: "Spring Boot",
    icon: springIcon,
    color: "#6DB33F",
    detail: { es: "APIs y servicios", en: "APIs and services" },
  },
  {
    name: "Vue 3",
    icon: vueIcon,
    color: "#42B883",
    detail: { es: "Aplicaciones web", en: "Web applications" },
  },
  {
    name: "Flutter",
    icon: flutterIcon,
    color: "#02569B",
    detail: { es: "Aplicaciones móviles", en: "Mobile applications" },
  },
];

export const technologyGroups: readonly TechnologyGroup[] = [
  {
    id: "frontend",
    label: { es: "Frontend", en: "Frontend" },
    items: [
      { name: "Angular", icon: angularIcon, color: "#DD0031" },
      { name: "Nuxt", icon: nuxtIcon, color: "#00DC82" },
      { name: "TypeScript", icon: typeScriptIcon, color: "#3178C6" },
      { name: "JavaScript", icon: javaScriptIcon, color: "#F7DF1E" },
      { name: "HTML5", icon: htmlIcon, color: "#E34F26" },
      { name: "CSS", icon: cssIcon, color: "#663399" },
    ],
  },
  {
    id: "backend",
    label: { es: "Backend", en: "Backend" },
    items: [
      { name: "NestJS", icon: nestIcon, color: "#E0234E" },
      { name: "Node.js", icon: nodeIcon, color: "#5FA04E" },
      { name: "Hibernate", icon: hibernateIcon, color: "#59666C" },
      { name: "Maven", icon: mavenIcon, color: "#C71A36" },
    ],
  },
  {
    id: "data",
    label: {
      es: "Bases de datos y caché",
      en: "Databases and cache",
    },
    items: [
      { name: "PostgreSQL", icon: postgreSqlIcon, color: "#4169E1" },
      { name: "MongoDB", icon: mongoIcon, color: "#47A248" },
      { name: "Redis", icon: redisIcon, color: "#FF4438" },
      { name: "SQLite", icon: sqliteIcon, color: "#52A7D8" },
    ],
  },
  {
    id: "infrastructure",
    label: { es: "Infraestructura", en: "Infrastructure" },
    items: [
      { name: "Docker", icon: dockerIcon, color: "#2496ED" },
      { name: "Git", icon: gitIcon, color: "#F05032" },
      { name: "GitLab CI/CD", icon: gitlabIcon, color: "#FC6D26" },
      { name: "Nginx", icon: nginxIcon, color: "#009639" },
      { name: "Apache", icon: apacheIcon, color: "#D22128" },
      { name: "Linux", icon: linuxIcon, color: "#FCC624" },
      { name: "Proxmox", icon: proxmoxIcon, color: "#E57000" },
    ],
  },
  {
    id: "testing",
    label: { es: "Testing", en: "Testing" },
    items: [
      { name: "JUnit 5", icon: junitIcon, color: "#25A162" },
      { name: "Testcontainers", icon: dockerIcon, color: "#2496ED" },
      { name: "Selenium", icon: seleniumIcon, color: "#43B02A" },
      { name: "Cypress", icon: cypressIcon, color: "#69D3A7" },
      { name: "Playwright", icon: playwrightIcon, color: "#45BA4B" },
    ],
  },
  {
    id: "tools",
    label: { es: "Herramientas", en: "Tools" },
    items: [
      { name: "IntelliJ IDEA", icon: intellijIcon, color: "#FE2857" },
      { name: "WebStorm", icon: webStormIcon, color: "#07C3F2" },
      { name: "Postman", icon: postmanIcon, color: "#FF6C37" },
    ],
  },
];
