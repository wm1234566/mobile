<template>
  <div class="page-home">
    <el-container>
      <el-header height="80px">
        <router-link to="/" tag="h1">小吴后台管理系统</router-link>

        <div>

          <el-dropdown size="medium">
            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
            <span class="el-dropdown-link">
              {{$store.state.userName}}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>UserInfor</el-dropdown-item>
              <el-dropdown-item>Rename</el-dropdown-item>
              <el-dropdown-item>Log Off</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
      <el-container>
        <el-aside width="15%">

          <!-- router是为项目添加路由值是下面的index的值，一定要是一字符串 -->
          <el-menu :router="true">
            <el-submenu
              v-for="(item, index) in menu"
              :key="index"
              :index="String(index)"
            >
              <!-- 使用插槽为每一项添加一个图标和文字 -->
              <template #title>
                <i class="el-icon-menu"></i>
                <span>{{ item.title }}</span>
              </template>
              <!--  -->
              <el-menu-item
                v-for="(item2, index2) in item.children"
                :key="index2"
                :index="String(item2.href)"
                >{{ item2.title }}</el-menu-item
              >
            </el-submenu>
          </el-menu>


        </el-aside>
        <el-main>
                  <!-- home的子路由视图 -->
          <router-view> </router-view>

        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.page-home {
  height: 100%;
  ::v-deep > .el-container {
    height: 100%;
  }
  ::v-deep .el-header {
    background-color: #fff;
    margin-bottom: 10px;
    display: grid;
    grid-template-columns: 9fr 1fr;
    > h1 {
      place-self: center left;
    }
    > div {
      place-self: center center;
    }
  }
  ::v-deep > .el-container > .el-container > aside {
    background-color: #fff;
    padding: 20px;
    line-height: 100%;

    .el-menu {
      border: none;
    }

    //    margin-bottom: 10px;
    + main {
      background-color: #fff;
      margin-left: 10px;
    }
  }
  ::v-deep {
    .el-dropdown-link {
      cursor: pointer;
      color: #409eff;
    }
    .el-icon-arrow-down {
      font-size: 12px;
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      menu: [
        {
          title: "商品模块",
          children: [
            
            { title: "添加商品", href: "/product/create" },
            { title: "商品列表", href: "/product/list/1" },
          ],
        },

        {
          title: "首页模块",
          children: [
            { title: "首屏广告", href: "/home/ads/1" },
            { title: "分类按钮", href: "/home/types/1" },
          ],
        },

        {
          title: "用户模块",
          children: [
            { title: "创建用户", href: "/user/create" },
            { title: "用户列表", href: "/user/list/1" },
          ],
        },
      ],

      // 每一个成员代表一个模块
    };
  },
};
</script>
