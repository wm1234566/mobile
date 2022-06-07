// 引入开发的配置
let config = require("./webpack.dev");

// 压缩css
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

config.optimization.minimizer = [new CssMinimizerPlugin({ parallel: true })];
config.optimization.minimize = true;

// 压缩js
config.mode = "production";

const TerserPlugin = require("terser-webpack-plugin");

config.optimization.minimizer.push(new TerserPlugin());
//暴露了接口;

module.exports = config;
