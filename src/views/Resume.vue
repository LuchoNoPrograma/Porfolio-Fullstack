<script lang="ts" setup>
import type { ItemAccordion } from "../types/ComponentType.ts";
import { onMounted, ref } from "vue";
import CustomAccordion from "../components/shared/CustomAccordion.vue";
import AppMainPagination from "../layout/AppMainPagination.vue";

const itemsExperience = ref<ItemAccordion[]>([
  {
    title: "Posgrado UAP (Octubre 2022 - Diciembre 2023)",
    content:
      "Participe activamente en el análisis de requerimientos y colabore en el desarrollo de servicios, API REST, pruebas unitarias e integradas," +
      " implementación de interfaces de usuario, consumo de API y despliegue de la aplicación oficial del instituto.",
    chips: [
      { title: "Java + Spring Boot" },
      { title: "Typescript + Vue" },
      { title: "PostgreSQL" },
      { title: "Docker" },
    ],
  },
  {
    title: "Universidad Amazónica de Pando (Mayo 2023 - Octubre 2023)",
    content:
      "Mantenimiento de paginas web informativas y Aplicaciones Web desplegadas con Java + Spring MVC",
    chips: [{ title: "Java + Spring Framework" }, { title: "HTML, CSS, JS" }],
  },
  {
    title: "Freelancer (Enero 2022 - Actualidad)",
    content:
      "Obtención de requerimientos del cliente, desarrollo de la base de datos, servicios e interfaces gráficas de usuario que cumplan " +
      "con las espectativas del cliente. También se incluye en el desarrollo de Landing Pages a petición del cliente",
    chips: [
      { title: "Java + Spring Boot" },
      { title: "HTML, CSS, JS" },
      { title: "PostgreSQL" },
    ]
  },
]);

const itemsEducation = ref<ItemAccordion[]>([
  {
    title: "Universidad Amazónica de Pando (Marzo 2021)",
    content:
      "En proceso de obtener la licenciatura en la carrera de Ingeniería de Sistemas",
  },
  {
    title: "Curso técnico de Programación (Mayo 2022 - Octubre 2022)",
    content:
      "Impartido por la Universidad Amazónica de Pando, enfocado en desarrollo de aplicaciónes web empresariales con HTML, CSS, JS y Java Spring Boot.",
  },
]);

onMounted(() => {
  setTimeout(() => {
    itemsEducation.value[0].expanded = true;
    itemsExperience.value[0].expanded = true;
  }, 300);

  setTimeout(() => {
    itemsEducation.value[1].expanded = true;
    itemsExperience.value[1].expanded = true;
  }, 400);

  setTimeout(() => {
    itemsExperience.value[2].expanded = true;
  }, 500);
});
</script>

<template>
  <div class="w-full grid grid-cols-12 gap-4">
    <div
      class="lg:col-span-12 md:col-span-12 sm:col-span-6 xs:col-span-6 col-span-12"
    >
      <div class="resumen__item resumen__item--first">
        <h3 class="title">Experiencia</h3>
        <div class="title__img"></div>
        <custom-accordion :items="itemsExperience"></custom-accordion>
      </div>
    </div>
    <div class="my-2 mx-2"></div>
    <div
      class="lg:col-span-12 md:col-span-12 sm:col-span-6 xs:col-span-6 col-span-12"
    >
      <div class="resumen__item resumen__item--second">
        <h3 class="title">Educación</h3>
        <div class="title__img"></div>
        <custom-accordion :items="itemsEducation"></custom-accordion>
      </div>
    </div>

    <div class="col-span-12 self-center">
      <app-main-pagination :actual="1"></app-main-pagination>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  30% {
    opacity: 0.4;
  }
  70% {
    opacity: 0.8;
  }
  100% {
    opacity: 1;
  }
}

.resumen__item {
  @apply transition-all;
  animation-name: fadeIn;
  animation-timing-function: ease-in;
  animation-iteration-count: 1;
}

.resumen__item--first {
  animation-duration: 300ms;
}

.resumen__item--second {
  animation-duration: 400ms;
}

.title {
  @apply text-3xl text-emerald-300 mb-0;
}

.title__img {
  @apply w-full h-4 mt-0;
  background: url("../assets/images/decoration/wavy-underline.png") no-repeat;
}
</style>