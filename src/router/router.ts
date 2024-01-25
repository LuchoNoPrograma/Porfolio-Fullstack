import {createRouter, createWebHistory} from "vue-router";
import {MainRoutes} from "./MainRoutes.ts";

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: MainRoutes
})

