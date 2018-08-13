<template>
  <div class="slider-wrapper">
    <Loading v-if="!sliders.length"></Loading>
    <Slider
    :direction="direction"
    :loop="loop"
    :interval="interval"
    :pagination="pagination"
    v-else
    >
      <swiper-slide v-for="(item,index) in sliders" :key="index+'swiper'">
        <a :href="item.linkUrl" class="slider-link">
          <img :src="item.picUrl" alt="" class="slider-img">
        </a>
      </swiper-slide>
    </Slider>
  </div> 
</template>
<script>
import Slider from "~/components/slider/Slider";
import { swiperSlide } from "vue-awesome-swiper";
import { getHomeSlider } from "../../../api/home";
import { sliderOptions } from "./config.js";
import Loading from "~/components/loading/Loading";
export default {
  name: "HomeSlider",
  components: {
    Slider,
    swiperSlide,
    Loading
  },
  data() {
    return {
      direction: sliderOptions.direction,
      loop: sliderOptions.loop,
      interval: sliderOptions.interval,
      pagination: sliderOptions.pagination,
      sliders: []
    };
  },
  created() {
    this.getSliders();
  },
  methods: {
    getSliders() {
      getHomeSlider().then(data => {
        this.sliders = data;
      });
    }
  }
};
</script>
<style lang="stylus" scoped>
>>>.swiper-wrapper {
  height: 3.66rem;
  width: 100%;

  .slider-link {
    display: block;
  }

  .slider-link, .slider-img {
    height: 100%;
    width: 100%;
  }
}
</style>
