let router = require("./admin");
const query = require("../db/dataBaseConfigure");

let fs = require("fs");
let path = require("path");
// 引入上传模块的中间件

let formidable = require("formidable");
const { clearScreenDown } = require("readline");

// 创建商品

function createProduct(req, res, next) {
  //console.log("提交服务接受的的数据", req.body);

  let createSql =
    "insert into products (title, description, sales, price, originPrice, evaluate, storeName, storeAddress, storeNum,type,content) values(?,?,?,?,?,?,?,?,?,?,?)";

  let addSqlParams = [
    req.body.title,
    req.body.description,
    req.body.sales,
    req.body.price,
    req.body.originPrice,
    req.body.evaluate,
    req.body.storeName,
    req.body.storeAddress,
    req.body.storeNum,
    req.body.type,
    req.body.content,
  ];

  query(
    createSql,
    addSqlParams,

    function (error, results) {
      if (error) {
        res.json({
          code: 0,
          msg: "插入失败",
          data: error,
        });
      } else {
        // 读取商品id
        let readSql =
          "SELECT * FROM products WHERE  title=? and description=? and sales=? ";

        let readParams = [req.body.title, req.body.description, req.body.sales];
        //console.log("插入成功后", results)
        query(readSql, readParams, function (error, data) {
          if (error) {
            console.log("查询错误！！");
            res.json({
              msg: "查询错误",
              code: 0,
              data: "",
            });
          } else {
            console.log("id", data);
            res.json({
              msg: "创建商品成功！",
              code: 1,
              data: data[0].id,
            });
          }
        });
      }
    }
  );
}

// 修改商品信息
function editProduct(req, res, next) {
  // console.log("更新的数据", req.body);
  if (req.body.id && parseInt(req.body.id)) {
    // title,
    //   description,
    //   sales,
    //   price,
    //   originPrice,
    //   evaluate,
    //   storeName,
    //   storeAddress,
    //   storeNum,
    //   type,
    //   content;
    let createSql =
      "update products  set title=?,description=?,price=?,originPrice=?,evaluate=?,sales=?,storeName=?,storeAddress=?,storeNum=?,type=?,content=? where id=?";

    let addSqlParams = [
      req.body.title,
      req.body.description,
      req.body.price,
      req.body.originPrice,
      req.body.evaluate,
      req.body.sales,
      req.body.storeName,
      req.body.storeAddress,
      req.body.storeNum,
      req.body.type,
      req.body.content,
      parseInt(req.body.id),
    ];

    query(
      createSql,
      addSqlParams,

      function (error, results) {
        if (error) {
          res.json({
            code: 0,
            msg: "插入失败",
            data: error,
          });
        } else {
          // 读取商品id
          let readSql =
            "SELECT * FROM products WHERE  title=? and description=? and sales=? ";

          let readParams = [
            req.body.title,
            req.body.description,
            req.body.sales,
          ];
          //console.log("插入成功后", results)
          query(readSql, readParams, function (error, data) {
            if (error) {
              console.log("查询错误！！");
              res.json({
                msg: "查询错误",
                code: 0,
                data: "",
              });
            } else {
              console.log("id", data);
              res.json({
                msg: "创建商品成功！",
                code: 1,
                data: data[0].id,
              });
            }
          });
        }
      }
    );
  } else {
    res.json({
      msg: "提交的参数错误",
      code: 0,
      data: "",
    });
  }
}

// 上传商品图片

function uploadImg(req, res) {
  // 如果登陆成功,在session中写入用户id

  // console.log("上传图片过来的数据", req.body);

  // 初始化文件接收器
  let form = formidable({
    encoding: "utf-8", //编码默认utf-8
    uploadDir: "./upload/product", //缓存路径
    keepExtensions: true, // 保持原扩展名
    maxFileSize: "10M", // 最大上传内存
    multiples: true,
  });

  let fileinfo = [];

  form.parse(req, function (err, params, file) {
    // 接收完毕
    // console.log(111, params, 333, file,44)
    // console.log("数据",file,file.file.newFilename)
    if (err) {
      console.log("上传错误", err);
      // 返回错误
      res.json({
        data: err,
        code: 0,
        msg: "文件上传失败",
      });
      return;
    } else {
      // 如果上传文件没有参数，直接删除
      if (!params.id) {
        fs.unlink("./upload/product/" + file.file.newFilename, function (err) {
          if (err) {
            return console.error(err);
          }
          console.log("文件删除成功！");
        });

        // 返回错误
        res.json({
          data: err,
          code: 0,
          msg: "文件上传失败",
        });
        return;
      } else {
        fileinfo.push({
          ...params,
          extract: path.extname(file.file.newFilename),
          filename: file.file.newFilename,
          url: "/static/product/" + file.file.newFilename,
        });
      }
    }
  });

  let flage = true;

  form.on("end", function () {
    //let createSql = "insert into fileinfo (productid, type, extract, filename, url) values(?,?,?,?,?)"
    // 存到数据库
    // fileinfo.forEach((item)=>{
    //     let addSqlParams = [parseInt(item.id), parseInt(item.type),item.extract, item.filename,item.url];
    //     query(createSql, addSqlParams,
    //         function (error, results) {
    //             if (error) {
    //                 flage=false;
    //                 res.json({
    //                     code: 0,
    //                     msg: "插入失败",
    //                     data: error
    //                 })
    //                 return;
    //             }
    //         })
    // })

    // 删除之前的上传的文件

    // 更新文件路径
    let delSql = "select * from products where id=?";
    let delParams = [parseInt(fileinfo[0].id)];
    query(delSql, delParams, function (error, results) {
      if (error) {
        flage = false;
        res.json({
          code: 0,
          msg: "删除之前的失败",
          data: error,
        });
        return;
      } else {
        if (results[0].filename) {
          fs.unlink("./upload/product/" + results[0].filename, function (err) {
            if (err) {
              return console.error(err);
            }
            console.log("之前文件删除成功！");
          });
        }
      }
    });

    // 更新文件路径
    let createSql = "update products  set img=? where id=?";
    let addSqlParams = [fileinfo[0].url, parseInt(fileinfo[0].id)];
    query(createSql, addSqlParams, function (error, results) {
      if (error) {
        flage = false;
        res.json({
          code: 0,
          msg: "插入失败",
          data: error,
        });
        return;
      } else {
        res.json({
          code: 1,
          msg: "图片上传成功",
          data: "",
        });
      }
    });
  });
}

