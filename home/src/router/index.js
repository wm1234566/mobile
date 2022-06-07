import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/HomeView.vue";
Vue.use(VueRouter);

const routes = [
  // 列表页
  {
    path: "/list/:id",
    name: "list",
    component: () =>
      import(/* webpackChunkName: "list" */ "../views/ListView.vue"),
  },

  // 东西的详情页
  {
    path: "/detail/:id",
    name: "detail",

    component: () =>
      import(/* webpackChunkName: "detail" */ "../views/DetailView.vue"),
  },
  // 东西的详情页
  {
    path: "/buy/",
    name: "buy",

    component: () =>
      import(/* webpackChunkName: "buy" */ "../views/BuyView.vue"),
  },
  // 东西的详情页
  {
    path: "*",
    name: "home",
    component: Home,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
