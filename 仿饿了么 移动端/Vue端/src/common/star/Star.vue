<template>
  <div class="star">
    <span :class="itemClasses[index]" :style="itemClass" class="star-item" v-for="(item,index) of itemClasses" :key="index"></span>
  </div>  
</template>
<script>
const LENGTH = 5;
const CLS_ON = "on";
const CLS_HALF = "half";
const CLS_OFF = "off";
export default {
  name: "Star",
  props: {
    score: Number,
    size: String
  },
  data() {
    return {
      itemClass: {
        marginRight: this.size + "rem",
        width: this.size + "rem",
        height: this.size + "rem"
      }
    };
  },
  computed: {
    itemClasses() {
      let result = [];
      let score = Math.floor(this.score * 2) / 2;
      let hasDecimal = score % 1 !== 0;
      let integer = Math.floor(score);
      for (let i = 0; i < integer; i++) {
        result.push(CLS_ON);
      }
      if (hasDecimal) {
        result.push(CLS_HALF);
      }
      while (result.length < LENGTH) {
        result.push(CLS_OFF);
      }
      return result;
    }
  }
};
</script>
<style lang="stylus" scoped>
.star {
  .star-item {
    display: inline-block;
    background-repeat: no-repeat;
    background-size: 100% 100%;

    &:last-child {
      margin-right: 0 !important;
    }

    &.on {
      background-image: url('./img/star24_on@2x.png');
    }

    &.half {
      background-image: url('./img/star24_half@2x.png');
    }

    &.off {
      background-image: url('./img/star24_off@2x.png');
    }
  }
}
</style>
