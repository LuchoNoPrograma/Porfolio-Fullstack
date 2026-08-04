import type { Experience, NavigationItem, Project } from "../types/portfolio.ts";

const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export const navigation: readonly NavigationItem[] = [
  { labelKey: "navigation.home", href: "#inicio" },
  { labelKey: "navigation.projects", href: "#proyectos" },
  { labelKey: "navigation.experience", href: "#experiencia" },
  { labelKey: "navigation.technologies", href: "#tecnologias" },
  { labelKey: "navigation.contact", href: "#contacto" },
];

export const projects: readonly Project[] = [
  {
    id: "nexa",
    eyebrow: {
      es: "Producto web · Vue",
      en: "Web product · Vue",
    },
    title: "Nexa",
    description: {
      es: "Plataforma comercial para emprendedores de Cobija, con herramientas digitales y una experiencia web responsive.",
      en: "A commercial platform for entrepreneurs in Cobija, with digital tools and a responsive web experience.",
    },
    result: {
      es: "Una experiencia pública clara, rápida y preparada para conectar nuevas herramientas de negocio.",
      en: "A clear, fast public experience ready to connect new business tools.",
    },
    images: [
      {
        src: publicAsset("images/projects/nexa/app.webp"),
        alt: {
          es: "Página principal de Nexa en escritorio",
          en: "Nexa home page on desktop",
        },
      },
      {
        src: publicAsset("images/projects/nexa/app-mobile.webp"),
        alt: {
          es: "Página principal responsive de Nexa en móvil",
          en: "Responsive Nexa home page on mobile",
        },
        fit: "contain",
      },
      {
        src: publicAsset("images/projects/nexa/pos.webp"),
        alt: {
          es: "Identidad visual de una herramienta comercial de Nexa",
          en: "Visual identity for a Nexa business tool",
        },
      },
    ],
    repositoryUrl: "https://github.com/LuchoNoPrograma/nexa",
    websiteUrl: "https://nexa-iota.vercel.app",
    stack: ["Vue 3", "TypeScript", "Vite", "Responsive UI"],
  },
  {
    id: "bora-asai",
    eyebrow: {
      es: "Aplicación comercial · Flutter + API",
      en: "Commercial application · Flutter + API",
    },
    title: "Bora Asai",
    description: {
      es: "Solución comercial para una marca local, con aplicación Flutter, servicios backend y una interfaz adaptada a caja y administración.",
      en: "A commercial solution for a local brand, with a Flutter application, backend services, and an interface for checkout and administration.",
    },
    result: {
      es: "Una base digital para ventas y operación diaria, disponible en web y preparada para distintos dispositivos.",
      en: "A digital foundation for sales and daily operations, available on the web and ready for different devices.",
    },
    images: [
      {
        src: publicAsset("images/projects/bora/app.webp"),
        alt: {
          es: "Pantalla de acceso de Bora Asai en escritorio",
          en: "Bora Asai sign-in screen on desktop",
        },
      },
      {
        src: publicAsset("images/projects/bora/app-mobile.webp"),
        alt: {
          es: "Pantalla de acceso responsive de Bora Asai",
          en: "Responsive Bora Asai sign-in screen",
        },
        fit: "contain",
      },
      {
        src: publicAsset("images/projects/bora/brand.webp"),
        alt: {
          es: "Identidad visual de Bora Asai Factory",
          en: "Bora Asai Factory visual identity",
        },
      },
    ],
    repositoryUrl: "https://github.com/LuchoNoPrograma/bora_asai",
    websiteUrl: "https://bora-asai.vercel.app",
    stack: ["Flutter", "NestJS", "MongoDB", "Redis"],
  },
  {
    id: "tienda-api",
    eyebrow: {
      es: "Backend empresarial · Java",
      en: "Enterprise backend · Java",
    },
    title: "Tienda REST API",
    description: {
      es: "API REST con Spring Boot, contratos documentados en OpenAPI y persistencia relacional para operaciones de tienda.",
      en: "A REST API with Spring Boot, OpenAPI-documented contracts, and relational persistence for store operations.",
    },
    result: {
      es: "Servicios documentados y verificables mediante pruebas de integración reproducibles con JUnit y Testcontainers.",
      en: "Documented services verified through reproducible integration tests with JUnit and Testcontainers.",
    },
    images: [
      {
        src: publicAsset("images/projects/tienda/swagger-overview.webp"),
        alt: {
          es: "Resumen de endpoints de Tienda REST API en Swagger",
          en: "Tienda REST API endpoint overview in Swagger",
        },
        fit: "contain",
      },
      {
        src: publicAsset("images/projects/tienda/swagger-products.webp"),
        alt: {
          es: "Endpoints de productos documentados con Swagger",
          en: "Product endpoints documented with Swagger",
        },
        fit: "contain",
      },
      {
        src: publicAsset("images/projects/tienda/swagger-orders.webp"),
        alt: {
          es: "Endpoints de pedidos documentados con Swagger",
          en: "Order endpoints documented with Swagger",
        },
        fit: "contain",
      },
    ],
    repositoryUrl: "https://github.com/LuchoNoPrograma/tienda-rest-api",
    websiteUrl:
      "https://tienda-rest-api-luisfluoxetina.koyeb.app/doc/swagger-ui/index.html",
    stack: ["Java 17", "Spring Boot", "PostgreSQL", "Docker"],
  },
];

