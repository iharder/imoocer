<template>
  <div class="g-tabbar">
    <router-link class="g-tabbar-item" to="/home">
      <i class="iconfont icon-home"></i>
      <span>首页</span>
    </router-link>
    <router-link class="g-tabbar-item" to="/category">
      <i class="iconfont icon-category"></i>
      <span>分类</span>
    </router-link>
    <router-link class="g-tabbar-item" to="/cart">
      <i class="iconfont icon-cart"></i>
      <span>购物车</span>
    </router-link>
    <router-link class="g-tabbar-item" to="/my">
      <i class="iconfont icon-personal"></i>
      <span>我的</span>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "Tabbar"
};
</script>
<style lang="stylus" scoped>
@import '../../assets/stylus/variables.styl';

.router-link-exact-active {
  color: $link-active-color;
}
</style>
