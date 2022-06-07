console.log("--->>dev.js配置文件开始编译");

//https://bbs.huaweicloud.com/blogs/303824?utm_source=zhihu&utm_medium=bbs-ex&utm_campaign=other&utm_content=content
// 命令执行的地方
let root = process.cwd();
let path = require("path");

let { VueLoaderPlugin } = require("vue-loader");

// 将HTML与打包的js合并发布到相应位置
let HtmlWebpackPlugin = require("html-webpack-plugin");
// 拆分css
let MiniCssExtractPlugin = require("mini-css-extract-plugin");
// 压缩css
// const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.join(root, "/src/main.js"),
  output: {
    path: path.join(root, "../server/static/admin/"), // 所有发布文件的相对位置，包括.css
    filename: "js/[name].js",
    // 静态文件的相对位置
    publicPath: "/static/admin/", //表示是服务器的根目录在path及root相对位置
  },
  // 使用 vue-loader
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      // 模板
      template: path.join(root, "/public/index.html"),
      // 发布
      filename: path.join(root, "../server/views/admin.html"),
      // 指纹
      hash: true,
      // 优化压缩HTML
      minify: {
        collapseWhitespace: true, // 删除html空白
        removeComments: false, // 删除中html的注释
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),
    // 拆分css打包后，发布位置
    new MiniCssExtractPlugin({
      filename: "css/[name].css", // 只能使用相对位置
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          "less-loader",
        ],
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.vue$/,
        use: ["vue-loader"],
      },
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },

      /* file-loader和url弃用了
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              // 解决项目中图片引入的问题
              esModule: false,
            },
          },
        ],
      },
      */

      {
        test: /\.(jpg|png|gif|jpeg|jfif)$/i,
        type: "asset",
        // type:"asset/inline"打包为base64
        //  type: "asset/resource", 拷贝文件

        //解析
        parser: {
          // base64就是一串字符串码表示的图片，在加载页面和js时一块加载出来，减少了加载图片时的http请求。
          // 加载一张图片时会发起一次http请求，http请求每次建立都会需要一定的时间，
          // 对于加载一张小图来说，下载图片所需的时间会比建立http请求的时间要短，
          // 所以对小图进行base64转码是优化http请求，保证页面加速渲染，加快页面加载速度。
          dataUrlCondition: {
            maxSize: 8 * 1024, // 8kb
          },
        },
        generator: {
          filename: "./img/[contenthash][ext][query]", // 打包后会放到img文件夹下  hash缓存
        },
      },
      {
        //打包字体
        //转换文件格式
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        //文件打包方式，拷贝
        type: "asset/resource",

        generator: {
          // 发布位置 相对于path路径
          filename: `./font/[contenthash][ext]`,
        },
      },
    ],
  },

  resolve: {
    alias: {
      vue$: "vue/dist/vue.js",
      "@": path.join(root, "./src"),
    },
    // 配置拓展名
    extensions: [".js", ".vue"],
  },

  // 优化
  optimization: {
    // 拆分库文件
    splitChunks: {
      // 缓存分组
      cacheGroups: {
        lib: {
          name: "lib",
          chunks: "initial",
          test: /node_modules/,
        },
      },
    },
    // 开发模式不压缩css
    // // 压缩css
    // minimizer: [new CssMinimizerPlugin({ parallel: true })], // 启用多线程压缩
    // // 启用css压缩
    // minimize: true,
  },
  // devServer: {
  //   open: true,
  //   port: 8082,
  //   host: "localhost", // 自动刷新
  //   hot: true,
  // },
};
