<template>
  <div class="BuyList" v-if="this.$store.state.BuyCar.length > 0">
    <div class="top">
      <p>
        商品总价:<span>￥{{ $store.state.allPrice }}</span>
      </p>
      <div><span  @touchend="$router.back(-1)">取消购买</span> <span @touchend="submit">立即购买</span></div>
      <p>已购商品</p>
    </div>

    <div>
      <ListC
        v-for="item in $store.state.BuyCar"
        :key="item.id"
        :item="item"
      ></ListC>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/base.scss";
.top {
  background: white;
  padding: 1rem 1rem;
  > p:first-of-type {
    font-size: 1.5rem;
    > span {
      color: #e44623;
    }
  }
  > p:last-of-type {
    font-size: 1.8rem;
  }
  > div {
    width: 50%;
    margin: 1rem auto;
    display: grid;
    grid-gap: 0 1rem;
    grid-template-columns: 1fr 1fr;
    text-align: center;
    > span:first-of-type {
      width: 100%;
      height: 100%;
      font-size: 1rem;
      background-color: #969697;
      border-radius: 0.2rem;
    }
    > span:last-of-type {
      border-radius: 0.2rem;
      width: 100%;
      height: 100%;
      font-size: 1rem;
      background-color: #e54625;
    }
  }
}
</style>
<script>
import ListC from "@/components/ListC.vue";
export default {
  components: {
    ListC,
  },
  created() {
    let tiemer;
    clearTimeout(tiemer);
    if (this.$store.state.BuyCar.length <= 0) {
      alert("未购买商品");
      tiemer = setTimeout(() => {
        this.$router.push({ path: "/" });
      }, 1000);
    }
  },
  methods:
  {
    submit()
    {
      this.$http.post("/data/buy",{
         params:this.$store.state.BuyCar
      }).then(data=>{

             console.log(data)

      },err=>{

             console.log(err)

      })
    }
  }
};
</script>