import Vue from "vue";
import App from "@/App";
import "@/registerServiceWorker";
import router from "@/router";
import store from "@/store";
import { message } from "ant-design-vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
Vue.use(Antd);
Vue.prototype.$message = message;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
