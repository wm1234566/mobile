<template>
  <div class="login">
    <div class="login-container">
      <!-- <h2>登录</h2> -->
      <!-- 1.写样式，1 placeholder 2 label 3 label-width -->
      <!-- 校验：1 v-model，2 model 3 prop 4 rules -->

      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="手机号登陆" name="first">
          <h1>手机号登陆</h1>
      


        </el-tab-pane>
        <el-tab-pane label="账号密码登陆" name="second">
          <el-form
            label-width="80px"
            label-position="right"
            :model="data"
            :rules="rules"
            status-icon
            ref="loginFrom"
          >
            <el-form-item label="用户名：" prop="username">
              <el-input
                v-model="data.username"
                placeholder="请输入用户名"
              ></el-input>
            </el-form-item>

            <el-form-item label="密码：" prop="password">
              <el-input
                v-model="data.password"
                placeholder="请输入密码"
                show-password
              ></el-input>
            </el-form-item>

            <el-form-item label="验证码：" prop="captcha">
              <el-row>
                <el-col :span="12" >
                  <el-input
                     v-model="data.captcha"
                    placeholder="输入验证码"
                  ></el-input>
                </el-col>
                <el-col :span="10" :offset="2">
                  <el-image @click="toggle" :src="src"></el-image>
                </el-col>
              </el-row>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" :plain="true" @click="submitForm('loginFrom')"
                >提交</el-button
              >
              <el-button @click="resetForm('loginFrom')">重置</el-button>
              <a href="">忘记密码？</a>
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-container {
  background-color: white;
  width: 400px;
  margin: 250px auto;
  border-radius: 20px;
  padding: 40px;
  > h2 {
    text-align: center;
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 2px solid #ccc;
  }
  > .login-btn {
    width: 100%;
    display: block;
  }
}
::v-deep .el-tabs .el-tabs__nav,
.is-top {
  transform: translateX(50%) !important;
}
</style>

<script>
// 导入工具类
import { username, password ,captcha} from "@/tools/validator";

export default {
  data() {
    return {
      activeName: "first",
      src: "/captcha",
      data: {
        username: "",
        password: "",
        captcha:""
      },

      // 校验规则
      rules: {
        // trigger:失去焦点校验
        username: [
          { required: true, message: "用户名不为空" },
          { validator: username, trigger: "blur" },
        ],

        password: [
          { required: true, message: "密码不为空" },
          { validator: password, trigger: "blur" },
        ],
        captcha:[

           { required: true, message: "密码验证码不为空" },
           { validator: captcha, trigger: "blur" },
        ]
      },
    };
  },

  methods: {
    submitForm(formName) {
      // 校验多个字段
      this.$refs[formName].validate((valid, field) => {
        // valid表示全部通过校验，field没有通过的校验
        console.log("校验", valid, field);

        if (valid) {
         
          // 数据传入另一个页面要是使用异步方法
            this.$store.dispatch("login",this.data)

        }else {
          this.$message.error('请输入正确的数据');
          return false;
        }
      });
    },

    toggle() {
      this.src = "/captcha?" + new Date();
    },
    resetForm(formName) {
      //重置
      this.$refs[formName].resetFields();
    },

    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>
