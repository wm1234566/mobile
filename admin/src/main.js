import  Vue from "vue";
import  App from "@/App.vue";
import  store from "@/store/index.js";
import  router from "@/router/index.js";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";



// 引入富文本插件
import VueQuillEditor from "vue-quill-editor"

// 引入对应的css
import "quill/dist/quill.core.css";
import "quill/dist/quill.bubble.css"
import "quill/dist/quill.snow.css"


// 引入axios
import axios from "axios";


// 将axis放在原型上

Vue.prototype.$http = axios;
Vue.use(ElementUI);
Vue.use(VueQuillEditor)
let app=new Vue({
  store,
  router,
  render: (h) => h(App), // 将模板变为虚拟Vnode
});
console.log("主组件:",app)

    app.$mount("#app");
