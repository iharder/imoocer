<template>
  <div class="home">
    <div class="scroll" ref="scroll">
      <div>
        <header class="g-header-container">
          <HomeHeader/>
        </header>
        <HomeSlider/>
        <HomeNav/>
        <HomeRecommend/>
      </div>   
    </div>
    <div class="g-backtop-container"></div>
    <router-view></router-view>
  </div>  
</template>
<script>
import HomeHeader from "./header/Header";
import HomeSlider from "./slider/Slider";
import HomeNav from "./nav/Nav";
import HomeRecommend from "./recommend/Recommend";
import BScroll from "better-scroll";
export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSlider,
    HomeNav,
    HomeRecommend
  },
  data() {
    return {
      loading: false,
      a: ""
    };
  },
  mounted() {
    this.$nextTick(() => {
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.scroll, {
          click: true,
          bounceTime: 500
        });
      } else {
        this.scroll.refresh();
      }

      this.scroll.on("pullingDown", () => {
        this.loading = true;
        this.a = this.scroll.y;
      });
      this.scroll.finishPullDown();
    });
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

  .scroll {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 1rem;
    width: 100%;
    overflow: hidden;
  }
}
</style>
