import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Main from "@/views/Main.vue";

Vue.use(VueRouter);

const routes = [
  // 列表页
  {
    path: "/",
    name: "home",
    component: Home,
    // 下面右边的都是子路由
    children: [
      // 商品模块
      {
        path: "product/create",
        component: () => import("@/views/product/Create.vue"),
        // name: "home",
      },
      {
        path: "product/edit/:id",
        component: () => import("@/views/product/Edit.vue"),
        // name: "home",
      },
      {
        path: "product/list/:id",
        component: () => import("@/views/product/List.vue"),
        // name: "home",
        //props:true
        // 路由参数传递给 List组件
        props:route=>({query:route.query,id:parseInt(route.params.id)})

      },
      // 用户模块
      {
        path: "user/list/:id",
        component: () => import("@/views/user/List.vue"),
        // name: "home",
      },
      {
        path: "user/edit/:id",
        component: () => import("@/views/user/Edit.vue"),
        // name: "home",
      },
      {
        path: "user/create",
        component: () => import("@/views/user/Create.vue"),
        // name: "home",
      },
      // 首页模块
      {
        path: "home/ads/:id",
        component: () => import("@/views/home/Ads.vue"),
        // name: "home",
      },
      {
        path: "home/types/:id",
        component: () => import("@/views/home/Types.vue"),
        // name: "home",
      },

      {
        path: "*",
        component: Main,
      },
    ],
  },
];

export default new VueRouter({
  mode: "hash",
  routes,
});
