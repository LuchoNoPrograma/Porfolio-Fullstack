<script lang="ts" setup>
import AppProfile from "./layout/AppProfile.vue";
import AppHeader from "./layout/AppHeader.vue";
import AppSidebar from "./layout/AppSidebar.vue";
import AppFooter from "./layout/AppFooter.vue";
import AppMain from "./layout/AppMain.vue";
</script>

<template>
  <div class="container container-md mx-auto px-12">
    <div class="grid grid-cols-12 gap-8 w-full">
      <div class="lg:col-span-3 md:col-span-5 sm:col-span-12 col-span-12">
        <app-profile></app-profile>
      </div>
      <div class="lg:col-span-9 md:col-span-7 sm:col-span-12 col-span-12 w-full">
        <app-header></app-header>
        <div class="mt-8  shadow-md shadow-black">
          <app-main></app-main>
          <app-footer></app-footer>
        </div>
      </div>
    </div>
  </div>
  <app-sidebar></app-sidebar>
</template>

<style scoped>

</style>
