let express = require("express");
let ejs = require("ejs");

// 创建服务器
let app = express();
const root = process.cwd();

const cookie = require("cookie-parser");
// const session = require("express-session");
app.use(cookie("session"));
//引入post请求处理的中间件

const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true, // 允许是任意类型的post请求
  })
);

// 导入token
let {
  getToken,
  setToken,
  decodeToken,
  errorToken,
} = require("./utility/token");

let { sessionInit } = require("./utility/session");

// 配置session
app.use(sessionInit);

// 解析toke
app.use(decodeToken);
// 处理错误
// 错误中间件写在最后
app.use(errorToken);

// 跨域
let cors = require("./utility/cors");
app.use("*", cors);

// 验证登陆利用token

// app.use("/admin/*", function (req, res, next) {
//   if (getToken(req.headers["authorization"].split(" ")[1])) {
//     console.log("登陆了", getToken(req.get("Authorization")));
//     next();
//   } else {
//     res.json({ error: 0, msg: "你没有登陆", data: "" });
//   }
// });

// 引入路由
let router = require("./router/index");
// 安装路由
app.use(router);
// 验证登陆的中间件

app.engine(".html", ejs.__express);
// 配置路由
app.get("/home", (req, res) => {
  // 渲染模板
  res.render("home.html");
});

// 配置路由
app.get("/admin", (req, res) => {
  // 渲染模板
  res.render("admin.html");
});
// 配置路由
app.get("/", (req, res) => {
  // 渲染模板
  res.render("home.html");
});

// app.post("/data/buy", (req, res) => {});

// mock数据，省略数据的扩展名

// 静态化代理数据和本地请求数据   /data下面的文件映射到 本地static/data中/
app.use(
  "/data/",
  (req, res, next) => {
    console.log(req.url);
    // 添加拓展名 希望可以添加参数
    // req.url += ".json";

    let arr = req.url.split("?");
    arr[0] += ".json";
    req.url = arr.join("?");
    // console.log(req.url);

    // 执行放行函数
    next();
  },
  express.static("./static/data/")
);

//本地HTML引入文件
app.use("/static/", express.static("./static/"));

// 上传图片
app.use("/static/product/", express.static("./upload/product/"));

// 静态化本地图片
app.use("/img/", express.static("./static/home/img"));

app.use("/favicon.ico", express.static("./static/home/favicon.ico"));

// 静态化 vue代码中写死的数据 图片等数据

//监听端口
app.listen(3000, () => {
  console.log("Server started http://localhost:3000");
});
