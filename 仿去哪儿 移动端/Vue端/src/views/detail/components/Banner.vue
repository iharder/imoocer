<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg" alt="">
      <div class="banner-info">
        <div class="banner-title">{{this.sightName}}</div>
        <div class="banner-number">
          <span class="iconfont icon-tupian banner-icon"></span>
          <span >{{this.bannerImgs.length}}</span>
        </div>
      </div>
    </div>
    <Fade>
      <CommonGallary v-show="showGallary" @close="handleGallaryClose" :imgs="bannerImgs"/>
    </Fade>
  </div>
</template>
<script>
import CommonGallary from "../../../common/gallary/Gallary";
import Fade from "../../../common/fade/Fade";
export default {
  name: "DetailBanner",
  data() {
    return {
      showGallary: false
    };
  },
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array
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
    CommonGallary,
    Fade
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
