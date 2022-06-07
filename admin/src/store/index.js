// 引入vue和vuex

import Vue from "vue";
import Vuex from "vuex";

// store不是组件不能继承axios
import axios from "axios";

// 引入ui
import { Message } from "element-ui";

// 实例化
Vue.use(Vuex);

export default new Vuex.Store({
  // 严格模式
  strict: true,
  state: {
    userName: "",
  },
  getters: {},
  mutations: {
    updateUserName(state, userName) {
      state.userName = userName;
    },
  },
  actions: {
    login(store, data) {
      // 发送请求
      axios.post("/login", data).then(
        ({ data }) => {
          console.log("返回数据", data);
          if (data.code == 1) {
            //存储数据
            store.commit("updateUserName", data.data.username);
          } else {
            Message({
              message: data.msg,
              type: "error",
            });
          }
        },
        (err) => {
          console.log("错误数据", err);
        }
      );
    },
    userInfo(store) {
      axios.post("/admin/userinfo").then(
        ({ data }) => {


          // 存储用户信息
          if (data.error === 0) {
            store.commit("updateUserName", data.username);
          }else
          {
            store.commit("updateUserName", "");
          }
        },
        (err) => {
          console.log(err)
        }
      );
    },
  },
});
