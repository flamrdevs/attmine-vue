import { createRouter, createWebHashHistory } from "vue-router";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: () => import("~/routes/index.page.vue"),
    },
    {
      path: "/dash",
      component: () => import("~/routes/dash.layout.vue"),
      children: [
        {
          path: "",
          component: () => import("~/routes/dash.index.page.vue"),
        },
      ],
    },
    {
      path: "/components",
      component: () => import("~/routes/components.page.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      component: () => import("~/routes/404.page.vue"),
    },
  ],
});
