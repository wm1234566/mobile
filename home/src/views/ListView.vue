<template>
  <div class="list">
    <SearchC placeholder="搜索list页面" :search="showSearch"></SearchC>

    <ul class="orders">
      <!-- 绑定:data-id 属性麻烦，在target attribute中获取 -->
      <!-- <li v-for="item in orders" :key="item.id"  @touchend="orderList" :data-id="item.id" >{{ item.text }}</li> -->
      <li
        v-for="item in orders"
        :key="item.id"
        @touchend="orderList($event, item.id)"
        :class="item.sort ? 'down' : 'up'"
      >
        {{ item.text }}
      </li>
    </ul>

    <ProductC v-for="item in data" :key="item.id" :data="item"></ProductC>

    <!--
    我的想法
  <ProductC v-for="item in others" :key="item.id" :data="item" v-show="other" ></ProductC>

  <div v-if="others.length > 0" class="di" @touchend="other=!other" v-show="!other">
      <span>显示其他{{ others.length }}条商品数据</span
      ><span class="arrow"></span>
    </div>
     -->
    <!-- 会出现延迟穿透 -->
    <!-- <div v-if="others.length > 0" class="di" @toucstart="other" > -->
    <!-- 先判断点击在隐藏 -->
    <div @touchend="other" v-if="others.length && sosuo" class="di">
      <span>显示其他{{ others.length }}条商品数据</span
      ><span class="arrow"></span>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/base.scss";
.orders {
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-template-rows: 1fr;
  font-size: 0.8rem;
  li {
    text-align: center;
    background-color: white;
    padding: 1rem 0;

    border-bottom: 0.2rem solid #efefef;
    border-right: 0.2rem solid #efefef;
    &:last-of-type {
      border-right: none;
    }
    position: relative;
  }
  // 降序
  .up::after {
    position: absolute;
    top: 1.3rem;
    right: 0.4rem;
    content: ""; //不写没有
    @include arrow(0.4rem);
  }
  // 升序
  .down::after {
    position: absolute;

    right: 0.4rem;
    top: 0.9rem;
    content: ""; //不写没有
    @include arrow(0.4rem, #000, bottom);
  }
}
.di {
  // width: 1rem;

  height: 3rem;
  background-color: white;
  border-bottom: 0.2rem solid #efefef;
  border-top: 0.2rem solid #efefef;
  line-height: 3rem;
  text-align: center;
  color: $navColor;

  .arrow {
    position: relative;
    top: 0.3rem;
    left: 0.2rem;

    &::before {
      position: absolute;
      top: 0;
      z-index: 20;

      content: "";
      @include arrow(0.5rem, white);
    }
    &::after {
      position: absolute;
      top: 0.2rem;
      content: "";
      @include arrow(0.5rem, $navColor);
    }
  }
}
</style>

<script>
// 导入search
import SearchC from "@/components/SearchC.vue";
// 引入商品组件
import ProductC from "@/components/ProductC.vue";

export default {
  data() {
    return {
      data: [], // 前三个数据
      others: [], // 其他未显示后面的数据
      orders: [
        { text: "价格排序", id: "price", sort: true },
        { text: "销量排序", id: "sales", sort: true },
        { text: "好评排序", id: "evaluate", sort: true },
        { text: "优惠排序", id: "discount", sort: true },
      ],
      sosuo: true,
    };
  },

  created() {
    // 获取数据
    console.log("进入到list的路由数据", this.$route); // 存储者当前页面的路由信息
    this.getData();
  },
  components: {
    SearchC,
    ProductC,
  },
  // 监听搜索词的变化
  watch: {
    // 路由改变的时候刷新页面
    $route() {
      console.log("刷新到list的路由数据", this.$route); // 存储者当前页面的路由信息
      this.getData();
    },

    // // 监听store中的数据
    //  "$store.state.search" (newValue,oldValue)
    //  {
    //     console.log(newValue,1111,oldValue);
    //  }
    search(newVal) {
      // 是搜索
      this.sosuo = false;
      this.data = this.allData.filter((item) => {
        return item.title.includes(newVal);
      });
      // console.log(newVal);
    },
  },
  // 代理store中的数据

  computed: {
    search() {
      return this.$store.state.search;
    },

    //前端实现搜索，就是对数组过滤
  },

  methods: {
    // 定义获取数据的共方法，可以复用
    getData() {
      let { params } = this.$route;
      this.$http
        .get("/data/list", {
          // 第一个参数是一个对象传递query数据
          params,
        })
        .then(
          ({ data }) => {
            this.allData = data;
            this.data = data.slice(0, 3);
            this.others = data.slice(3);
          },
          (err) => console.log(err)
        );
    },
    // 展示搜索类
    showSearch(e) {
      ///console.log("xdfdfs",e.target.value);

      this.$store.commit("updateSearch", e);
    },
    // 点击按钮以后，将剩余数据添加到上面列表，排序的时候直接排序上面的即可
    other() {
      this.data = this.data.concat(this.others); // 拼接，这方法是vue改写过的
      // 清空ohters
      this.others = [];
      console.log("展开全部数据的字段", this.data);
    },

    // 点击排序

    orderList(e, id) {
      // 服务端排序
      /*
     this.$http.get("/data/order",{
     id,
     desc:-1,
     type:this.$route.params.id,
     }).then(({data})=>{

           console.log("数据",data)
     })
           */

      // 本地排序
      this.orders = this.orders.map((item) => {
        // 如果是当前id
        if (item.id === id) {
          item.sort = !item.sort; // 修改标记

          if (item.sort === true) {
            // 判断是升序还是降序

            if (id === "discount") {
              this.data.sort((a, b) => {
                // sort会改变数组
                // 升序:
                return (
                  a["originPrice"] -
                  a["price"] -
                  (b["originPrice"] - b["price"])
                );
              });
            } else {
              this.data.sort((a, b) => {
                // sort会改变数组
                // 升序:
                return a[id] - b[id]; // 升序  从小到大 id不一样
              });
            }
          } else {
            if (id === "discount") {
              this.data.sort((a, b) => {
                // sort会改变数组
                // 降序:
                return (
                  b["originPrice"] -
                  b["price"] -
                  (a["originPrice"] - a["price"])
                );
              });
            } else {
              this.data.sort((a, b) => {
                // sort会改变数组
                // 降序:
                return b[id] - a[id]; // 升序  从小到大 id不一样 // 升序  从小到大 id不一样
              });
            }
          }
        }
        // 不管是不是当前id正常返回修改后的item对象
        return item;
      });
    },
    // 定义公共方法
  },
};
</script>
