import Vue from "vue";
import App from "@/App.vue";
import store from "@/store/index.js";
import router from "@/router/index.js";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

// 引入富文本插件
import VueQuillEditor from "vue-quill-editor";

// 引入对应的css
import "quill/dist/quill.core.css";
import "quill/dist/quill.bubble.css";
import "quill/dist/quill.snow.css";

// 引入axios
import axios from "axios";

// 使用由库提供的配置的默认值来创建实例
// 此时超时配置的默认值是 `0`
var instance = axios.create({
  timeout: 10000, // 请求超时时间
});

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    console.log("响应器数据", response);

    // 响应的token就存储
    if (response.data.token) {
      localStorage.token = response.data.token;
    }

    return response;
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);
// 请求拦截器

instance.interceptors.request.use(
  (config) => {
    // 默认发送头
    // axios.defaults.headers.common["Authorization"] =
    config.headers["Authorization"] =
      "Bearer " + localStorage.getItem("token") || "";

    return config;
  },
  (err) => {
    // 请求未成功发出，如：没有网络...
    return Promise.reject(err);
  }
);

window.$http = instance;
// 将axis放在原型上
// Vue.prototype.$http = instance;
// Vue.prototype.$http = axios;

Vue.use(ElementUI);
Vue.use(VueQuillEditor);
let app = new Vue({
  store,
  router,
  render: (h) => h(App), // 将模板变为虚拟Vnode
});
console.log("主组件:", app);

app.$mount("#app");
