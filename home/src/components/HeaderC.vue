<template>

  <div class="HeaderC">

    <router-link tag="div" class="left" to="/"></router-link>

    <!-- title可以写h1也可以使用title -->
    <router-link class="title" tag="div" to="/">

      <p v-if="title">{{ title }}</p>
      <slot v-else></slot>


    </router-link>

    <router-link tag="div" to="/home/" class="right">
      <!-- 使用有名字的插槽 -->
      <slot name="right"></slot>
    </router-link>


  </div>


</template>


<style scoped lang="scss">
@import "@/base.scss";

.HeaderC {



  width: 100%;
  height: $nav_height;
  // line-height: $nav_height;
  background-color: $navColor;

  color: #fff;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  grid-template-rows: 1fr;
  text-align: center;

  .title,
  .right,
  .left {
    place-self: center center;

  }

  .right {


      font-size: $nav_font_size;
    

  }

  .title {
 
      font-size: $nav_center_size;
    
  }

  .left {
    width: $nav_font_size*2*0.8;
    height: $nav_font_size*2*0.8;
    position: relative;


    &::before,
    &::after {
      position: absolute;
      left: -$nav_font_size*0.4;
      content: "";
      @include arrow($nav_font_size*0.8, #fff, "right")
    }

    &::after {
      left: -$nav_font_size*0.4+0.2rem;
      @include arrow($nav_font_size*0.8, $navColor, "right")
    }

  }


}
</style>


<script>
export default {
  // 接受属性
  props: ["title"],

  

}
</script>

