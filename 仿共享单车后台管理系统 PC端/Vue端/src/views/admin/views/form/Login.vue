<template>
  <div>
    <a-card title="登录行内表单">
      <a-form layout="inline">
        <a-form-item>
          <a-input placeholder="请输入用户名" />
        </a-form-item>
        <a-form-item>
          <a-input placeholder="请输入密码"/>
        </a-form-item>
        <a-form-item>
          <a-button type="primary">登录</a-button>
        </a-form-item>
      </a-form>
    </a-card>
    <a-card title="登录水平表单">
      <a-form layout="horizontal" :autoFormCreate="(form)=>{this.form = form}">
        <a-form-item :wrapperCol="{ span: 4 }">
          <a-input placeholder="请输入用户名" />
        </a-form-item>
        <a-form-item :wrapperCol="{ span: 4 }">
          <a-input placeholder="请输入密码"/>
        </a-form-item>
        <a-form-item >
          <a-button type="primary">登录</a-button>
        </a-form-item>
      </a-form>
    </a-card>
    <a-card title="登录校验表单">
      <a-form :autoFormCreate="(form)=>{this.form = form}">
        <a-form-item
          :wrapperCol="formItemLayout.wrapperCol"
          fieldDecoratorId="username"
          :fieldDecoratorOptions="{rules: [{ required: true, message: '请输入你的账号' }]}"
        >
          <a-input placeholder='输入你的账号' >
             <a-icon slot="prefix" type="user" />
          </a-input>
        </a-form-item>
        <a-form-item
          :wrapperCol="formItemLayout.wrapperCol"
          fieldDecoratorId="nickname"
          :fieldDecoratorOptions="{rules: [{ required: checkNick, message: '请输入你的密码' }]}"
        >
          <a-input placeholder='输入你的密码' />
        </a-form-item>
        <a-form-item
          :labelCol="formTailLayout.labelCol"
          :wrapperCol="formTailLayout.wrapperCol"
        >
          <a-checkbox
            :checked="checkNick"
            @change="handleChange"
          >
            选中密码
          </a-checkbox>
        </a-form-item>
        <a-form-item
          :labelCol="formTailLayout.labelCol"
          :wrapperCol="formTailLayout.wrapperCol"
        >
          <a-button type='primary' @click="check">Check</a-button>
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</template>
<script>
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 }
};
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 }
};
export default {
  name: "Login",
  data() {
    return {
      checkNick: false,
      formItemLayout,
      formTailLayout
    };
  },
  methods: {
    check() {
      this.form.validateFields();
    },
    handleChange(e) {
      this.checkNick = e.target.checked;
      this.$nextTick(() => {
        this.form.validateFields(["nickname"], { force: true });
      });
    }
  }
};
</script>
<style lang="stylus" scoped>
</style>
