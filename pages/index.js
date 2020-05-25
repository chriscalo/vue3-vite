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
  if ("title" in to.meta) {
    document.title = to.meta.title;
  }
  next();
});
