<template>
  <div class="home">
    <header class="g-header-container">
      <HomeHeader/>
    </header>
    <div>
      <HomeSlider/>
    </div>
    <div class="g-backtop-container"></div>
    <router-view></router-view>
  </div>  
</template>
<script>
import HomeHeader from "./header/Header";
import HomeSlider from "./slider/Slider";
export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSlider
  }
};
</script>
<style lang="stylus" scoped>
@import '../../assets/stylus/variables.styl';

.home {
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: $bgc-theme;

  .g-header-container {
    z-index: $navbar-z-index;
  }
}
</style>
