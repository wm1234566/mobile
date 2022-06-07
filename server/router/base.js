let express = require("express");


// 获取路由  好处是可以写在其他文件中
let {Router} = express;
// 创建路由对象
let router = new Router();
// 安装路由


router.all("*", function (req, res, next) {

    if (req.get("origin")) {
        // 不同端口，和协议都可以跨域
        if (/^(http|https):\/\/localhost:[0-9]{3,5}/.test(req.get("origin"))) {

            // 注意 发送的时候也要开启cookie
            // var xhr = new XMLHttpRequest();
            // xhr.withCredentials = true;
            //允许跨域携带cookie
            res.setHeader("Access-Control-Allow-Credentials", true);
            // 对应的响应头
            res.setHeader("Access-Control-Allow-Origin", req.get("origin"));
            // 服务器接受的方法
            res.setHeader("Access-Control-Allow-Methods", 'POST, GET, OPTIONS, DELETE, PUT');
            // 允许发送请求的字段
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, If-Modified-Since");
            if(req.method==="OPTIONS")
            {
                res.send(200);/*让options请求快速返回*/
            }{
                next()

            }
        } else {
            next();
        }
    }else
    {
        next();
    }


})
module.exports=router