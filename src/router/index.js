import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import('@/pages/HomePage.vue'),
  },
  {
    path: "/free-trial",
    name: "FreeTrial",
    component: () => import("@/pages/FreeTrial.vue")
  },
  {
    path: "/faqs",
    name: "FaqsPage",
    component: () => import("@/pages/FaqsPage.vue")
  },
  {
    path: "/contact-us",
    name: "ContactUs",
    component: () => import("@/pages/ContactUs.vue")
  },
  {
    path: "/about-us",
    name: "AboutUs",
    component: () => import("@/pages/AboutUs.vue")
  },
  {
    path: "/privacy-policy",
    name: "PrivacyPolicy",
    component: () => import("@/pages/PrivacyPolicy.vue")
  },
  {
    path: "/terms",
    name: "TermsConditions",
    component: () => import("@/pages/TermsConditions.vue")
  },
  {
    path: "/legal-warning",
    name: "LegalWarning",
    component: () => import("@/pages/LegalWarning.vue")
  },
  {
    path: "/our-team/:profileId",
    name: "OurTeam",
    component: () => import("@/pages/OurTeam.vue")
  },
  {
    path: "/:serviceId",
    name: "ServiceDetailPage",
    component: () => import("@/pages/ServiceDetailPage.vue")
  },
  {
    path: "/blogs/:blogId",
    name: "BlogDetailPage",
    component: () => import("@/pages/BlogDetailPage.vue")
  },
  {
    path: "/blogs",
    name: "BlogsPage",
    component: () => import("@/pages/BlogsPage.vue")
  },
  {
    path: "/events",
    name: "EventsPage",
    component: () => import("@/pages/EventsPage.vue")
  },
  {
    path: "/events/:eventId",
    name: "EventDetailPage",
    component: () => import("@/pages/EventDetailPage.vue")
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});

export default router;
