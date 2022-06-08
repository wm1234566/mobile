<template>
  <div class="page-product-lsit">
    <h1>商品列表</h1>

    <!--    商品列表-->
    <div class="products">
      <el-card v-for="item in list" :key="item.id">
        <img width="100%" :src="item.img" class="image" />
        <p class="title">{{ item.title }}</p>
        <div class="center">
          <span>￥{{ item.price }}</span>
          <!--          <span>{{ types[item.type].text}}</span>-->
          <span>{{ getType(item.type) }}</span>
        </div>
        <p class="sales">已销售{{ item.sales }}份</p>

        <el-row>
          <!--          <el-button size="mini" type="success" >修改</el-button>-->
          <router-link
            :to="'/product/edit/' + item.id"
            tag="el-button"
            type="button"
            class="el-button--success el-button--mini"
            >修改
          </router-link>
          <el-button size="mini" type="danger" @click="del($event, item)"
            >删除</el-button
          >
        </el-row>
      </el-card>
    </div>

    <!--    定义按钮-->
    <div class="list-btns">
      <el-row>
        <router-link
          tag="el-button"
          :to="'/product/list/' + (id > 1 ? id - 1 : 1)"
          type="primary"
          round
          >&larr; 上一页</router-link
        >
        <router-link
          tag="el-button"
          :to="'/product/list/' + (id + 1)"
          type="primary"
          round
          >下一页 &rarr;</router-link
        >
        <!--        <router-link tag="el-button" :to="'/product/list/'+(parseInt($route.params.id)>1?parseInt($route.params.id)-1:1)" type="primary" round>&larr; 上一页</router-link>-->
        <!--        <router-link tag="el-button" :to="'/product/list/'+(parseInt($route.params.id)+1)" type="primary" round>下一页 &rarr;</router-link>-->
        <!--      <el-button type="primary" round>&larr; 上一页</el-button>-->
        <!--      <el-button type="primary" round>下一页 &rarr;</el-button>-->
      </el-row>
    </div>
  </div>
</template>

<style scoped lang="scss">
.page-product-lsit {
  padding: 30px;
  background-color: white;

  .list-btns {
    text-align: center;

    ::v-deep .el-button {
      margin-left: 20px;
    }
  }
}

.page-product-lsit h1 {
  margin: 25px 0;
  padding: 25px 0;
  border-bottom: 2px solid #e2e2e2;
  font-size: 30px;
}

.products {
  margin: 0 25px;
  margin-bottom: 30px;
  display: grid;
  grid-template-rows: repeat(2, auto);
  grid-template-columns: repeat(5, auto);
  grid-gap: 10px 20px;

  ::v-deep {
    .title {
      text-align: center;
      margin: 8px auto;
      width: 80%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    .center {
      ////overflow: hidden;
      display: grid;
      grid-template-columns: repeat(2, auto);
      grid-template-rows: 1fr;
      font-size: 12px;

      span:first-of-type {
        place-self: start;
        color: red;
      }

      span:last-of-type {
        place-self: end;
      }
    }

    .sales {
      margin: 5px 0;
      font-size: 15px;
    }
  }
}
</style>

<script>
import { types } from "@/tools/config.js";

export default {
  props: ["query", "id"],
  data() {
    return {
      // types,
      list: [],
    };
  },
  // 监听路由变化
  watch: {
    $route() {
      // 根据路由请求数据的函数
      console.log(this.$route);
      this.getData();
    },
  },
  methods: {
    getType(type) {
      return (
        types.find((item) => {
          if (item.id == type) {
            return item;
          }
        }).text || "其他"
      );
    },
    // 定义获取数据的共方法，可以复用
    getData() {
      let { params } = this.$route;

      console.log("当前页面路由", this.$route);
      
        $http.get("/admin/product/list", {
          // 第一个参数是一个对象传递query数据
          params,
        })
        .then(
          ({ data }) => {
            console.log(data);
            if (data.code == 1) {
              this.list = data.data;
            }

            // if (data) {
            //   console.log("", data);
            //   data.forEach(element => {
            //     if(element.id== params.id)
            //       this.data = element;
            //   });
            //
            // }
          },
          (err) => console.log(err)
        );
    },
    del(e, item) {
      this.$confirm(`此操作将删除商品:《${item.title}》, 是否继续?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "error",
      })
        .then(() => {
          $http.post("/admin/product/remove", { id: item.id }).then(
            ({ data }) => {
              if (data.code == 1) {
                console.log("删除id", data.msg);

                this.$message({
                  type: "success",
                  message: `"${item.title}"的${data.msg}删除成功!`,
                  duration: 2000,
                });
                //删除成功后刷新,让后用户看到效果
                setTimeout(() => {
                  // this.$router.go(0)
                }, 1000);
              } else {
                this.$message({
                  type: "error",
                  message: `${data.msg}删除失败！`,
                  duration: 2000,
                });
              }
            },
            (err) => {
              this.$message({
                type: "error",
                message: `请求错误`,
                duration: 2000,
              });
            }
          );
        })
        .catch(() => {
          this.$message("取消成功");
        });
    },
  },

  created() {
    this.getData();
  },
};
</script>