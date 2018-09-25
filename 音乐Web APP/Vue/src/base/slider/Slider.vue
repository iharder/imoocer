<template>
  <div class="slider" ref="slider">
    <div class="slider-group" ref="sliderGroup">
      <slot>
      </slot>
    </div>
    <div class="dots">
      <span class="dot" :class="{active: currentPageIndex === index }" v-for="(item, index) in dots" :key="index+'dot'"></span>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import { addClass } from "~/assets/js/dom";
export default {
  name: "slider",
  data() {
    return {
      dots: [],
      currentPageIndex: 0
    };
  },
  props: {
    loop: {
      type: Boolean,
      default: true
    },
    autoPlay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 4000
    }
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      this._setSliderWidth();
      this._initDots();
      this._initSlider();
    });
  },
  methods: {
    _setSliderWidth() {
      this.children = this.$refs.sliderGroup.children;
      let width = 0;
      let sliderWidth = this.$refs.slider.clientWidth;
      for (let i = 0; i < this.children.length; i++) {
        let child = this.children[i];
        addClass(child, "slider-item");
        child.style.width = sliderWidth + "px";
        width += sliderWidth;
      }
      this.$refs.sliderGroup.style.width = width + "px";
    },
    _initSlider() {
      this.slider = new BScroll(this.$refs.slider, {
        scrollX: true,
        scrollY: false,
        momentum: false,
        snap: true,
        snapThreshold: 0.3,
        snapSpeed: 400
      });

      this.slider.on("scrollEnd", () => {
        let pageIndex = this.slider.getCurrentPage().pageX;
        this.currentPageIndex = pageIndex;
      });
    },
    _initDots() {
      this.dots = new Array(this.children.length);
    }
  }
};
</script>

<style scoped lang="stylus">
@import '../../assets/stylus/variable';

.slider {
  min-height: 0.02rem;

  .slider-group {
    position: relative;
    overflow: hidden;
    white-space: nowrap;

    .slider-item {
      float: left;
      box-sizing: border-box;
      overflow: hidden;
      text-align: center;

      a {
        display: block;
        width: 100%;
        overflow: hidden;
        text-decoration: none;
      }

      img {
        display: block;
        width: 100%;
      }
    }
  }

  .dots {
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0.24rem;
    text-align: center;
    font-size: 0;

    .dot {
      display: inline-block;
      margin: 0 0.08rem;
      width: 0.16rem;
      height: 0.16rem;
      border-radius: 50%;
      background: $color-text-l;

      &.active {
        width: 0.4rem;
        border-radius: 0.1rem;
        background: $color-text-ll;
      }
    }
  }
}
</style>