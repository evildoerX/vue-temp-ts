import Vue from "vue";
import Router from "vue-router";
import { routes } from "./router";
Vue.use(Router);

const router = new Router({
  routes
});

// 登陆页面路由 name
const LOGIN_PAGE_NAME = "login";

// 跳转之前
router.beforeEach((to, from, next) => {
  next();
});

// 跳转之后
router.afterEach(to => {
  //
});

export default router;
