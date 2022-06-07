<style lang="scss" scoped>
@import "@/base.scss";
.img {
  position: relative;
  > img {
    width: 100%;
  }
  > div {
    position: absolute;
    left: 1rem;
    bottom: 1rem;
    p {
      color: white;
    }
  }
  p:first-of-type {
    font-size: 1.5rem;
  }
}
.price {
  padding: 0.6rem 0.8rem;
  background: white;
  overflow: hidden;
  > div:first-of-type {
    float: left;

    text-align: center;
    > span:first-of-type {
      font-size: 1.5rem;
      vertical-align: middle;
      color: $navColor;
    }
    > span:last-of-type {
      vertical-align: middle;
      margin-left: 1rem;
    }
  }
  > div:last-of-type {
    float: right;
    background: red;
    border-radius: 0.3rem;
    width: 4rem;
    height: 1.3rem;
    text-align: center;
    margin-top: 0.3rem;
    font-size: 0.8rem;
    > span {
      line-height: 1.3rem;
      text-align: center;
      color: white;
    }
  }
}

.sl {
  margin-top: 0.2rem;
  padding: 0.6rem 0.8rem;
  background: white;
  overflow: hidden;
  > span {
    color: #c0d599;
  }
  > span:last-of-type {
    margin-left: 7rem;
  }
  > p {
    margin-top: 0.4rem;
  }
}
.instructions
{
  margin-bottom: 4rem;
}
</style>


<template>
  <div class="detail">
    <div class="img">
      <img :src="'/img/list/' + data.src" :alt="data.title" />
      <div>
        <p>{{ data.title }}</p>
        <p>{{ data.description }}</p>
      </div>
    </div>
    <div class="price">
      <div>
        <span>{{ data.price }}元</span>
        <span>门市价:{{ data.originPrice }}元</span>
      </div>
      <div @touchend="purchase"><span>立即购买</span></div>
    </div>
    <div class="sl">
      <span>支持随时退货</span>
      <span> 支持立即退货</span>
      <p>销量:44</p>
    </div>
    <div class="infor">
      <p>店家信息</p>
      <p>串亭烧烤居酒屋(五道口店)</p>
      <p>海淀区成府路35号华清嘉园12号楼底商(华清嘉园东门向北30米)</p>
      <p>查看其它6家分店</p>
    </div>
    <div class="instructions">
      <p>购买须知</p>
      <p>有效日期</p>
      <span>2016.4.27至2016.10.26(周末、法定节假日通用)</span>
      <p>使用日期</p>
      <span
        >10:00-24:00,请您提前48小时预约，预约电话:010-8424-3309。(仅限东直门店自取)</span
      >
      <p>使用规则</p>
      <span
        >提前48小时预约，电话:010-8424-3309每张美团券建议4至6人使用
        店内无包间</span
      >
    </div>

    <!-- <ListC v-for="item in BuyCar" :key="item.id" :data="item"></ListC> -->
    <BuyBarC></BuyBarC>
  </div>
</template>

<script>
// import ListC from "@/components/ListC.vue";
import BuyBarC from "@/components/BuyBarC.vue";

export default {
  components: { BuyBarC },
  data() {
    return {
      data: [],
      BuyCar: [],
    };
  },
  // 监听搜索词的变化
  watch: {
    // 路由改变的时候刷新页面
    $route() {
      console.log("刷新到list的路由数据", this.$route); // 存储者当前页面的路由信息
      this.getData();
    },
  },

  methods: {
    // 定义获取数据的共方法，可以复用
    getData() {
      let { params } = this.$route;
      this.$http
        .get("/data/product", {
          // 第一个参数是一个对象传递query数据
          params,
        })
        .then(
          ({ data }) => {
            // console.log(data)
            if (data) {
              console.log("获取detail的数据", data);
              data.forEach(element => {
                if(element.id== params.id)
                      this.data = element;
              });
         
            }
          },
          (err) => console.log(err)
        );
    },
    // 点击立即购买，添加数据
    purchase()
    {
      // 遍历购物车，如果物品id相同对他添加一个
      this.$store.commit("addShop",this.data)
      // this.$store.commit("allPrice")//更新价格

    }
  },
  created() {
    // 获取数据d
    console.log("进入到Detail的路由数据", this.$route); // 存储者当前页面的路由信息
    this.getData();
    // 读取购物车的消息
    // console.log("购物车", this.$store.state.BuyCar);
    //this.BuyCar = this.$store.state.BuyCar;
  },
};
</script>