// 展示多个商品

function list(req, res) {
  // 获得页面
  //     select * from table limit (page-1)*num,num;
  let num = 10; // 每一页9项
  // console.log("提交服务接受的的数据", req.body);
  let id = 1;
  if (req.query.id) {
    id = parseInt(req.query.id);
  }
  let page = (id - 1) * num;
  // 读取商品id
  let readSql = "SELECT * FROM products limit ?,?";

  let readParams = [page, num];
  //console.log("插入成功后", results)
  query(readSql, readParams, function (error, data) {
    if (error) {
      console.log("查询错误！！");
      res.json({
        msg: "查询错误",
        code: 0,
        data: error,
      });
    } else {
      //   console.log("查询成功", data);

      res.json({
        msg: "查询成功",
        code: 1,
        data: data,
      });
    }
  });
}

// 删除商品
function removeProduct(req, res) {
  // 如果登陆成功,在session中写入用户id
  if (req.body.id && parseInt(req.body.id)) {
    // 查到图片 删除图片，然后删除这一项数据
    selectSql = "SELECT id,img FROM products WHERE id=?";
    let readParams = [parseInt(req.body.id)];
    query(selectSql, readParams, (error, data) => {
      if (error) {
        res.json({
          msg: "查询错误",
          code: 0,
          data: error,
        });
      } else {
        if (data.length > 0) {
          let flage = true;
          // 有图片则删除
          console.log("数据", data);

          if (data[0].img.length > 0) {
            fs.unlink(
              "./upload/product/" + data[0].img.split("/")[3],
              (err) => {
                if (err) {
                  console.log("删除图片失败", err);
                } else {
                  flage = false;
                  console.log("删除图片成功");
                }
              }
            );
          }

          //删除商品信息
          let sql = "delete from products where id=?";
          let params = [parseInt(req.body.id)];
          query(sql, params, (err, data) => {
            if (err) {
              if (!flage) {
                res.json({
                  code: 0,
                  data: "",
                  msg: "删除商品信息失败,但图片删除成功",
                });
              } else {
                res.json({
                  code: 0,
                  data: "",
                  msg: "删除商品信息失败,图片没有找到或删除失败",
                });
              }
            } else {
              if (!flage) {
                res.json({
                  code: 1,
                  data: "",
                  msg: "删除商品图片和商品信息成功",
                });
              } else {
                res.json({
                  code: 1,
                  data: "",
                  msg: "删除商品信息成功,图片没有找到或删除失败",
                });
              }
            }
          });
        } else {
          res.json({
            code: 0,
            data: "",
            msg: "删除的商品不存在",
          });
        }
      }
    });
  } else {
    res.json({
      code: 0,
      data: "",
      msg: "删除数据无效",
    });
  }
}

function getProduct(req, res) {
  let id = 1;
  if (req.query.id) {
    id = parseInt(req.query.id);
  }
  console.log("id是", id, req.query);
  // 读取商品id
  let readSql = "SELECT * FROM products where id=?";

  let readParams = [id];

  query(readSql, readParams, function (error, data) {
    if (error) {
      res.json({
        msg: "查询错误",
        code: 0,
        data: error,
      });
    } else {
      res.json({
        msg: "查询成功",
        code: 1,
        data: data[0],
      });
    }
  });
}

router.post("/admin/product/upload", uploadImg);
router.post("/admin/product/create", createProduct);
// 展示多个商品
router.get("/admin/product/list", list);
// 删除单个
router.post("/admin/product/remove", removeProduct);
// 获取单个数据
router.get("/admin/product/get", getProduct);

router.post("/admin/product/edit", editProduct);

module.exports = router;
