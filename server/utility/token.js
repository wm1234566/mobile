let jwt = require("jsonwebtoken"); //生成token
const { expressjwt } = require("express-jwt"); // 解码token

let jwtScrect = "xdfdfsdfdsxfd"; //签名

//登录接口 生成token的方法
let setToken = function (user_name, user_id, expiresIn) {
  //expiresln 设置token过期的时间
  //{ user_name: user_name, user_id: user_id } 传入需要解析的值（ 一般为用户名，用户id 等）
  const token = jwt.sign(
    { user_name: user_name, user_id: user_id },
    jwtScrect,
    { expiresIn }
  );
  return token; // 返回一个token
};

//各个接口需要验证token的方法
let getToken = function (token) {
  if (!token) {
    console.log("token是空的");
    return 0;
  } else {
    //第二种  改版后的

    let info = null;
    try {
      info = jwt.verify(token, jwtScrect);
    } catch (e) {
      return 0;
    }

    //解析返回的值（sign 传入的值）  返回一个token的明码
    return info;
  }
};

// 解析token

let decodeToken = expressjwt({
  credentialsRequired: true, //需要校验
  secret: jwtScrect, // 加密秘钥
  algorithms: ["HS256"], // 加密方式
}).unless({
  path: [
    "/admin",
    "/login",
    /^\/static/,
    "/captcha",
    "/",
    "/userinfo", // 单独校验
    "/favicon.ico",
    /^\/img\/icon\//,
  ], // 不需要校验的路径
  // path: ["/admin","/login"/^(\/admin|\/|\/login)/],
});

// 处理解析错误

// 定义错误中间件
// middleware/errorhandler.js
function errorToken(err, req, res, next) {
  console.log("token出现错误这一步->>", err, err.name, "《-----");
  let code = 500;
  let message = "Internal Server Error";
  // token解析的错误
  if (err.name === "UnauthorizedError") {
    code = 401;
    message = "token 解析错误";
  }
  res.statusCode = code;
  res.send({
    status: code,
    message,
  });
}

let errorHandler = (module.exports = {
  setToken,
  getToken,
  decodeToken,
  errorToken,
});
