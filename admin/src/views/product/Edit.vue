<!--<template>-->
<!--    <div>-->
<!--        <h1>this is Product Edit</h1>-->
<!--    </div>-->
<!--</template>-->
<script>
import Create from "./Create";

export default {
  // 使用混合
  mixins: [Create],
  // 写数据
  data() {
    return {
      // 修改数据请求地址
      submitUrl: "/admin/product/edit",
      title: "修改商品信息",
    };
  },
  // 当页面创建完成获取数据
  watch: {
    $route() {
      this.getData();
    },
  },
  methods: {
    getDate() {
      let { params } = this.$route;
      console.log(params);
      $http.get("/admin/product/get", { params }).then(
        ({ data }) => {
          console.log("数据", data);
          this.data = data.data;

          let imgname = data.data.img.split("/"); //分割url

          imgname = imgname[imgname.length - 1]; //通过最后一个数组下标获取图片名
          this.fileList.push({ name: imgname, url: data.data.img }); // 添加图片
          this.$set(this.data, id, params.id);
        },
        (err) => {
          this.$message.error("请求错误");
          // 返回上一个页面
          setTimeout(() => {
            this.$router.back();
          });
        }
      );
    },
  },
  created() {
    this.getDate();
  },
};
</script>