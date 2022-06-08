<template>
  <div class="main">
    <h1>修改密码</h1>

    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      width="300px"
      status-icon
    >
      <el-form-item label="用户名" prop="username" required>
        <el-input v-model="ruleForm.username" placeholder=""></el-input>
      </el-form-item>

      <el-form-item label="密码" prop="password" required>
        <el-input v-model="ruleForm.password"></el-input>
      </el-form-item>

      <el-form-item label="重复密码" prop="repeat" required>
        <el-input v-model="ruleForm.repeat"></el-input>
      </el-form-item>

      <el-form-item prop="captcha" required>
        <el-col :span="10">
          <el-input
            v-model="ruleForm.captcha"
            placeholder="请输入验证码"
            required
          ></el-input>
        </el-col>
        <el-col :span="10" :offset="2">
          <el-image
            style="height: 40px"
            @click.stop.prevent="clickImg"
            :src="'/captcha?time=' + random"
          ></el-image>
        </el-col>
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
  width: 600px;
  .el-col-offset-2 {
    height: 40px;
  }
}
.main {
  padding: 30px;
  background-color: white;
}
.main h1 {
  margin: 25px 0;
  padding: 25px 0;
  border-bottom: 2px solid #e2e2e2;
  font-size: 30px;
}
</style>

<script>
import { repeat, username, password, captcha } from "../tools/validator";
export default {
  data() {
    return {
      random: "",
      ruleForm: {
        username: "",
        password: "",
        repeat: "",
        captcha: "",
      },
      rules: {
        username: [
          { required: true, message: "名字不为空", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
          { validator: username, trigger: "blur" },
        ],

        password: [
          { required: true, message: "密码不为空", trigger: "blur" },
          {
            min: 8,
            max: 12,
            message: "长度在 8 到 12 个字符",
            trigger: "blur",
          },
          { validator: password, trigger: "blur" },
        ],

        repeat: [
          { required: true, message: "重复密码不为空", trigger: "blur" },
          {
            min: 8,
            max: 12,
            message: "长度在 8 到 12 个字符",
            trigger: "blur",
          },
          {
            validator: (...args) => {
              repeat(this.ruleForm.password, "名字", args);
            },
            trigger: "blur",
          },
        ],
        captcha: [
          { required: true, message: "验证码不为空", trigger: "blur" },
          { min: 4, max: 4, message: "长度4个字符", trigger: "blur" },
          { validator: captcha, trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    clickImg() {
      this.random = Math.random();
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          $http.post("/chpwd", this.ruleForm).then(
            ({ data }) => {
              console.log("结果是", data);
              if (data.error === 0) {
                this.$message.success("修改密成功,请重新登录");

                // 刷新页面  原生刷新页面
                location.reload(); //
                // history.go(0)
                //this.$router.go(0);

                // 退出登陆
                // setTimeout(()=>{
                //   this.$store.commit("updateUserName","")
                // },2000)
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
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>