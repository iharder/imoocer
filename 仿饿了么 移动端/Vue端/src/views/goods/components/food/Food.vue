<template>
  <div class="food" v-show="showFlag" :class="foodFade" ref="food">
    <div>
      <div class="food-content">
        <div class="image-header">
          <img :src="food.image" alt="">
          <div class="back" @click="hide">
            <span class="iconfont icon-arrow-left"></span>
          </div> 
        </div>
        <div class="content">
          <div class="title">{{food.name}}</div>
          <div class="detail">
            <span class="sell-count">月售{{food.sellCount}}份</span>
            <span class="rating">好评率{{food.rating}}%</span>
          </div>
          <div class="price">
            <span class="new">￥{{food.price}}</span>
            <span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
          </div>
          <div class="cartcontrol-wrapper" v-show="food.count || food.count !== 0">
            <CartControl :food="food"></CartControl>
          </div>
          <div class="buy" v-show="!food.count || food.count === 0" @click="addFirst()">
            加入购物车
          </div>
        </div>
      </div>
      <Split v-if="food.info"></Split>
      <div class="info" v-if="food.info">
        <div class="title">商品信息</div>
        <p class="text">{{food.info}}</p>
      </div>
      <Split></Split>
      <div class="rating">
        <h1 class="title">商品评价</h1>
        <RatingSelect :onlyContent="onlyContent"  :desc="desc" :ratings="food.ratings" @ratingTypeSelect="ratingTypeSelect" @contentToggle="contentToggle"></RatingSelect>
        <div class="rating-wrapper">
          <ul v-show="food.ratings && food.ratings.length">
            <li v-show="needShow(rating.rateType,rating.text)" v-for="(rating,index) in food.ratings" class="rating-item" :key="'rating'+index">
              <div class="user">
                <span class="name">{{rating.username}}</span>
                <img class="avatar" width="12" height="12" :src="rating.avatar">
              </div>
              <div class="time">{{rating.rateTime | formatDate}}</div>
              <p class="text">
                <span class="iconfont" :class="{'icon-thumbup':rating.rateType===0,'icon-thumbdown':rating.rateType===1}"></span>{{rating.text}}
              </p>
            </li>
          </ul>
          <div class="no-rating" v-show="!food.ratings || !food.ratings.length">暂无评价</div>
        </div>
      </div>
      <div class="kong">
      </div>
    </div>    
  </div>
</template>
<script>
import Bscroll from "better-scroll";
import CartControl from "../../common/cartcontrol/CartControl";
import Vue from "vue";
import Split from "../../../../common/split/Split";
import RatingSelect from "../../../../common/ratingSelect/RatingSelect";
import { formatDate } from "../../../../utils/date";
const POSITIVE = 0;
// const NEGATIVE = 1;
const ALL = 2;
export default {
  name: "GoodsFood",
  props: {
    food: Object
  },
  data() {
    return {
      showFlag: true,
      foodFade: "",
      selectType: ALL,
      onlyContent: true,
      desc: {
        all: "全部",
        positive: "推荐",
        negative: "吐槽"
      }
    };
  },
  components: {
    CartControl,
    Split,
    RatingSelect
  },
  filters: {
    formatDate(time) {
      let date = new Date(time);
      return formatDate(date, "yyyy-MM-dd hh:mm");
    }
  },
  methods: {
    ratingTypeSelect(type) {
      this.selectType = type;
      this.$nextTick(() => {
        this.scroll.refresh();
      });
    },
    contentToggle(type) {
      this.onlyContent = type;
      this.$nextTick(() => {
        this.scroll.refresh();
      });
    },
    addFirst() {
      Vue.set(this.food, "count", 1);
    },
    show() {
      // this.showFlag = this.showFlag == false ? true : false;
      this.foodFade = "foodFade";
      this.selectType = POSITIVE;
      this.onlyContent = false;
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new Bscroll(this.$refs.food, {
            click: true
          });
        } else {
          this.scroll.refresh();
        }
      });
    },
    hide() {
      this.foodFade = "";
    },
    needShow(type, text) {
      if (this.onlyContent && !text) {
        return false;
      }
      if (this.selectType === ALL) {
        return true;
      } else {
        return type === this.selectType;
      }
    }
  }
};
</script>
<style lang="stylus" scoped>
.kong {
}

