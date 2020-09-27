<template>
  <div class="login-container">
    <el-row :gutter="10">
      <el-col :span="4" :offset="10">
        <h1 class="page-title">
          Duku Admin
        </h1>
        <el-form
          ref="LoginForm"
          :model="LoginForm"
          label-width="80px"
          class="login-form"
          :rules="rules"
        >
          <el-form-item label="用户" prop="username">
            <el-input v-model="LoginForm.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="LoginForm.password" type="password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">登录</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "Login",
  data() {
    let validateUsername = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("用户名不可为空!"));
      } else {
        callback();
      }
    };
    return {
      LoginForm: {
        username: "test",
        password: "123456"
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { validator: validateUsername, trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 20, message: "密码不能超过6-20位", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    onSubmit() {
      this.$router.push("/");
    }
  },
  components: {}
};
</script>

<style scoped lang='scss'>
.login-container {
  padding-top: 80px;
  .page-title {
    text-align: center;
  }
  .login-form {
    padding-top: 40px;
  }
}
</style>