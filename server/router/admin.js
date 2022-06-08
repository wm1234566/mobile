let router = require("./base");
const query = require("../db/dataBaseConfigure");
const token = require("../utility/token");

// 生成jwt
const jwt = require("jsonwebtoken");
//验证码
var svgCaptcha = require("svg-captcha");

function captcha(req, res) {
  var cap = svgCaptcha.create({
    size: 4,
    ignoreChars: "0o1i",
    noise: 4,
    background: "#f5f5f5",
    color: true,
    height: 44,
  });
  // 存储session

  req.session.captcha = cap.text.toLocaleLowerCase();
  console.log("req.session.captcha", cap.text.toLocaleLowerCase(), req.session);
  res.type("svg"); //响应类型
  res.status(200).send(cap.data);
}

// 登陆
function login(req, res) {
  // 如果登陆成功,在session中写入用户id
  // 验证登陆合法性
  // console.log("登陆数据",req.body)

  if (req.body.password && req.body.password) {
    // 将明文密码加密
    let password = require("crypto")
      .createHash("sha1")
      .update(req.body.password)
      .digest("hex");

    let createSql = "SELECT * FROM admin WHERE username=? and password =?";
    console.log("密码和数据", req.body, password);
    let addSqlParams = [req.body.username, password];

    query(
      createSql,
      addSqlParams,

      function (error, results) {
        if (error) {
          console.log("查询失败");
          res.json({
            code: 0,
            msg: "查询错误",
            data: "",
          });
        } else {
          if (results.length >= 1) {
            //  console.log("查询成功",results)
            // 如果登陆成功,在session中写入用户id
            // req.session.username = req.body.username;

            // token.setToken("你好", "idxxxxx", "10h"); //

            console.log(
              "发送的token",
              token.setToken("你好", "idxxxxx", "10h")
            );
            res.json({
              code: 1,
              msg: "登陆成功",
              data: results[0].username,
              token: token.setToken(
                results[0].username,
                results[0].id,
                "3600s"
              ), // 设置头
            });
          } else {
            res.json({
              code: 0,
              msg: "用户名或密码错误！",
              data: "",
            });
          }
        }
      }
    );
  } else {
    res.json({
      code: 0,
      msg: "请求参数错误",
      data: "",
    });
  }
}

function changPassword(req, res, next) {
  console.log("重新修改密码：", req.session);
  // if()
  res.json({
    error: 0,
    msg: "Ok",
  });
}

// 验证登陆
function isLogin(req, res, next) {
  // console.log("验证是否登陆",req.session.username)

  // console.log(
  //   "登陆结果",
  //   req.headers["authorization"],
  //   token.getToken(req.headers["authorization"].split(" ")[1])
  // );
  try {
    if (token.getToken(req.headers["authorization"].split(" ")[1])) {
      // 有登陆过
      res.json({
        code: 1,
        data: {
          username: token.getToken(req.headers["authorization"].split(" ")[1])
            .user_name,
        },
        msg: "已经登陆",
      });
    } else {
      // 没登陆过
      res.json({
        code: 0,
        data: null,
        msg: "未登录",
      });
    }
  } catch (e) {
    // 没登陆过
    res.json({
      code: 0,
      data: null,
      msg: "未登录",
    });
    return;
  }
}

router.post("/chpwd", changPassword);

router.post("/login", login);

router.get("/captcha", captcha);
// router.post("/captcha", captcha);
router.post("/userinfo", isLogin);

module.exports = router;
