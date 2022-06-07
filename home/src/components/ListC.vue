<style lang="scss" scoped>
.list-item {
  font-size: 1rem;
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 2fr;
  grid-template-rows: 1fr;
  background: white;
  border-top: 0.4rem solid gray;
  place-items: center center;

  > img {
    width: 100%;
  }
  > div > svg {
    vertical-align: middle;
    width: 1.5rem;
    height: 1.5rem;
  }
}
</style>
<template>
  <div  class="list-item" >
    <img :src="'/img/list/' + item.src" alt="" />
    <p>{{ item.title }}</p>
    <p>{{ item.price }}￥</p>
    <div>
      <svg
       @touchend="$store.commit('reduceShop',item)"
        t="1651922528997"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="766"
        width="200"
        height="200"
      >
        <path
          d="M512 853.333333c-187.733333 0-341.333333-153.6-341.333333-341.333333s153.6-341.333333 341.333333-341.333333 341.333333 153.6 341.333333 341.333333-153.6 341.333333-341.333333 341.333333z m0-85.333333c140.8 0 256-115.2 256-256s-115.2-256-256-256-256 115.2-256 256 115.2 256 256 256z m-170.666667-298.666667h341.333334v85.333334H341.333333v-85.333334z"
          fill="#444444"
          p-id="767"
        ></path>
      </svg>
      <span>{{ item.count }}</span>
      <svg
        @touchend="$store.commit('addShop',item)"
        t="1651922544516"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="906"
        width="200"
        height="200"
      >
        <path
          d="M469.333333 469.333333V341.333333h85.333334v128h128v85.333334h-128v128h-85.333334v-128H341.333333v-85.333334h128z m42.666667 384c-187.733333 0-341.333333-153.6-341.333333-341.333333s153.6-341.333333 341.333333-341.333333 341.333333 153.6 341.333333 341.333333-153.6 341.333333-341.333333 341.333333z m0-85.333333c140.8 0 256-115.2 256-256s-115.2-256-256-256-256 115.2-256 256 115.2 256 256 256z"
          fill="#444444"
          p-id="907"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
  created() {
    console.log("listBar", this.data);
  },
  mounted()
  {
       console.log("listBar", this.data,this);
  }
};
</script>