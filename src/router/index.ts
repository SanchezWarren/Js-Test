import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    alias: "/index",
    name: "index",
    component: () => import("../pages/Index.vue"),
  },
  {
    path: "/products",
    name: "products",
    component: () => import("../pages/ProductsList.vue"),
  },
  {
    path: "/products/:id",
    name: "product-details",
    component: () => import("../pages/ProductDetails.vue"),
    props: castRouteParams,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../pages/About.vue"),
    props: castRouteParams,
  },
];

//casting String to Number
function castRouteParams(route: any) {
  return {
    id: Number(route.params.id),
  };
}

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
