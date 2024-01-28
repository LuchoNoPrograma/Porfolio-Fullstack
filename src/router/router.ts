import {createRouter, createWebHistory} from "vue-router";
import {MainRoutes} from "./MainRoutes.ts";

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: MainRoutes,
  scrollBehavior(to, from, savedPosition) {
    return {el : '#page-top', top: 0, behavior: 'smooth'}
  }
})

