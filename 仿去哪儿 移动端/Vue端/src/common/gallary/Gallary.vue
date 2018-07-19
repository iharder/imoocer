<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOption" >
        <swiper-slide v-for="(item,index) of imgs" :key="index">
			    <img class="gallary-img" :src="item">
		    </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>  
</template>
<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "CommonGallary",
  props: {
    imgs: {
      type: Array,
      default() {
        return [
          "http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg",
          "http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg"
        ];
      }
    }
  },
  methods:{
    handleGallaryClick(){
      this.$emit('close');
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          type: "fraction"
        },
        observeParents: true,
        observer: true
      }
    };
  }
};
</script>
<style lang="stylus" scoped>
.container >>> .swiper-container {
  overflow: inherit;
  height: 100%;
}

.container >>> .swiper-slide {
  height: 100%;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 0.28rem;
  z-index: 99;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #000;

  .wrapper {
    width: 100%;
    height: 6.68rem;

    .gallary-img {
      width: 100%;
      height: 100%;
    }

    .swiper-pagination {
      color: #fff;
      bottom: -1rem;
    }
  }
}
</style>

