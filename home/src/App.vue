<template>
  <div id="app">
    <HeaderC>
      <!-- 定义默认插槽 -->
      <p>购物主页</p>

      <!-- 定义有名字的插槽 -->
      <template #right>
        <p>登陆</p>
      </template>
    </HeaderC>

    <router-view></router-view>
  </div>
</template>

<style lang="scss" >
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
}
html,
body {
  //全局样式
  background-color: #efefef;
  font-size: 4vw;
}
</style>

<script>
import HeaderC from "@/components/HeaderC.vue";

export default {
  components: {
    HeaderC,
  },
  created() {
    if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
     
      if (typeof window.orientation !== "undefined") {
        // 当前设备是移动设备
 console.log("移动设备");

      }
      else{

         alert("当前设备不是移动设备，请使用移动设备访问或者，使用浏览器调试模式");
      }
    } else {
      alert("当前设备不是移动设备，请使用移动设备访问或者，使用浏览器调试模式");
    }
  },
};
</script>