/*
 * @Descripttion:
 * @version:
 * @Author: JnannJ
 * @Date: 2023-10-20 18:42:25
 * @LastEditors: JnannJ
 * @LastEditTime: 2023-10-22 19:28:54
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../layout/home.vue";

const About = { template: "<div>Abosdsdsdut</div>" };
const routes:Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/context",
  },
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        meta: {
          title: "系统首页",
        },
        component: () => import("../views/dashboard.vue"),
      },
      {
        path: "/context",
        name: "context",
        meta: {
          title: "context",
        },
        component: () => import("../views/context.vue"),
      },
      { path: "/about", component: About },
    ],
  },
  
];

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
});
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | 湫`;
  const role = (localStorage.getItem('ms_username'))?"admin":"QJJ";
  console.log('to :>> ', to);
  if (!role && to.path !== '/login') {
      next('/login');
  }  else {
      next();
  }
});
// 现在，应用已经启动了！

export default router;
