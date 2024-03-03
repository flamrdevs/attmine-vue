import { createRouter, createWebHashHistory } from "vue-router";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: () => import("~/routes/index.page.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      component: () => import("~/routes/404.page.vue"),
    },
  ],
});