export const experience: readonly Experience[] = [
  {
    period: {
      es: "Sep. 2023 — Jul. 2026",
      en: "Sep. 2023 — Jul. 2026",
    },
    role: {
      es: "Desarrollador Fullstack",
      en: "Fullstack Developer",
    },
    company: "Posgrado · Universidad Amazónica de Pando",
    description: {
      es: "Desarrollo de módulos académicos, administrativos, pagos, documentos y reportes. Backend Java, interfaces Angular y Vue, datos, integraciones y despliegues automatizados.",
      en: "Development of academic, administrative, payment, document, and reporting modules. Java backend, Angular and Vue interfaces, data, integrations, and automated deployments.",
    },
    stack: [
      "Java 17",
      "Spring Boot",
      "Angular",
      "Vue 3",
      "PostgreSQL",
      "Docker",
      "GitLab CI/CD",
    ],
  },
  {
    period: {
      es: "2024 — 2026",
      en: "2024 — 2026",
    },
    role: {
      es: "Desarrollador de soluciones comerciales",
      en: "Commercial Solutions Developer",
    },
    company: "Emprendimientos locales",
    description: {
      es: "Soluciones web y móviles para ventas, control operativo y administración. Trabajo completo desde levantamiento y prototipado hasta despliegue y soporte.",
      en: "Web and mobile solutions for sales, operations, and administration. End-to-end work from discovery and prototyping to deployment and support.",
    },
    stack: ["NestJS", "Angular", "Vue", "Flutter", "MongoDB", "Redis"],
  },
  {
    period: {
      es: "May. 2022 — Oct. 2022",
      en: "May. 2022 — Oct. 2022",
    },
    role: {
      es: "Desarrollador Frontend",
      en: "Frontend Developer",
    },
    company: "Universidad Amazónica de Pando",
    description: {
      es: "Mantenimiento de páginas informativas e interfaces para proyectos basados en Spring Framework, incluyendo vistas, validaciones e integración de datos.",
      en: "Maintenance of informational websites and interfaces for Spring Framework projects, including views, validation, and data integration.",
    },
    stack: ["HTML", "CSS", "JavaScript", "Thymeleaf", "JSP"],
  },
];

export const socialLinks = {
  github: "https://github.com/LuchoNoPrograma",
  linkedin: "https://www.linkedin.com/in/luis-alberto-morales-villaca/",
  cv: publicAsset("pdf/CV%20FULLSTACK%20LUIS%20MORALES.pdf"),
} as const;
