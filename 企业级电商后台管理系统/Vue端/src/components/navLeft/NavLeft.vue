<template>
  <div>
    <div class="logo">
      <img src="../../assets/logo-ant.svg" alt="">
      <h1>CMS</h1>
    </div>
    <a-menu
      style="width: 100%"
    >
      <a-menu-item key="1">首页</a-menu-item>
      <a-sub-menu key="sub1">   
        <span slot="title"><span>商品</span></span>
        <a-menu-item key="2">商品管理</a-menu-item>
        <a-menu-item key="3">品类管理</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <span slot="title"><span>订单</span></span>
        <a-menu-item key="4">订单管理</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub3">
        <span slot="title"><span>用户</span></span>
        <a-menu-item key="5">用户管理</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>
<script>
export default {
  name: "NavLeft",
  methods: {},
  data() {
    return {};
  },
  method: {
    // routerPush(url) {}
  },
  mounted() {}
};
</script>
<style lang="stylus" scoped>
.ant-menu {
}

.ant-menu-vertical {
  border: none;
}

.logo {
  line-height: 90px;
  padding-left: 20px;

  img {
    height: 35px;
  }

  h1 {
    color: #000;
    font-size: 20px;
    display: inline-block;
    margin: 0 0 0 10px;
    vertical-align: middle;
  }
}
</style>

