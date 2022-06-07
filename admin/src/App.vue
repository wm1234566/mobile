<template>
  <div id="app">
    <!-- 用用户名，显示首页，没有用户名显示登陆页面 -->


        <!-- <Home></Home>
         -->

<!--         <router-view> </router-view>-->

<router-view v-if="$store.state.userName"></router-view>
    <Login v-else></Login>

  </div>
</template>

<style lang="scss">
@import '@/base.scss';

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
  background-color: #efefef;
  height: 100%;
}
#app
{
  height: 100%;
}
</style>

<script>
import Login from "@/views/Login.vue";
import  Home from "@/views/Home.vue";
export default {
  data() {
    return {
      msg: "xxx",
    };
  },
  components: {
    Login,
    Home
  },
  // 这组件加载判断用户是否登陆过，刷新的时候，请求服务器
  created()
  {
      // 发送一异步消息,查询有没有登陆
      this.$store.dispatch("userInfo")
    console.log("app.vue实例",this)
  }

};
</script>
