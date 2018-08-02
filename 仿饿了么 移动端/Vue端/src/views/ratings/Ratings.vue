<template>
  <div class="ratings" ref="rating">
    <div class="ratings-content">
      <div class="overview">
        <div class="overview-left">
          <h1 class="score">{{seller.score}}</h1>
          <div class="title">综合评分</div>
          <div class="rank">高于周边商家{{seller.rankRate}}%</div>
        </div>
        <div class="overview-right">
          <div class="score-wrapper">
            <span class="title">服务态度</span>
            <Star :size="'0.22'" :score="seller.serviceScore"></Star>
            <span class="score">{{seller.serviceScore}}</span>
          </div>
          <div class="score-wrapper">
            <span class="title">商品评分</span>
            <Star :size="'0.22'" :score="seller.foodScore"></Star>
            <span class="score">{{seller.foodScore}}</span>
          </div>
          <div class="delivery-wrapper">
            <span class="title">送达时间</span>
            <span class="delivery">{{seller.deliveryTime}}分钟</span>
          </div>
        </div>
      </div>
      <Split></Split>
      <RatingSelect :onlyContent="onlyContent" :ratings="ratings" @ratingTypeSelect="ratingTypeSelect" @contentToggle="contentToggle"></RatingSelect>
      <div class="rating-wrapper">
        <ul>
          <li v-show="needShow(rating.rateType,rating.text)" class="rating-item" v-for="(rating,index) in ratings" :key="'rating'+index">
            <div class="avatar">
              <img style="width:0.56rem;height:0.56rem;" :src="rating.avatar" alt="">
            </div>
            <div class="content">
              <h1 class="name">{{rating.username}}</h1>
              <div class="star-wrapper">
                <Star size="0.18" :score="rating.score"></Star>
                <span class="delivery" v-if="rating.deliveryTime">{{rating.deliveryTime}}分钟送达</span>
                <p class="text" v-if="rating.text">{{rating.text}}</p>
                <div class="recommend" v-if="rating.recommend && rating.recommend.length">
                  <span class="iconfont icon-thumbup"></span>
                  <span class="item" v-for="(item,index) of rating.recommend" :key="'item'+index">{{item}}</span>
                </div>
                <div class="time">
                  {{rating.rateTime | formatDate}}
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div> 
</template>
<script>
import axios from "axios";
import Star from "../../common/star/Star";
import RatingSelect from "../../common/ratingSelect/RatingSelect";
import Split from "../../common/split/Split";
import { formatDate } from "../../utils/date";
import Bscroll from "better-scroll";
const ALL = 2;
export default {
  name: "Ratings",
  data() {
    return {
      ratings: [],
      selectType: ALL,
      onlyContent: true
    };
  },
  created() {
    axios
      .get("https://qddd.oss-cn-hangzhou.aliyuncs.com/eLeme/ratings.json")
      .then(res => {
        this.ratings = res.data.data;
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new Bscroll(this.$refs.rating, {
              click: true
            });
          } else {
            this.scroll.refresh();
          }
        });
      });
  },
  props: {
    seller: {
      type: Object
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
  },
  filters: {
    formatDate(time) {
      let date = new Date(time);
      return formatDate(date, "yyyy-MM-dd hh:mm");
    }
  },
  components: {
    Star,
    RatingSelect,
    Split
  }
};
</script>
<style lang="stylus" scoped>
.ratings {
  position: absolute;
  top: 3.48rem;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;

  .overview {
    display: flex;
    padding: 0.36rem 0;

    &-left {
      width: 2.74rem;
      border-right: 1px solid rgba(7, 17, 27, 0.1);
      text-align: center;
      padding: 6px 0;

      .score {
        margin-bottom: 0.12rem;
        line-height: 0.56rem;
        font-size: 0.48rem;
        color: rgb(255, 153, 0);
      }

      .title {
        margin-bottom: 0.16rem;
        line-height: 0.24rem;
        font-size: 1;
        color: rgb(7, 17, 27);
      }

      .rank {
        line-height: 0.2rem;
        font-size: 0.2rem;
        color: rgb(147, 153, 159);
      }
    }

    &-right {
      flex: 1;
      padding: 0.12rem 0 0.12rem 0.48rem;

      .score-wrapper {
        margin-bottom: 0.16rem;
        line-height: 0.36rem;
        font-size: 0;

        .title {
          display: inline-block;
          font-size: 0.24rem;
          color: rgb(7, 17, 27);
        }

        .star {
          display: inline-block;
          margin: 0 0.24rem;
          position: relative;
          top: 0.02rem;
        }

        .score {
          font-size: 0.48rem;
          display: inline-block;
          font-size: 0.24rem;
          color: rgb(255, 153, 0);
          position: relative;
          top: 0.009rem;
        }
      }

      .delivery-wrapper {
        font-size: 0;

        .title {
          display: inline-block;
          font-size: 0.24rem;
          color: rgb(7, 17, 27);
        }

        .delivery {
          margin-left: 0.24rem;
          font-size: 0.24rem;
          color: rgb(147, 153, 159);
        }
      }
    }
  }

  .rating-wrapper {
    padding: 0 0.36rem;

    .rating-item {
      display: flex;
      padding: 0.36rem 0;
      border-bottom: 0.02rem solid rgba(7, 17, 27, 0.1);

      .avatar {
        flex: 0 0 0.56rem;
        width: 0.56rem;
        margin-right: 0.24rem;

        img {
          border-radius: 50%;
        }
      }

      .content {
        position: relative;
        flex: 1;

        .name {
          marigin-bottom: 0.08rem;
          line-height: 0.24rem;
          font-size: 0.2rem;
          color: rgb(7, 17, 27);
        }

        .star-wrapper {
          font-size: 0;
          margin-bottom: 0.12rem;

          .star {
            display: inline-block;
            margin-right: 0.12rem;
          }

          .delivery {
            display: inline-block;
            font-size: 0.2rem;
            color: rgb(147, 153, 159);
            position: relative;
            top: -0.02rem;
          }
        }

        .text {
          line-height: 0.36rem;
          color: rgb(7, 17, 27);
          font-size: 0.24rem;
          margin-top: 0.04rem;
        }

        .recommend {
          line-height: 0.32rem;
          margin-top: 0.16rem;

          .iconfont, .item {
            display: inline-block;
            margin: 0 0.16rem 0.1rem 0;
            font-size: 0.24rem;
          }

          .iconfont {
            color: rgb(0, 160, 220);
          }

          .item {
            padding: 0 0.12rem;
            border: 1px solid rgba(7, 17, 27, 0.1);
            border-radius: 1px;
            color: rgb(147, 153, 159);
            background: #fff;
          }
        }

        .time {
          position: absolute;
          top: 0;
          right: 0;
          line-height: 0.24rem;
          font-size: 0.2rem;
          color: rgb(147, 153, 159);
        }
      }
    }
  }
}
</style>
