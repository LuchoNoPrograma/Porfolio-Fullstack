import {createRouter, createWebHistory, Router} from "vue-router";
import {MainRoutes} from "./MainRoutes.ts";

export const router: Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: MainRoutes,
  scrollBehavior(to, from, savedPosition) {
    return {el : '#page-top', top: 0, behavior: 'smooth'}
  }
})

