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
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true
        },
        loop: true,
        autoplay: {
          delay: 5000
        }
      },
      iconList: [
        {
          id: "0001",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          desc: "景点门票"
        },
        {
          id: "0002",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png",
          desc: "动植物园"
        },
        {
          id: "0003",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png",
          desc: "自然风光"
        },
        {
          id: "0004",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png",
          desc: "游乐场"
        },
        {
          id: "0005",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
          desc: "一日游"
        },
        {
          id: "0006",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          desc: "本地玩乐"
        },
        {
          id: "0007",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/f5/a963333e1fa802.png",
          desc: "必游榜单"
        },
        {
          id: "0008",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
          desc: "溜娃儿"
        },
        {
          id: "0009",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png",
          desc: "主题乐园"
        },
        {
          id: "0010",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png",
          desc: "海洋馆"
        }
      ]
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.iconList.forEach((item, index) => {
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
@import '../../public/varibles.styl';
@import '../../public/mixins.styl';

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

