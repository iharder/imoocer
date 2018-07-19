<template>
  <swiper :options="swiperOption">
    <swiper-slide  v-for="(page,index) of pages" :key="index">
      <div class="icons">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img :src='item.imgUrl'>
           </div>    
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </div>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "HomeIcons",
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
    pages() {
      const pages = [];
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../../../../public/varibles.styl';
@import '../../../../public/mixins.styl';

>>> .swiper-pagination-bullet-active {
  background-color: $bgColor;
}

.icons {
  overflow: hidden;
  height: 3.7rem;
  padding-top: 0.1rem;

  .icon {
    overflow: hidden;
    width: 25%;
    float: left;
    text-align: center;

    .icon-desc {
      display: block;
      color: $darkTextColor;
      height: 0.28rem;
      line-height: 0.28rem;
      font-size: 0.28rem;
      width: 100%;
      ellipsis();
    }

    .icon-img {
      display: inline-block;
      width: 1.1rem;
      height: 1.1rem;
      padding-top: 0.1rem;

      img {
        width: 1.1rem;
        height: 1.1rem;
      }
    }
  }
}
</style>

