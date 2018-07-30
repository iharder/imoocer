<template>
  <a-layout>
    <div class="form">
      <a-form @submit="handleSubmit" :autoFormCreate="(form)=>{this.form = form}" >
        <a-form-item label='帐号' :labelCol="{ span:9 }" :wrapperCol="{ span: 6 }" fieldDecoratorId="user" :fieldDecoratorOptions="{rules: [{ required: true, message: '请输入你的账号!' }]}">
          <a-input v-model="username"/>
        </a-form-item>
        <a-form-item label='密码' :labelCol="{ span: 9 }" :wrapperCol="{ span: 6 }" fieldDecoratorId="pass" :fieldDecoratorOptions="{rules: [{ required: true, message: '请输入你的密码!' }]}">
          <a-input v-model="password" type="password"/>
        </a-form-item>
        <a-form-item :wrapperCol="{ span: 6, offset: 9 }">
          <a-button type='primary' htmlType='submit'>
            登录
          </a-button>
        </a-form-item>
      </a-form>
    </div>
  </a-layout>
</template>
<script>
// import { request } from "../../utils/api";
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    handleSubmit() {
      // request('http://admintest.happymmall.com/manage/user/login.do');
      axios.post("http://admintest.happymmall.com/manage/user/login.do", {
        data: {
          username: this.username,
          password: this.password
        }
      });
    }
  }
};
</script>
<style lang="stylus" scoped>
.form {
  margin-top: 15%;
}
</style>
