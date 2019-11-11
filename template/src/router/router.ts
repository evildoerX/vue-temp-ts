/**
 * meta 可配置参数
 * @param {boolean} icon 页面icon
 * @param {boolean} keepAlive 是否缓存页面
 * @param {string} title 页面标题
 */
export const appRouter = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue")
  }
];

export const routes = [...appRouter];
