let express = require("express");
let ejs = require("ejs");

// 创建服务器
let app = express();
const root = process.cwd();

const cookie = require("cookie-parser");
const session = require("express-session");
app.use(cookie("session"));
//引入post请求处理的中间件

const bodyParser = require("body-parser");

app.use(
  session({
    // 保存未初始化的session
    saveUninitialized: true,
    secret: "ergwe", //拼接字符串
    resave: false,
    rolling: true, //是否在用户每次请求时重置cookie(connect.sid)的生存时间
    cookie: {
        secure:false,
        maxAge: 60 * 60*10 },
  })
);
app.use(bodyParser.json());


// 引入路由
let router = require("./router/index");
// 安装路由
app.use(router);

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

// 静态化本地图片
app.use("/img/", express.static("./static/home/img"));

app.use("/favicon.ico", express.static("./static/home/favicon.ico"));

// 静态化 vue代码中写死的数据 图片等数据

//监听端口
app.listen(3000, () => {
  console.log("Server started http://localhost:3000");
});
