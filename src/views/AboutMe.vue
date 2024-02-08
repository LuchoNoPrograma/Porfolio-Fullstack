<script lang="ts" setup>
import BaseCard from "../components/shared/BaseCard.vue";
import type { TablerIconComponent } from "vue-tabler-icons";
import { DatabaseExportIcon, WorldWwwIcon } from "vue-tabler-icons";
import { markRaw, reactive } from "vue";
import AppMainPagination from "../layout/AppMainPagination.vue";

type ItemCard = {
  title: string;
  description: string;
  icon: TablerIconComponent;
};

type ItemCardWithFocus = ItemCard & { focus?: boolean };
const itemsAboutMe: ItemCardWithFocus[] = [
  {
    title: "Desarrollo Web",
    description: `Especificamente, aplicaciones web empresariales, abordando aspectos
            que van desde la planificación hasta el soporte técnico,
            garantizando soluciones sólidas y adaptadas a las necesidades
            específicas de cada negocio.`,
    icon: WorldWwwIcon,
  },
  {
    title: "RESTFul API",
    description: `Desarrollo interfaces robustas y flexibles para facilitar la
              interaccion entre distintas aplicaciones de manera segura,
              utilizando diversos protocolos de autenticación.`,
    icon: DatabaseExportIcon,
  },
];

const itemsAboutMeReactive = itemsAboutMe.map((item: ItemCardWithFocus) => {
  return reactive({
    title: item.title,
    description: item.description,
    focus: false,
    icon: markRaw(item.icon),
  });
});

const focusItem = (item: ItemCardWithFocus, focused: boolean) => {
  item.focus = focused;
};
</script>

<template>
  <div class="grid grid-cols-12 gap-4">
    <div class="lg:col-span-12 col-span-12">
      <h2 class="text-3xl">
        ¡Bienvenido a mi
        <span class="text-emerald-300">Portfolio digital!</span>
      </h2>
      <p class="text-gray-300">
        Soy un autodidacta con un amor genuino por explorar nuevas tecnologías.
      </p>
      <p>
        Mi capacidad adaptativa y colaborativa me ha llevado a participar
        activamente en el desarrollo de un sistema académico-económico en mi
        universidad, donde pude aplicar mis conocimientos sobre tecnologias como
        Java, Javascript(TS), Bases de datos SQL y Docker. generandome casi mas
        de 1 año y medio de experiencia en el mundo laboral.
      </p>
      <p>
        Encontrarás mis proyectos personales que reflejan mi creatividad,
        dedicación y experiencia.
      </p>
    </div>

<!--    <div class="lg:col-span-5 col-span-12"></div>-->

    <div class="col-span-full">
      <h3 class="text-3xl">¿Qué <span class="text-emerald-300">hago?</span></h3>

      <div class="grid grid-cols-2 gap-4">
        <base-card
          v-for="(item, index) in itemsAboutMeReactive"
          :key="index"
          :class="item.focus ? 'base-card__layout--focus' : ''"
          color="secondary"
          class="lg:col-span-1 col-span-2 border-b-2 border-b-gray-400 base-card transition-transform duration-200 ease-in hover:scale-105"
          @mouseleave="focusItem(item, false)"
          @mouseover.stop="focusItem(item, true)"
        >
          <template #title>
            <div class="flex items-center gap-2 base-card__title">
              <h4
                :class="item.focus ? 'text-emerald-300' : 'text-gray-300'"
                class="text-xl mb-0 transition-colors ease-in duration-200"
              >
                {{ item.title }}
              </h4>
              <span
                :class="item.focus ? 'text-emerald-300' : 'text-gray-200'"
                class="inline ml-1 transition-colors ease-in duration-200"
              >
                <component :is="item.icon"></component>
              </span>
            </div>
          </template>
          <template #default>
            <p>
              {{ item.description }}
            </p>
          </template>
        </base-card>
      </div>
    </div>

    <div class="col-span-12 self-center">
      <app-main-pagination :actual="0"></app-main-pagination>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.base-card__layout--focus {
  @apply border-b-emerald-400 transition-all duration-300 ease-in-out;
}
</style>