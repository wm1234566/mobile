const session = require("express-session");

let sessionInit = session({
  // 保存未初始化的session
  saveUninitialized: true,
  secret: "ergwe", //拼接字符串
  resave: false,
  rolling: true, //是否在用户每次请求时重置cookie(connect.sid)的生存时间
  cookie: {
    secure: false, // 必须设为fals不然拿不到session
    maxAge: 100 * 60 * 60,
  },
});

module.exports = {
  sessionInit,
};
