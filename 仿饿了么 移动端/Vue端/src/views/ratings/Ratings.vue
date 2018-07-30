<template>
  <div class="ratings">
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
    </div>
  </div> 
</template>
<script>
import Star from "../../common/star/Star";
export default {
  name: "Ratings",
  props: {
    seller: {
      type: Object
    }
  },
  components: {
    Star
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
      padding: 0.12rem 0 .12rem 0.48rem;

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
}
</style>
