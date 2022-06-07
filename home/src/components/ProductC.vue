<template>
  <router-link  :to="'/detail/'+data.id" tag="div" :class="['product-' + data.id, 'product']">
    <img :src="'/img/list/' + data.img" alt="" />
    <div class="right">
      <p>{{ data.title }}</p>
      <div>
        <span class="price">{{ data.price }}元</span>
        <span class="Oprice">门市价:{{ data.originPrice }}元</span>
        <span class="sales">销量:{{ data.sales }}</span>
      </div>
    </div>
  </router-link>
</template>

<style lang="scss" scoped>

@import "@/base.scss";
.product {
  width: 100%;
  padding: 0.4rem 0;
  background-color: white;
  display: grid;
  grid-template-columns: 2fr 5fr;
  grid-template-rows: 1fr;
  grid-gap: 0 0.5rem;
  border-top:0.2rem solid #efefef;

  > img {
    width: 100%;
    height: 100%;
  }
  .right {
    position: relative;
    font-weight: bold;
    overflow: hidden;

    > div {
        width: 100%;
      font-weight: normal;
      font-size: 0.5rem;
      position: absolute;
      bottom: 0;

    }
  }
  .price{
       color: $navColor;
  }
  .Oprice {
     margin-left: 0.5rem;
   
  }
  .sales
  {
     float:right;

  }

}
</style>

<script>
export default {
  props: ["data"],
};
</script>