.food {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0.9rem;
  z-index: 30;
  width: 100%;
  background: #fff;
  transform: translateX(100%);
  transition: all 0.2s linear;

  &.foodFade {
    transform: translateX(0);
  }

  .image-header {
    position: relative;
    height: 0;
    width: 100%;
    padding-top: 100%;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    .back {
      position: absolute;
      top: 0.4rem;
      left: 0.2rem;

      .icon-arrow-left {
        display: block;
        font-size: 0.5rem;
        font-weight: 600;
        color: #fff;
      }
    }
  }

  .content {
    padding: 0.36rem;
    position: relative;

    .title {
      line-height: 0.28rem;
      margin-bottom: 0.16rem;
      font-size: 0.28rem;
      font-weight: 700;
      color: rgb(7, 17, 27);
    }

    .detail {
      margin-bottom: 0.36rem;
      line-height: 0.2rem;
      font-size: 0;
      height: 0.2rem;

      .sell-count, .rating {
        font-size: 0.2rem;
        color: rgb(147, 153, 159);
      }

      .sell-count {
        margin-right: 0.24rem;
      }
    }

    .price {
      font-weight: 700;
      line-height: 0.48rem;

      .new {
        margin-right: 0.36rem;
        font-size: 0.28rem;
        color: rgb(240, 20, 20);
      }

      .old {
        text-decoration: line-through;
        font-size: 0.2rem;
        color: rgb(147, 153, 159);
      }
    }

    .cartcontrol-wrapper {
      position: absolute;
      right: 0.42rem;
      bottom: 0.58rem;
    }

    .buy {
      position: absolute;
      right: 0.36rem;
      bottom: 0.36rem;
      z-index: 10;
      height: 0.48rem;
      line-height: 0.48rem;
      padding: 0 0.24rem;
      box-sizing: border-box;
      font-size: 0.2rem;
      border-radius: 0.24rem;
      color: #fff;
      background: rgb(0, 160, 220);
    }
  }

  .info {
    padding: 0.2rem;

    .title {
      line-height: 0.28rem;
      margin-bottom: 0.12rem;
      font-size: 0.28rem;
      color: rgb(7, 17, 27);
    }

    .text {
      line-height: 0.48rem;
      padding: 0 0.16rem;
      font-size: 0.24rem;
      color: rgb(77, 85, 93);
    }
  }

  .rating {
    padding-top: 0.36rem;

    .title {
      line-height: 0.28rem;
      margin-bottom: 0.12rem;
      margin-left: 0.36rem;
      font-size: 0.28rem;
      color: rgb(7, 17, 27);
    }

    .rating-wrapper {
      padding: 0 0.36rem;

      .rating-item {
        position: relative;
        padding: 0.32rem 0;
        border-bottom: 1px solid rgba(7, 17, 27, 0.1);

        .user {
          position: absolute;
          right: 0;
          top: 0.32rem;
          line-height: 0.24rem;
          font-size: 0;

          .name {
            display: inline-block;
            font-size: 10px;
            color: rgb(147, 153, 159);
            margin-right: 0.12rem;
            position: relative;
            top: -0.04rem;
          }

          .avatar {
            border-radius: 50%;
            position: relative;
            top: 0.008rem;
          }
        }

        .time {
          margin-bottom: 0.12rem;
          line-height: 0.24rem;
          font-size: 0.2rem;
          color: rgb(147, 153, 159);
        }

        .text {
          line-height: 0.32rem;
          font-size: 0.24rem;
          color: rgb(7, 17, 27);

          .iconfont {
            margin-right: 0.08rem;
            line-height: 0.32rem;
            font-size: 0.24rem;
          }

          .icon-thumbup {
            color: rgb(0, 160, 220);
          }

          .icon-thumbdown {
          }
        }
      }

      .no-rating {
        font-size: 0.24rem;
        padding: 0.36rem 0;
        color: rgb(147, 153, 159);
      }
    }
  }
}
</style>
