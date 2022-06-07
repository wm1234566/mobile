export function username(f, value, cb) {
  if (!/^\w{4,8}$/.test(value)) {
   return  cb(new Error("用户名4-8位的数字字母或下划线"));
  }
  // 没有错误
  cb();
}
export function password(f, value, cb) {
  if (!/^[a-zA-Z0-9_-]{4,16}$/.test(value)) {
    console.log("执行了");
   return   cb(new Error("用户名8-16位的数字字母或下划线"));

    //     匹配中文字符的正则表达式: [\u4E00-\u9FFF]
    // 不能为纯数字：(?![0-9]+$)
    // 不能全为小写字母与数字：(?![0-9a-z]+$)
    // 不能全为大写字母与数字：(?![0-9a-zA-Z]+$)
    // 不能全为特殊字符：(?!([^(0-9a-zA-Z)])+$)
    // 至少一个大写字母：(?=.*?[A-Z])
    // 至少一个特殊字符：(?=.*?[^\w\s])
  }
  // 没有错误
  cb();
}

export function captcha(f, value, cb) {
  if (!/\w+/.test(value)) {
   return  cb(new Error("验证码格式错误"));
  }
  //执行了
  cb();
}

export function repeat(password, name, args) {
  console.log(password, args);
  if(password !== args[1])
  {
  return   args[2](new Error("两次密码不一样"))
  }
  args[2]()
}
