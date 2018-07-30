<template>
  <div>
    <a-card title="文字背景轮播">
      <a-carousel autoplay effect="fade">
        <div><h3>Ant Motion Banner - Vue</h3></div>
        <div><h3>Vux</h3></div>
        <div><h3>Vue-router</h3></div>
        <div><h3>Vue-SSR</h3></div>
      </a-carousel>
    </a-card>
    <a-card title="图片背景轮播" class="img">
      <a-carousel autoplay effect="fade" >
        <div>
          <img :src="require('./img/carousel-1.jpg')" alt="">
        </div>
        <div>
          <img :src="require('./img/carousel-2.jpg')" alt="">
        </div>
        <div>
          <img :src="require('./img/carousel-3.jpg')" alt="">
        </div>
      </a-carousel>
    </a-card>
  </div>
</template>
<script>
export default {
  name: "Carousel"
};
</script>
<style lang="stylus" scoped>
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 240px;
  line-height: 240px;
  background: #364d79;
  overflow: hidden;

  img {
    backgroud-size: cover;
    width: 100%;
  }
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}

.img {
  .ant-carousel >>> .slick-slide {
    height: 500px !important;
  }
}
</style>
