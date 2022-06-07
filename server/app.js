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
      secure: false, // 必须设为fals不然拿不到session
      maxAge: 100 * 60 * 60,
    },
  })
);

//生成token
const jwt = require("jsonwebtoken");

// 自定义秘钥
const secretkey = "ananan";
// 引入解码工具
const { expressjwt } = require("express-jwt");
//只要配置express-jwt这个中间件，就可以把解析出来的信息挂载在req.auth
//除了api开头的请求地址其他地址都需要验证
app.use(
  expressjwt({
    credentialsRequired: true, //需要校验
    secret: secretkey, // 加密秘钥
    algorithms: ["HS256"], // 加密方式
  }).unless({
    path: ["/admin", "/login", /^\/static/, "/captcha"], // 不需要校验的路径
    // path: ["/admin","/login"/^(\/admin|\/|\/login)/],
  })
);

//定义一个抛出错误的中间件 当token失效时 返回信息
app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    return res.json({ code: 0, msg: "无效的token" });
  }
  // res.send({ status: 500, message: "未知错误" });
  return res.json({ code: 0, msg: "出现未知错误" });
});

// 使用中间件
// app.use(
//   bodyParser.urlencoded({
//     extended: true, //为false的时候，键值对中的值就为'String'或'Array'形式，true 为任意类型
//   })
// );

// 配置body-parser
// 只要加入这个配置，则在req请求对象上会多出来一个属性：body
// 也就是说可以直接通过req.body来获取表单post请求数据
// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true, // 允许是任意类型的post请求
  })
);

app.use("/admin/product/*", function (req, res, next) {
  // 提交数据验证是否登陆
  if (req.session.username) {
    // console.log("提交服务接受的的数据", req.body);

    next();
  } else {
    res.json({ error: 0, msg: "你没有登陆", data: "" });
  }
});

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
