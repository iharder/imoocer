<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg" alt="">
      <div class="banner-info">
        <div class="banner-title">AAA</div>
        <div class="banner-number">
          <span class="iconfont icon-tupian banner-icon"></span>
          <span >39</span>
        </div>
      </div>
    </div>
    <CommonGallary v-show="showGallary" @close="handleGallaryClose"/>
  </div>
</template>
<script>
import CommonGallary from "../../../common/gallary/Gallary";
export default {
  name: "DetailBanner",
  data() {
    return {
      showGallary: false
    };
  },
  methods: {
    handleBannerClick() {
      this.showGallary = true;
    },
    handleGallaryClose() {
      this.showGallary = false;
    }
  },
  components: {
    CommonGallary
  }
};
</script>
<style lang="stylus" scoped>
.banner {
  overflow: hidden;
  height: 3.67rem;
  font-size: 0.24rem;
  position: relative;

  .banner-img {
    width: 100%;
    height: 100%;
  }

  .banner-info {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 0.6rem;
    height: 0.6rem;
    color: #fff;
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));

    .banner-title {
      flex: 1;
      font-size: 0.32rem;
      padding: 0 0.2rem;
    }

    .banner-number {
      margin-top: 0.14rem;
      padding: 0 0.4rem;
      line-height: 0.32rem;
      height: 0.32rem;
      border-radius: 0.2rem;
      background: rgba(0, 0, 0, 0.8);
    }
  }
}
</style>
