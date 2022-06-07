<template>
  <div class="pC">
    <h1>{{title}}</h1>

    <el-form
      :model="data"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      status-icon
    >
      <el-form-item label="商品名称" prop="title" required>
        <el-input v-model="data.title" placeholder="请输入商品名称"></el-input>
      </el-form-item>
      <el-form-item label="商品描述" prop="description" required>
        <el-input
          v-model="data.description"
          type="textarea"
          placeholder="请输入商品描述"
        ></el-input>
      </el-form-item>

      <el-form-item label="商品价格" prop="price" required>
        <el-input v-model.number="data.price" type="number" placeholder="请输入商品价格"></el-input>
      </el-form-item>
      <el-form-item label="商品原价" prop="originPrice" required>
        <el-input
          v-model.number="data.originPrice"
          placeholder="请输入商品原价"
          type="number"
        ></el-input>
      </el-form-item>

      <el-form-item label="商品评分" prop="evaluate" required>
        <el-rate v-model="data.evaluate" show-score allow-half> </el-rate>
      </el-form-item>
      <el-form-item label="商品分类" prop="type" required>
        <el-select v-model="data.type" clearable placeholder="请选择商品分类">
          <el-option
            v-for="item in types"
            :key="item.id"
            :label="item.text"
            :value="item.id"
          >
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="商品销量" prop="sales" required>
        <el-input v-model.number="data.sales" type="number" placeholder="请输入商品销量"></el-input>
      </el-form-item>
      <el-form-item label="商品店名" prop="storeName" required>
        <el-input
          v-model="data.storeName"
          placeholder="请输入商品店名"
        ></el-input>
      </el-form-item>
      <el-form-item label="商品地址" prop="storeAddress" required>
        <el-input
          v-model="data.storeAddress"
          placeholder="请输入商品描述"
        ></el-input>
      </el-form-item>
      <el-form-item label="商品分店" prop="storeNum" required>
        <el-input
          v-model.number="data.storeNum"
          placeholder="请输入商品分店"
          type="number"
        ></el-input>
      </el-form-item>

      <el-form-item label="商品图片" prop="img">
        <el-upload
          action="/admin/product/upload"
          :data="uploadParams"
          :on-success="uploadSuccess"
          :on-error="uploadError"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          with-credentials
          list-type="picture"
          :before-remove="beforeRemove"
          ref="upload"
          :on-exceed="handleExceed"
          multiple
          :limit="1"
          :auto-upload="false"
        >
          <el-button size="small" type="primary">上传图片</el-button>
          <span slot="tip" class="uploadPrompt"
            >只能上传jpg/png文件，且不超过500kb</span
          >
        </el-upload>
      </el-form-item>
      <el-form-item label="商品内容" prop="content" required>
        <quill-editor ref="myQuillEditor" v-model="data.content" />
      </el-form-item>

      <el-form-item>
        <el-col :span="10">
          <el-button type="primary" plain @click="submitForm('ruleForm')"
            >提交</el-button
          >
        </el-col>
        <el-col :span="10" :offset="2">
          <el-button type="success" @click="resetForm('ruleForm')" plain
            >重置</el-button
          >
        </el-col>
      </el-form-item>
    </el-form>
  </div>
</template>
<style lang="scss" scoped>
::v-deep .el-form {
  margin-left: 100px;
  width: 800px;
  .el-col-offset-2 {
    height: 40px;
  }
  .el-rate {
    padding: 10px 0;
  }
  .uploadPrompt {
    margin-left: 10px;
  }
}
.pC {
  padding: 30px;
  background-color: white;
}
.pC h1 {
  margin: 25px 0;
  padding: 25px 0;
  border-bottom: 2px solid #e2e2e2;
  font-size: 30px;
}
</style>
<script>
//引入分类数据
import { types } from "@/tools/config";

export default {
  data() {

    let  rules={};
    // let  pass=function (item,f,value,cb)
    // {
    //   if(value<0)
    //   {
    //   return   cb(`${item}必须大于0`)
    //   }
    //   cb()
    // }
    let array=[ "title", "description", "sales", "price", "originPrice", "evaluate", "storeName", "storeAddress", "storeNum"].map((item)=>{
      rules[item]=[{required:true,message:`${item}不为空`}]
    })
    return {

      title:"添加商品",
      submitUrl:"/admin/product/create",//数据提交的地址

      uploadParams:{id:"",type:1},
      // type:1表示商品的图片
      // type:2表示用户头像
      types,

      data: {
        id:"",
        type: 1,
        img: "",
        title: "",
        description: "",
        sales: 0,
        price: 0,
        originPrice: 0,
        evaluate: 0,
        storeName: 0,
        storeAddress: "",
        storeNum: 0,

      },
      // 上传的预览文件
      fileList: [],
      rules

    }
  },

  methods: {
    submitForm(ref) {
      this.$refs[ref].validate((valid) => {
        if (valid) {

// 上传发送的数据是
          console.log("创建商品发送的数据是",this.data);
          this.$http.post(this.submitUrl, this.data).then(
            ({ data }) => {
              console.log("创建商品得到的数据结果是", data);
              if (data.code === 1) {


                console.log("返回的id",data)

                this.$set(this.uploadParams,"id",data.data)

                this.$refs["upload"].submit();

                this.$message.success("添加成功");
                setTimeout(()=>{

                  // 刷新
                this.$router.go(0)

                },1000)
              }
              else
              {
                this.$message.error(data.msg);
              }
            },
            (err) => {
              this.$message.error("请求错误");
            }
          );
        } else {
          this.$message.error("请输入合法的数据");
          return false;
        }
      });
    },

    // 上传成功
    uploadSuccess(response, file, fileList) {


      console.log("上传图片成功的到的数据是", response, file, fileList);
    },
    // 上传失败
    uploadError(response, file, fileList) {
      this.$message.error("上传文件失败,请重新上传");
      console.log("上传失败", response, file, fileList);
    },
    // 删除预览文件
    handleRemove(file, fileList) {
      console.log("文件列表移除文件时的钩子", file, fileList);
      console.log(file, fileList);
    },
    // 点击文件列表中已上传的文件时的钩子
    handlePreview(file) {
      console.log("on-preview 点击文件列表中已上传的文件时的钩子", file);
    },

    beforeRemove(file, fileList) {
      console.log("删除文件之前的钩子，参数为上传的文", file, fileList);
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    // 上传数量
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${
          files.length + fileList.length
        } 个文件`
      );
    },
  },
};
</script>