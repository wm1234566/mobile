import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    search: "",
    BuyCar: [],
    allPrice: 0, // 总价格
  },
  getters: {},
  mutations: {
    // 更新搜索词
    updateSearch(state, e) {
      state.search = e.target.value;
      // console.log("dfsdf", state, "x", e.target.value);
      // 根据数据请求 写入data
    },

    // 添加一个商品
    addShop(state, e) {
      console.log("添加一个商品", this, state);

      if (state.BuyCar.length > 0) {
        // 数组不是空的
        let is = state.BuyCar.every((item) => {
          if (e.id == item.id) {
            return false;
          } else {
            return true;
          }
        });
        if (is) {
          // 如果有商品都不同，直接添加
          state.BuyCar.push({ ...e, count: 1 });
        } else {
          // 是相同商品

          state.BuyCar.map((item) => {
            if (e.id == item.id) {
              item.count++;
              console.log("执行了吗", typeof item.count, item);
              return item;
            } else {
              return item;
            }
          });
        }
      } else {
        state.BuyCar = [];
        state.BuyCar.push({ ...e, count: 1 });
      }

      // 更新总结价格
      this.commit("allPrice");
    },
    // 删除一个商品
    reduceShop(state, e) {
      // 是相同商品
      console.log("删除一个商品");
      state.BuyCar.map((item, index) => {
        if (e.id == item.id) {
          item.count -= 1;
          if (item.count <= 0) {
            state.BuyCar.splice(index, 1);
          } else {
            return item;
          }
        } else {
          return item;
        }
      });
      // 更新总结价格
      this.commit("allPrice");
    },
    // 计算总价格
    allPrice(state) {
      let price = 0;
      state.BuyCar.forEach((element) => {
        price += element.price * element.count;
      });
      console.log(price);
      state.allPrice = parseFloat(price.toFixed(2));
    },
  },

  actions: {},
  modules: {},
});
