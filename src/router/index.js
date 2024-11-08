import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import('@/pages/HomePage.vue'),
  },
  {
    path: "/plan/:priceId/:planId",
    name: "PricePlanDetailPage",
    component: () => import('@/pages/PricePlanDetailPage.vue')
  },
  {
    path: "/free-trial",
    name: "free-trial",
    component: () => import("@/pages/FreeTrial.vue")
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
