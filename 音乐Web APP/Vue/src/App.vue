<template>
  <div id="app">
    <Header/>
    <Tab/>
    <router-view></router-view>
  </div>
</template>
<script>
import Header from "./components/header/Header";
import Tab from "./components/tab/Tab";
export default {
  name: "App",
  components: {
    Header,
    Tab
  }
};
</script>
<style lang="stylus">
@import './assets/stylus/variable';
@import './assets/stylus/index';

#app {
  color: $color-theme;
  font-size: $font-size-medium;
}
</style>

