<template>
	<swiper :options="swiperOption" >
    <swiper-slide v-for="item of swiperList" :key="item.id">
			<img class="swiper-img" :src="item.imgUrl">
		</swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true
        },
        loop: true,
        autoplay: {
          delay: 3000
        }
      },
      swiperList: [
        {
          id: "0001",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1807/a1/41a802abfc4f0202.jpg_750x200_9f0cf69c.jpg"
        },
        {
          id: "0002",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1807/66/e5a5cec881702f02.jpg_750x200_67bb5691.jpg"
        },
        {
          id: "0003",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1807/c6/44fce1467be17702.jpg_750x200_406f5fc3.jpg"
        }
      ]
    };
  }
};
</script>
<style lang="stylus" scoped>
@import '../../public/varibles.styl';

>>> .swiper-pagination-bullet-active {
  background-color: #fff;
}

.swiper-slide {
  height: 2rem;

  .swiper-img {
    height: 2rem;
    width: 100%;
  }
}
</style>

