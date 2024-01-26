import {createRouter, createWebHistory} from "vue-router";
import {MainRoutes} from "./MainRoutes.ts";

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: MainRoutes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {left: 0, top: 0}
    }

  }
})

