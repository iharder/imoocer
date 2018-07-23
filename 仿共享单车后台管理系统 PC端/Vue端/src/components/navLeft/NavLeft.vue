<template>
  <div>
    <div class="logo">
      <img src="../../assets/logo-ant.svg" alt="">
      <h1>CMS</h1>
    </div>
    <a-menu > 
      <a-menu-item v-for="(item,index) of MenuConfig" :key="index" v-if="!item.children" >
        <div @click="routerPush(item.key)">{{item.title}}</div>
      </a-menu-item>
      <a-sub-menu v-else>
        <span slot="title"><span>{{item.title}}</span></span>
        <a-menu-item v-for="items of item.children" :key="items.title">
          <div @click="routerPush(items.key)">{{items.title}}</div>
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>
<script>
import MenuConfig from "../../config/menuConfig.js";
import Router from 'vue-router';
export default {
  name: "NavLeft",
  methods: {},
  data() {
    return {
      MenuConfig: []
    };
  },
  methods: {
    routerPush(url) {
      this.$router.push("/admin" + url);
    }
  },
  mounted() {
    let MenuConfigData = MenuConfig;
    this.MenuConfig = MenuConfigData;
  }
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

