import { createRouter, createWebHistory } from "vue-router";
import { route as indexRoute } from "./index.vue";
import { routes as aboutRoutes } from "./about/";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    indexRoute,
    ...aboutRoutes,
  ],
});

router.beforeEach((to, from, next) => {
  document.title = "title" in to.meta ? to.meta.title : "";
  next();
});
