<template>
  <Navbar class="header navbar">
    <i class="iconfont icon-scan" slot="left"></i>
    <div slot="center">搜索框</div>
    <i class="iconfont icon-msg" slot="right"></i>
  </Navbar>
</template>
<script>
import Navbar from "../../../components/navbar/Navbar";
export default {
  name: "Header",
  components: {
    Navbar
  }
};
</script>
<style lang="stylus" scoped>
@import '../../../assets/stylus/variables.styl';

.header {
  &.navbar {
    background-color: transparent;
  }


  .iconfont {
    color: $icon-color-default;
  }
}
</style>
