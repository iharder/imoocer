<template>
  <div class="slider-wrapper">
    <Slider
    :direction="direction"
    :loop="loop"
    :interval="interval"
    :pagination="pagination"
    v-if="sliders.length"
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
import Slider from "../../../components/slider/Slider";
import { swiperSlide } from "vue-awesome-swiper";
import { getHomeSlider } from "../../../api/home";
export default {
  name: "HomeSlider",
  components: {
    Slider,
    swiperSlide
  },
  data() {
    return {
      direction: "vertical",
      loop: false,
      interval: 0,
      pagination: false,
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

  .slider-link {
    display: block;
  }

  .slider-link, .slider-img {
    height: 100%;
    width: 100%;
  }
}
</style>
