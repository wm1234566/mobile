<template>
  <div class="Home">
    <ul class="type-list">
      <router-link
        tag="li"
        :to="'/list/' + item.id"
        v-for="item in types"
        :key="item.id"
      >
        <img :src="'/img/icon/' + item.img" :alt="item.text" />
        <p>{{ item.text }}</p>
      </router-link>
    </ul>

    <ul class="ads">
      <router-link
        tag="li"
        :to="'/detail/' + item.id"
        v-for="(item, index) in ad"
        :key="item.id"
      >
        <p :class="'color-' + index">{{ item.title }}</p>
        <p>{{ item.description }}</p>
        <img :src="'/img/ad/' + item.url" :alt="item.title" />
      </router-link>
    </ul>

    <div class="guess-title">
      <p>猜你喜欢</p>
        <ProductC v-for="item in list" :key="item.id" :data="item"></ProductC>
    </div>





  </div>
</template>

<style lang="scss" scoped>
@import "@/base.scss";

.type-list {
  font-size: 0.8rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-template-rows: 1fr 1fr;
  grid-gap: 1rem 0;
  place-items: center center;
  text-align: center;
  background-color: white;

  & img {
    width: 3rem;
    // height: 3rem;
  }
  & p {
    margin-top: 0.4rem;
  }
}

.ads {
  margin-top: 0.8rem;
  margin-bottom: 0.8rem;
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-auto-rows: 1fr;
  grid-gap: 0px 0.2rem;
  & li {
    background-color: white;
    font-size: 0.5rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    text-align: center;
    font-size: 1rem;
    p:last-of-type {
      font-size: 0.7rem;
      padding-top: 0.8rem;
      padding-bottom: 0.8rem;
    }
    img {
      width: 5rem;
      //  height: 3rem;
    }
  }
  // 索引
  $index: 0;
  // 循环枚举 不要是字符串
  @each $c in red, green, purple {
    // 创建样式
    .color-#{$index} {
      color: $c;
    }
    $index: $index + 1;
  }


}

  .guess-title
  {
    padding: 0 0.5rem;
    background-color: white;
    >p{
      font-size: $nav_center_size;
      // line-height: $nav_center_size*2.1;
      padding: $nav_center_size/2 0;
    }

  }
</style>

<script>
// 引入商品组件
import ProductC from "@/components/ProductC.vue";

export default {
  // 数据
  data() {
    return {
      types: [
        { id: 1, text: "美食", img: "01.png" },
        { id: 2, text: "电影", img: "02.png" },
        { id: 3, text: "酒店", img: "03.png" },
        { id: 4, text: "休闲", img: "04.png" },
        { id: 5, text: "外卖", img: "05.png" },
        { id: 6, text: "KTV", img: "06.png" },
        { id: 7, text: "丽人", img: "07.png" },
        { id: 8, text: "小吃", img: "08.png" },
        { id: 9, text: "周边游", img: "09.png" },
        { id: 10, text: "火车票", img: "10.png" },
      ],
      // 初始化
      ad: [],
      list: [],
    };
  },

  components: {
    ProductC,
  },

  // 组件创建完成请求
  created() {
    // 获取数据
    this.$http.get("/data/home").then(
      ({ data }) => {
        this.ad = data.ad;
        this.list = data.list;
      },
      (err) => console.log(err)
    );
  },
};
</script>
