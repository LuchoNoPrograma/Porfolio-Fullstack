import { createI18n } from "vue-i18n";
import type { SupportedLocale } from "./types/portfolio.ts";

const messages = {
  es: {
    navigation: {
      home: "Inicio",
      projects: "Proyectos",
      experience: "Experiencia",
      technologies: "Tecnologías",
      contact: "Contacto",
    },
    common: {
      skip: "Saltar al contenido",
      talk: "Hablemos",
      viewProjects: "Ver proyectos",
      viewProject: "Ver proyecto",
      viewCode: "Ver código",
      downloadCv: "Descargar CV",
      email: "Escribir por correo",
      previousImage: "Imagen anterior",
      nextImage: "Imagen siguiente",
      imageOf: "Imagen {current} de {total}",
      expandImage: "Ampliar imagen de {title}",
      expandedGallery: "Galería ampliada de {title}",
      closeGallery: "Cerrar galería",
      zoomImage: "Ampliar detalle",
      fitImage: "Ajustar a pantalla",
      galleryHelp: "Usa las flechas para explorar · Esc para cerrar",
      zoomHelp: "Desplázate por la imagen para ver los detalles",
      thumbnails: "Elegir captura",
      mainNavigation: "Navegación principal",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
      changeLanguage: "Cambiar idioma",
    },
    hero: {
      eyebrow: "Backend Java · Fullstack Vue y Flutter",
      value:
        "Construyo sistemas empresariales con Java y Spring Boot, y experiencias web y móviles con Vue y Flutter.",
      location: "Cobija, Bolivia · Inglés B2",
    },
    profile: {
      index: "01 / Perfil",
      title: "Backend sólido. Productos completos.",
      lead: "Desarrollador de software con experiencia en aplicaciones empresariales, APIs REST, interfaces administrativas y aplicaciones móviles. Participo desde el análisis y el diseño de datos hasta el despliegue.",
      backendTitle: "Backend Java",
      backendText:
        "Java 17, Spring Boot, JPA, Hibernate, JWT, reglas de negocio e integraciones.",
      frontendTitle: "Web",
      frontendText:
        "Vue 3, Nuxt, Angular y TypeScript para interfaces administrativas y productos responsive.",
      mobileTitle: "Mobile",
      mobileText:
        "Flutter para aplicaciones conectadas a servicios backend y operación comercial.",
      deliveryTitle: "Entrega",
      deliveryText:
        "Docker, CI/CD, Linux, Nginx y Proxmox para desplegar y operar soluciones.",
    },
    projects: {
      index: "02 / Proyectos",
      title: "Productos y sistemas desarrollados.",
      intro:
        "Casos con frontend, aplicaciones móviles y servicios backend conectados a necesidades reales.",
      technologies: "Tecnologías utilizadas",
      result: "Resultado",
    },
    experience: {
      index: "03 / Experiencia",
      title: "Experiencia profesional.",
      intro:
        "Sistemas institucionales, soluciones comerciales y productos desarrollados de extremo a extremo.",
    },
    technologies: {
      index: "04 / Tecnologías y herramientas",
      title: "Stack principal y experiencia complementaria.",
      intro:
        "Mi foco está en Java, Spring Boot, Vue y Flutter. Las demás herramientas completan el trabajo con datos, infraestructura, automatización y pruebas.",
      main: "Stack principal",
      complementary: "Tecnologías complementarias",
    },
    contact: {
      index: "05 / Contacto",
      title: "¿Necesitas backend, web o una aplicación móvil?",
      text: "Conversemos sobre el alcance, la arquitectura y una entrega que pueda mantenerse en producción.",
      protected: "El correo se genera únicamente al solicitarlo para reducir spam.",
      location: "Cobija, Bolivia · Remoto",
    },
    footer: {
      description: "Backend Java Developer · Fullstack Vue y Flutter",
      navigation: "Navegación",
      profiles: "Perfiles",
      availability: "Contacto directo",
      rights: "Portfolio de Luis Morales.",
      backToTop: "Volver arriba",
    },
  },
  en: {
    navigation: {
      home: "Home",
      projects: "Projects",
      experience: "Experience",
      technologies: "Technologies",
      contact: "Contact",
    },
    common: {
      skip: "Skip to content",
      talk: "Let's talk",
      viewProjects: "View projects",
      viewProject: "View project",
      viewCode: "View code",
      downloadCv: "Download CV",
      email: "Send an email",
      previousImage: "Previous image",
      nextImage: "Next image",
      imageOf: "Image {current} of {total}",
      expandImage: "Enlarge image from {title}",
      expandedGallery: "Expanded {title} gallery",
      closeGallery: "Close gallery",
      zoomImage: "Zoom into details",
      fitImage: "Fit to screen",
      galleryHelp: "Use arrows to explore · Esc to close",
      zoomHelp: "Scroll across the image to explore details",
      thumbnails: "Choose screenshot",
      mainNavigation: "Primary navigation",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      changeLanguage: "Change language",
    },
    hero: {
      eyebrow: "Java Backend · Vue and Flutter Fullstack",
      value:
        "I build enterprise systems with Java and Spring Boot, and web and mobile experiences with Vue and Flutter.",
      location: "Cobija, Bolivia · English B2",
    },
    profile: {
      index: "01 / Profile",
      title: "Solid backend. Complete products.",
      lead: "Software developer experienced in enterprise applications, REST APIs, administrative interfaces, and mobile applications. I contribute from analysis and data design through deployment.",
      backendTitle: "Java backend",
      backendText:
        "Java 17, Spring Boot, JPA, Hibernate, JWT, business rules, and integrations.",
      frontendTitle: "Web",
      frontendText:
        "Vue 3, Nuxt, Angular, and TypeScript for administrative interfaces and responsive products.",
      mobileTitle: "Mobile",
      mobileText:
        "Flutter applications connected to backend services and commercial operations.",
      deliveryTitle: "Delivery",
      deliveryText:
        "Docker, CI/CD, Linux, Nginx, and Proxmox to deploy and operate solutions.",
    },
    projects: {
      index: "02 / Projects",
      title: "Products and systems delivered.",
      intro:
        "Selected work spanning frontend, mobile applications, and backend services connected to real needs.",
      technologies: "Technologies used",
      result: "Outcome",
    },
    experience: {
      index: "03 / Experience",
      title: "Professional experience.",
      intro:
        "Institutional systems, commercial solutions, and products delivered end to end.",
    },
    technologies: {
      index: "04 / Technologies and tools",
      title: "Core stack and complementary experience.",
      intro:
        "My core stack is Java, Spring Boot, Vue, and Flutter. The remaining tools support data, infrastructure, automation, and testing.",
      main: "Core stack",
      complementary: "Complementary technologies",
    },
    contact: {
      index: "05 / Contact",
      title: "Need a backend, web product, or mobile application?",
      text: "Let's discuss scope, architecture, and a delivery that remains maintainable in production.",
      protected: "The email address is generated only when requested to reduce spam.",
      location: "Cobija, Bolivia · Remote",
    },
    footer: {
      description: "Java Backend Developer · Vue and Flutter Fullstack",
      navigation: "Navigation",
      profiles: "Profiles",
      availability: "Direct contact",
      rights: "Luis Morales portfolio.",
      backToTop: "Back to top",
    },
  },
} as const;

const getInitialLocale = (): SupportedLocale => {
  if (typeof window === "undefined") return "es";

  const savedLocale = window.localStorage.getItem("portfolio-locale");
  if (savedLocale === "es" || savedLocale === "en") return savedLocale;

  return "es";
};

export const i18n = createI18n({
  legacy: false,
  locale: getInitialLocale(),
  fallbackLocale: "es",
  messages,
});

export const setDocumentLocale = (locale: SupportedLocale) => {
  document.documentElement.lang = locale;
  window.localStorage.setItem("portfolio-locale", locale);

  const title =
    locale === "es"
      ? "Luis Morales | Backend Java y Fullstack"
      : "Luis Morales | Java Backend and Fullstack Developer";
  const description =
    locale === "es"
      ? "Portfolio de Luis Morales, desarrollador backend Java y fullstack con Spring Boot, Vue, Angular y Flutter."
      : "Luis Morales portfolio, Java backend and fullstack developer working with Spring Boot, Vue, Angular, and Flutter.";

  document.title = title;
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute("content", description);
};
