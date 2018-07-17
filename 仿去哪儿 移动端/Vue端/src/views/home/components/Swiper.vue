<template>
	<swiper :options="swiperOption" v-if="showSwiper">
    <swiper-slide v-for="item of list" :key="item.id">
			<img class="swiper-img" :src="item.imgUrl">
		</swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "Swiper",
  components: {
    swiper,
    swiperSlide
  },
  props: {
    list: Array
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
      }
    };
  },
  computed: {
    showSwiper() {
      return this.list.length;
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../../../../public/varibles.styl';

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

