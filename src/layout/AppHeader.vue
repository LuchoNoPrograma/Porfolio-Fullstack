<script lang="ts" setup>
import AppHeaderLink from "./AppHeaderLink.vue";
import { useRouter } from "vue-router";
import { ref } from "vue";
import { itemsNavigation } from "../data/ItemNavigation.ts";

const router = useRouter();

const menuResponsiveExpanded = ref<boolean>(false);
const expandMenuResponsive = () => {
  menuResponsiveExpanded.value = !menuResponsiveExpanded.value;
};
</script>

<template>
  <header
    id="app-header"
    class="shadow-lg shadow-slate-800 bg-cyan-900 rounded-xl min-h-12"
  >
    <div>
      <nav class="grid grid-cols-12">
        <a
          id="nav__menu-toggle"
          v-ripple
          class="hidden bg-emerald-400 text-2xl text-white transition-colors duration-300 ease-in-out h-12"
          href="javascript:void(0)"
          @click="expandMenuResponsive"
        >
          <i class="icofont-navigation-menu"></i> <span>Menu</span>
        </a>
        <ul
          class="col-span-12 flex flex-wrap items-center justify-center gap-4 nav__menu-list"
        >
          <li
            v-for="(item, index) in itemsNavigation"
            :key="index"
            class="inline-block w-auto text-center rounded-xl nav__menu-list-item"
          >
            <app-header-link
              :icon-class="item?.iconClass"
              :title="item?.title"
              :to="item?.to"
            ></app-header-link>
          </li>
        </ul>
      </nav>
      <div
        class="nav__menu-toggle-wrapper sticky left-0 -bottom-48 bg-slate-800 w-full z-10"
      >
        <ul
          :class="menuResponsiveExpanded ? 'expanded' : 'collapsed'"
          class="gap-2 transition-all duration-300 ease-in overflow-hidden"
        >
          <li
            v-for="(item, index) in itemsNavigation"
            :key="index"
            class="w-auto text-center rounded-xl nav__menu-list-item"
          >
            <app-header-link
              :icon-class="item?.iconClass"
              :title="item?.title"
              :to="item?.to"
              position-icon="left"
              @click="menuResponsiveExpanded = false"
            ></app-header-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
#app-header {
  @apply sticky top-0 z-20;
}

@media (max-width: 800px) {
  #nav__menu-toggle {
    @apply col-span-12 flex justify-center items-center gap-2 rounded-lg;
    max-height: 100px;
    transition: all 300ms ease-in;
  }

  .nav__menu-list {
    @apply hidden top-0 left-0 w-full h-full flex-col items-center justify-start z-30;
  }
}


.nav__menu-toggle-wrapper {
  .expanded {
    @apply border border-gray-200;
    max-height: 600px;
  }

  .collapsed {
    max-height: 0;
  }
}

</style>