<template>
  <div>
    <div class="ratingSelect">
      <div class="ratingType">
        <span @click="select(2)" class="block positive" :class="{'active':selectTypeD===2}">{{desc.all}}<span class="count">{{ratings.length}}</span></span>
        <span @click="select(0)" class="block positive" :class="{'active':selectTypeD===0}">{{desc.positive}}<span class="count">{{positives.length}}</span></span>
        <span @click="select(1)" class="block negative" :class="{'active':selectTypeD===1}">{{desc.negative}}<span class="count">{{negatives.length}}</span></span>
      </div>
      <div @click="toggleContent" class="switch" :class="{'on':onlyContentD}">
        <span class="iconfont icon-check_circle"></span>
        <span class="text">只看有内容的评价</span>
      </div>
    </div>
  </div>
</template>
<script>
const POSITIVE = 0;
const NEGATIVE = 1;
// const ALL = 2;
export default {
  name: "RatingSelect",
  props: {
    ratings: {
      type: Array,
      default() {
        return [];
      }
    },
    selectType: Number,
    onlyContent: Boolean,
    desc: {
      type: Object,
      default() {
        return {
          all: "全部",
          positive: "满意",
          negative: "不满意"
        };
      }
    }
  },
  data() {
    return {
      selectTypeD: 2,
      onlyContentD: false
    };
  },
  computed: {
    positives() {
      return this.ratings.filter(rating => {
        return rating.rateType === POSITIVE;
      });
    },
    negatives() {
      return this.ratings.filter(rating => {
        return rating.rateType === NEGATIVE;
      });
    }
  },
  methods: {
    select(type) {
      this.selectTypeD = type;
      this.$emit("ratingTypeSelect", type);
    },
    toggleContent() {
      this.onlyContentD = !this.onlyContentD;
      this.$emit("contentToggle", this.onlyContentD);
    }
  }
};
</script>
<style lang="stylus" scoped>
.ratingSelect {
  .ratingType {
    padding: 0.36rem 0;
    margin: 0 0.36rem;
    border-bottom: 0.02rem solid rgba(7, 17, 27, 0.1);
    font-size: 0;

    .block {
      display: inline-block;
      padding: 0.16rem 0.24rem;
      margin-right: 0.16rem;
      border-radius: 0.02rem;
      color: rgb(77, 85, 93);
      font-size: 0.24rem;

      &.active {
      }

      .count {
        font-size: 0.16rem;
        margin-left: 0.04rem;
        position: relative;
        top: -0.02rem;
      }

      &.active {
        color: #fff;
      }

      &.positive {
        background: rgba(0, 160, 220, 0.2);

        &.active {
          background: rgb(0, 160, 220);
        }
      }

      &.negative {
        background: rgba(77, 85, 93, 0.2);

        &.active {
          background: rgb(77, 85, 93);
        }
      }
    }
  }

  .switch {
    padding: 0.24rem 0.36rem;
    line-height: 0.48rem;
    border-bottom: 0.02rem solid rgba(7, 17, 27, 0.1);
    color: rgb(147, 153, 159);

    &.on {
      .iconfont {
        color: #00c850;
      }
    }

    .iconfont {
      display: inline-block;
      margin-right: 0.08rem;
      font-size: 0.48rem;
    }

    .text {
      display: inline-block;
      font-size: 0.24rem;
      position: relative;
      top: -0.08rem;
    }
  }
}
</style>
