<template>
  <div class="g-container">
    <div class="g-view-container">
      <router-view></router-view>
    </div>
    <div class="g-footer-container">
      <Tabbar></Tabbar>
    </div>
  </div>
</template>
<script>
import Tabbar from './components/tabbar/Tabbar';
export default {
  name: "App",
  components:{
    Tabbar
  }
};
</script>
<style lang="stylus">
@import './assets/stylus/index.styl';
</style>

