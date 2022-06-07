const { defineConfig } = require("@vue/cli-service");

// 区分环境

if (process.env.NODE_ENV === "production") {
  // 发布环境 (打包编译到磁盘)
  module.exports = defineConfig({
    transpileDependencies: true,
    outputDir: "../server/static/home", // 发布js  css 图片  类似path 只是不用写成绝对路径
    // 发布模板
    indexPath: "../../views/home.html", // 相对于outputDir

    // 发布到html中给文件加上路径
    publicPath: "/static/home/",
    // 关闭组件必须是驼峰命名
    // lintOnSave: false,
  });
} else {
  // 开发环境
  // 开发环境的配置是默认的，文件加载到内存中，目录也是默认的
  module.exports = defineConfig({
    transpileDependencies: true,

    configureWebpack: {
      // 跨域请求代理
      devServer: {
        proxy: {
          "/data/": {
            // 本服务器路径
            //请求这地址，代表请求 http://localhost:3000/static/data/
            target: "http://localhost:3000/data/", // 代理到的服务器路径

            pathRewrite: { "^/data/": "" }, // 重写路径，不然//请求这地址，代表请求 http://localhost:3000/static/data/拼接
          },
        },
      },
    },
  });
}
