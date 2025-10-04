export const appRoutes = [
  {
    path: "/",
    name: "home page",
    component: () => import("@/core/views/homePage.vue"),
    meta: {
      layout: "app",
      requiresAuth: false,
    },
  },
  {
    path: "/booking",
    name: "booking",
    component: () => import("@/core/views/booking.vue"),
    meta: {
      layout: "app",
      requiresAuth: false,
    },
  },
  {
    path: "/smart-homes",
    name: "smart homes",
    component: () => import("@/core/views/smartHomes.vue"),
    meta: {
      layout: "app",
      requiresAuth: false,
    },
  },
  {
    path: "/projects/:project",
    name: "project",
    component: () => import("@/core/views/ProjectPage.vue"),
    meta: {
      layout: "app",
      requiresAuth: false,
    },
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("@/core/views/contact.vue"),
    meta: {
      layout: "app",
      requiresAuth: false,
    },
  },

  {
    path: "/:pathMatch(.*)*", // Vue 3 syntax for catch-all
    redirect: "/",
  },
];
