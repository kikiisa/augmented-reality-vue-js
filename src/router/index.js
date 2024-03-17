import { createWebHistory, createRouter } from "vue-router";
import Homeview from "../views/home/index.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => Homeview,
    },
  ],
});

export default router
