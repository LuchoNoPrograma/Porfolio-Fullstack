<script lang="ts" setup>
import AppProfile from "./layout/AppProfile.vue";
import AppHeader from "./layout/AppHeader.vue";
import AppFooter from "./layout/AppFooter.vue";
import AppMain from "./layout/AppMain.vue";
import { ArrowUpIcon } from "vue-tabler-icons";

</script>

<template>
  <div
    class="container container-md mx-auto md:px-4"
    style="height: 100vh"
  >
    <div class="grid grid-cols-12 gap-8 w-full">
      <div class="lg:col-span-3 md:col-span-5 sm:col-span-12 col-span-12">
        <app-profile></app-profile>
      </div>
      <div
        class="lg:col-span-9 md:col-span-7 sm:col-span-12 col-span-12 w-full"
      >
        <div id="page-top"></div>
        <app-header></app-header>
        <div class="mt-8 shadow-md shadow-black">
          <app-main></app-main>
          <app-footer></app-footer>
        </div>
      </div>
    </div>
  </div>

  <a
    id="btn--back-to-top"
    class="p-2 bg-emerald-400 rounded-md fixed text-md text-slate-800 cursor-pointer flex items-center"
    href="#app-header"
  >
    <arrow-up-icon></arrow-up-icon>
  </a>
</template>

<style>
#btn--back-to-top {
  bottom: 8%;
  right: 2%;
}
</style>