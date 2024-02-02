<script lang="ts" setup>
import type { ItemAccordion } from "../types/ComponentType.ts";
import { onMounted, ref } from "vue";
import CustomAccordion from "../components/shared/CustomAccordion.vue";
import AppMainPagination from "../layout/AppMainPagination.vue";

const itemsExperience = ref<ItemAccordion[]>([
  {
    title: "Posgrado UAP (Octubre-2022 a Diciembre-2023)",
    content: "Diseño, desarrollo, despliegue y mantenimiento de la aplicación web del instituto, durante este periodo",
    chips: [{ title: "Java + Spring Boot" }, { title: "Typescript + Vue" }],
  },
  {
    title: "Universidad Amazónica de Pando (Mayo-2022 a Octubre-2022)",
    content:
      "Mantenimiento de Aplicaciones Web desplegadas con Java + Spring MVC",
    chips: [{ title: "Java + Spring Framework" }],
  },
]);

const itemsEducation = ref<ItemAccordion[]>([
  {
    title: "Bootcamp Oracle ONE - Alura (Enero-2024)",
    content:
      "Actualmente me encuentro cursando el bootcamp de Desarrollo web Backend con Java + Spring Boot",
  },
  {
    title: "Universidad Amazónica de Pando (Enero-2020)",
    content:
      "En proceso de obtener la licenciatura en la carrera de Ingeniería de Sistemas",
  },
  {
    title: "Curso Tecnico de Programación (Agosto-2019 a Noviembre-2019)",
    content: "Lenguajes HTML + CSS Y JS enfocado en desarrollo de landing pages",
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
    itemsEducation.value[2].expanded = true;
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