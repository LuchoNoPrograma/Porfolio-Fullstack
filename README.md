# Portfolio de Luis Morales

Landing profesional bilingüe para presentar experiencia, tecnologías y proyectos
seleccionados de Luis Morales.

## Stack del proyecto

- Vue 3 y TypeScript.
- Vite como bundler y servidor de desarrollo.
- Tailwind CSS 4 para utilidades y composición visual.
- CSS del proyecto para el sistema visual y las animaciones.
- Vue I18n para español e inglés.
- Vue3 Carousel para las galerías de proyectos.
- Simple Icons y Devicon para los logotipos técnicos.
- Tabler Icons para iconos de interfaz.

No usa Vue Router ni una store global porque toda la experiencia vive en una sola
landing y el contenido no necesita estado compartido complejo.

## Contenido

Los proyectos y la experiencia viven como datos tipados en
`src/data/portfolio.ts`; el catálogo técnico está aislado en
`src/data/technologies.ts`. No existe una base de datos ni una API: el contenido
se incluye en el build y se sirve como sitio estático.

Chatty presenta el chat fullstack con Vue, Spring Boot, STOMP/WebSocket y Docker,
con cuatro capturas reales de escritorio y móvil. Nini Hub muestra la gestión
de perfiles y cuotas, estadísticas, renovaciones y apertura de agentes.

Al pulsar una captura de cualquier proyecto se abre un visor con carrusel,
miniaturas, descripción y zoom para leer los detalles. Admite gestos táctiles,
flechas del teclado y cierre con Escape; bloquea el scroll de fondo y devuelve
el foco al cerrar. Las animaciones respetan la preferencia de movimiento reducido.

El correo no aparece como texto plano en el HTML ni en los datos estructurados.
Se reconstruye en el navegador únicamente cuando la persona solicita contactar.
El CV contiene los datos proporcionados por su autor y se mantiene como descarga
independiente.

## Desarrollo

Requiere Node.js 22.13 o superior.

```bash
npm install
npm run dev
```

## Calidad

```bash
npm run check
```

El comando ejecuta lint, formato, pruebas unitarias, typecheck, build de
producción y pruebas E2E.

## GitHub Pages

El workflow `.github/workflows/deploy-pages.yml` valida y publica el sitio al
hacer push a `main` o `master`.

En GitHub, habilita **Settings > Pages > Source > GitHub Actions**. El workflow
construye con la base `/Porfolio-Fullstack/` para que imágenes, CV y assets
funcionen desde la ruta del repositorio.

## Archivos principales

- `src/App.vue`: estructura de la landing.
- `src/i18n.ts`: textos en español e inglés.
- `src/data/portfolio.ts`: navegación, proyectos y experiencia.
- `src/data/technologies.ts`: stack principal y tecnologías agrupadas.
- `src/components/TechnologyGrid.vue`: matriz visual de tecnologías.
- `src/components/ProjectCarousel.vue`: carruseles accesibles.
- `public/pdf/CV FULLSTACK LUIS MORALES.pdf`: CV descargable.
- `index.html`: SEO, Open Graph y datos estructurados.
