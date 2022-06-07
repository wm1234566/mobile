const mysql = require("mysql");
const pool = mysql.createPool({
  host: "", //数据库地址
  port: 3303, // 数据库端口
  user: "", // 数据库用户名
  password: "", // 数据库密码门
  database: "", //数据库名称
});

let query = function (sql, options, callback) {
  pool.getConnection(function (err, conn) {
    if (err) {
      callback(err, null, null);
    } else {
      conn.query(sql, options, function (err, results, fields) {
        //事件驱动回调
        callback(err, results, fields);
      });
      //释放连接，需要注意的是连接释放需要在此处释放，而不是在查询回调里面释放
      conn.release();
    }
  });
};

module.exports = query;

// module.exports = connection
