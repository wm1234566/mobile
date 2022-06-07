<style lang="scss" scoped>
.Buy {
  position: fixed;
  width: 100%;
  bottom: 0rem;
}

.BuyBar {
  width: 100%;

  height: 4rem;
  display: flex;
  flex-flow: row nowrap;
  text-align: center;
  color: white;
  span {
    line-height: 4rem;
  }
  > div:first-of-type {
    height: 100%;

    flex: 8 8 auto;
    background-color: #474b4f;
  }
  > div:last-of-type {
    height: 100%;
    flex: 2 2 auto;
    align-self: center;
    background-color: #e13f4b;
  }
}
</style>
<template>
  <div class="Buy">

    <!-- 点击黑色的显示，整个BuyList循环的结果， -->
    <div v-show="flage">
      <ListC
        v-for="item in $store.state.BuyCar"
        :key="item.id"
        :item="item"
      ></ListC>
    </div>
    <div class="BuyBar">
      <div @touchend="flage = flage ? false : true">
        <span>{{ $store.state.allPrice }}元</span>
      </div>

      <!-- <router-link tag="div"
        @touchend="warning"
        :to="
          $store.state.BuyCar.length <= 0
            ? { path: $route.fullPath }
            : { path: '/buy/' }
        "
      >
        <span>选好了</span>
      </router-link> -->

      <div @touchend="warning">
        <span>选好了</span>
      </div>
    </div>
  </div>
</template>

<script>
import ListC from "@/components/ListC.vue";
export default {
  components: {
    ListC,
  },
  data() {
    return {
      flage: false,
      data: [],
    };
  },
  created() {},

  methods: {
    warning() {
      //再更新一下总价
      this.$store.commit("allPrice");
      if (this.$store.state.BuyCar.length <= 0) {
        alert("没有选择商品");
      } else {

        this.$router.push({ path: "/buy/" });
      }
    },
  },
  watch: {
   
  },
};
</script>