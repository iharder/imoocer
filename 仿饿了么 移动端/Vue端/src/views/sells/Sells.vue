<template>
  <div class="seller" ref="sell">
    <div class="seller-content">
      <div class="overview">
        <h1 class="title">{{seller.name}}</h1>
        <div class="desc">
          <Star size="0.24" :score="seller.score"></Star>
          <span class="text">({{seller.ratingCount}})</span>
          <span class="text">月售{{seller.sellCount}}单</span>
        </div>
        <ul class="remark">
          <li class="block">
            <h2>起送价</h2>
            <div class="content">
              <span class="stress">{{seller.minPrice}}</span>元
            </div>
          </li>
          <li class="block">
            <h2>商家配送</h2>
            <div class="content">
              <span class="stress">{{seller.deliveryPrice}}</span>元
            </div>
          </li>
          <li class="block">
            <h2>平均配送时间</h2>
            <div class="content">
              <span class="stress">{{seller.deliveryTime}}</span>元
            </div>
          </li>
        </ul>
      </div>
      <Split></Split>
      <div class="bulletin">
        <h1 class="item">公告与活动</h1>
        <div class="content-wrapper">
          <p class="content">{{seller.bulletin}}</p>
        </div>
        <ul v-if="seller.supports" class="supports">
          <li class="support-item" v-for="item in seller.supports" :key="item.description">
            <span class="icon" :class="classMap[item.type]"></span>
            <span class="text">{{item.description}}</span>
          </li>
        </ul>    
      </div>
      <Split></Split>
      <div class="pics">
        <h1 class="title">商家实景</h1>
        <div class="pic-wrapper" ref="picWrapper">
          <ul class="pic-list" ref="picList">
            <li class="pic-item" v-for="(pic,index) in seller.pics" :key="'pic-item'+index">
              <img :src="pic" alt="">
            </li>
          </ul>
        </div>
      </div>
      <Split></Split>
      <div class="info">
        <h1 class="title">商家信息</h1>
        <ul>
          <li class="info-item" v-for="(info,index) of seller.infos" :key="'info'+index">
            {{info}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Star from "../../common/star/Star";
import Split from "~/common/split/Split";
import Bscroll from "better-scroll";
export default {
  name: "Sells",
  props: {
    seller: Object
  },
  data() {
    return {
      imgWidth: "",
      imgMargin: ""
    };
  },
  components: {
    Star,
    Split
  },
  created() {
    this.classMap = ["decrease", "discount", "special", "invoice", "guarantee"];
    this.$nextTick(() => {
      if (!this.scroll) {
        this.scroll = new Bscroll(this.$refs.sell, {
          click: true
        });
      } else {
        this.scroll.refresh();
      }
      if (this.seller.pics) {
        let picWidth = parseFloat(120 / 50);
        let margin = parseFloat(6 / 50);
        let width = (picWidth + margin) * this.seller.pics.length - margin;
        this.$refs.picList.style.width = width + "rem";
        if (!this.picScroll) {
          this.$nextTick(() => {
            this.picScroll = new Bscroll(this.$refs.picWrapper, {
              scrollX: true,
              eventPassthrough: "vertical",
              click: true
            });
          });
        } else {
          this.picScroll.refresh();
        }
      }
    });
  }
};
</script>
<style lang="stylus" scoped>
.seller {
  position: absolute;
  top: 3.48rem;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;

  .overview {
    padding: 0.36rem;

    .title {
      margin-bottom: 0.16rem;
      line-height: 0.28rem;
      color: rgb(7, 17, 27);
      font-size: 0.28rem;
    }

    .desc {
      padding-bottom: 0.2rem;
      line-height: 0.36rem;
      font-size: 0;
      border-bottom: 0.02rem solid rgba(7, 17, 27, 0.1);

      .star {
        display: inline-block;
        margin-right: 0.16rem;
      }

      .text {
        display: inline-block;
        margin-right: 0.24rem;
        font-size: 0.2rem;
        color: rgb(77, 85, 93);
        position: relative;
        top: -0.04rem;
      }
    }

    .remark {
      display: flex;
      padding-top: 0.36rem;

      .block {
        flex: 1;
        text-align: center;
        border-right: 0.02rem solid rgba(7, 17, 27, 0.1);

        &:last-child {
          border: none;
        }

        h2 {
          margin-bottom: 0.08rem;
          line-height: 0.2rem;
          font-size: 0.2rem;
          color: rgb(147, 153, 159);
        }

        .content {
          line-height: 0.48rem;
          font-size: 0.2rem;
          color: rgb(7, 17, 27);

          .stress {
            font-size: 0.48rem;
          }
        }
      }
    }
  }

  .bulletin {
    padding: 0.36rem 0.36rem 0 0.36rem;

    .title {
      margin-bottom: 0.16rem;
      line-height: 0.28rem;
      color: rgb(7, 17, 27);
      font-size: 0.28rem;
    }

    .content-wrapper {
      padding: 0.1rem 0.24rem 0.32rem 0.24rem;
      border-bottom: 0.02rem solid rgba(7, 17, 27, 0.1);

      .content {
        font-size: 0.24rem;
        line-height: 0.48rem;
        color: rgb(240, 20, 20);
      }
    }

    .supports {
      .support-item {
        padding: 0.32rem 0.24rem;
        border-bottom: 0.02rem solid rgba(7, 17, 27, 0.1);
        font-size: 0;

        &:last-child {
          margin-bottom: 0;
          border: none;
        }

        .icon {
          display: inline-block;
          width: 0.32rem;
          height: 0.32rem;
          margin-right: 0.24rem;
          background-size: 0.32rem 0.32rem;
          background-repeat: no-repeat;
          vertical-align: top;

          &.decrease {
            background-image: url('./img/decrease_1@2x.png');
          }

          &.discount {
            background-image: url('./img/discount_1@2x.png');
          }

          &.guarantee {
            background-image: url('./img/guarantee_1@2x.png');
          }

          &.invoice {
            background-image: url('./img/invoice_1@2x.png');
          }

          &.special {
            background-image: url('./img/special_1@2x.png');
          }
        }

        .text {
          position: relative;
          font-size: 0.3rem;
          line-height: 0.4rem;
          position: relative;
          top: -0.03rem;
        }
      }
    }
  }

  .pics {
    padding: 0.36rem;

    .title {
      margin-bottom: 0.24rem;
      line-height: 0.28rem;
      color: rgb(7, 17, 27);
      font-size: 0.28rem;
    }

    .pic-wrapper {
      width: 100%;
      overflow: hidden;
      white-space: nowrap;

      .pic-list {
        font-size: 0;

        .pic-item {
          display: inline-block;
          margin-right: 0.12rem;
          width: 2.4rem;
          height: 1.8rem;

          &:last-child {
            margin: 0;
          }

          img {
            width: 2.4rem;
            height: 1.8rem;
          }
        }
      }
    }
  }

  .info {
    padding: 0.36rem 0.36rem 0 0.36rem;
    color: rgb(7, 17, 27);

    .title {
      padding-bottom: 0.24rem;
      line-height: 0.28rem;
      border-bottom: 1px solid rgba(7, 17, 27, 0.1);
      font-size: 0.28rem;
    }

    .info-item {
      padding: 0.32rem 0.24rem;
      line-height: 0.32rem;
      border-bottom: 1px solid rgba(7, 17, 27, 0.1);
      font-size: 0.24rem;

      &:last-child {
        border: none;
      }
    }
  }
}
</style>
