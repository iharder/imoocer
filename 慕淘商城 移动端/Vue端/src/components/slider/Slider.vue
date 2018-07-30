<template>
  <swiper :options="swiperOption">
    <slot></slot>
    <div class="swiper-pagination" v-if="pagination" slot="pagination"></div>
  </swiper>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "Slider",
  props: {
    direction: {
      type: String,
      default: "horizontal",
      validator(value) {
        return ["horizontal", "vertical"].indexOf(value) > -1;
      }
    },
    interval: {
      type: Number,
      default: 3000,
      validator(value) {
        return value >= 0;
      }
    },
    loop: {
      type: Boolean,
      default: true
    },
    pagination: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      swiperOption: {
        watchOverflow: true,
        direction: this.direction,
        autoplay: this.interval
          ? {
              delay: this.interval,
              disableOnInteraction: false
            }
          : false,
        slidesPerView: 1, //设置slider容器能够同时显示的sliders数量
        loop: this.loop,
        pagination: {
          el: this.pagination ? ".swiper-pagination" : null
        }
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>
<style lang="stylus" scoped>
.swiper-container {
  width: 100%;
  height: 100%;
}
</style>
