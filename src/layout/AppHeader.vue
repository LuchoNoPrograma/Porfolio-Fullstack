<script lang="ts" setup>
import AppHeaderListItem from "./AppHeaderListItem.vue";
import {useRouter} from "vue-router";

const router = useRouter();


const items: { iconClass: string, title: string, to: string }[] = [{
  iconClass: "icon-House",
  title: "Home",
  to: "/home",
}, {
  iconClass: "icon-User",
  title: "Resume",
  to: "/resume",
}, {
  iconClass: "icon-Bulb",
  title: "Portfolio",
  to: "/portfolio",
}, {
  iconClass: "icon-ClipboardText",
  title: "Blog",
  to: "/blog",
}, {
  iconClass: "icon-Imbox",
  title: "Contact",
  to: "/contact",
}]
</script>

<template>
  <header class="relative min-h-90 shadow-lg shadow-slate-800 mb-30 clearfix bg-cyan-900">
    <a class="hidden mx-2" href="javascript:void(0)">
      <i class="icofont-navigation-menu"></i>
      <div class="text-white transition-colors duration-300 ease-in-out hover:text-emerald-400">
        Menu
      </div>
    </a>
    <nav class="mainMenu grid-cols-12">
      <ul class="clearfix colspan-10 flex flex-wrap items-center gap-2 float-left">
        <app-header-list-item v-for="(item, index) in items" :key="index"
                              :icon-class="item.iconClass" :title="item.title" :to="item.to"
        ></app-header-list-item>
      </ul>
      <a v-ripple class="sidebarToggler col-span-2 flex justify-center items-center
        bg-slate-800
        transition-all duration-300 ease-in-out hover:bg-emerald-500 hover:text-white" href="#">
        <i class="icon icon-Menu text-4xl"></i>
      </a>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  min-height: 90px;
}

ul {
  li {
    min-width: 120px;
  }
}

.sidebarToggler {
  float: right;
  width: 90px;
  height: 90px;
  position: relative
}
</style>