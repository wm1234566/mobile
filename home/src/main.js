import Vue from "vue";
import App from "./App.vue";
// import './registerServiceWorker'
import router from "./router";
import store from "./store";

// 引入axios
import axios from "axios";

// axios帮到http上面
Vue.prototype.$http = axios;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
