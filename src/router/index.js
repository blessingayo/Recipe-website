import Vue from "vue";
import VueRouter from "vue-router";

import HomeView from "../views/HomeView.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },

  {
    path: "/explore1",
    name: "explore1",
    component: () => import("../views/ExploreFirst.vue"),
  },

  {
    path: "/explore2",
    name: "explore2",
    component: () => import("../views/ExploreSecond.vue"),
  },

  {
    path: "/explore3",
    name: "explore3",
    component: () => import("../views/ExploreThird.vue"),
  },

  {
    path: "/explore4",
    name: "explore4",
    component: () => import("../views/ExploreForth.vue"),
  },


  {
    path: "/explore5",
    name: "explore5",
    component: () => import("../views/ExploreFifth.vue"),
  },

  {
    path: "/explore6",
    name: "explore6",
    component: () => import("../views/ExploreSixth.vue"),
  },

  {
    path: "/addRecipes",
    name: "addRecipes",
    component: () => import("../views/AddYourRecipes.vue"),
  },

  {
    path:  '/recipe/:slug',
    name: "RecipeItem",
    component: () => import("../views/Recipe.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
