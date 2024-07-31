import { createRouter, createWebHistory } from "vue-router";
import NotFound from "@/views/NotFoundPage.vue";
import Home from "@/views/Home.vue";
import Page1 from "@/views/Page1.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/page1",
      name: "page1",
      component: Page1,
    },
    {
      path: "/:pathMatch(.*)*",
      component: NotFound,
    },
  ],
});

export default router;
