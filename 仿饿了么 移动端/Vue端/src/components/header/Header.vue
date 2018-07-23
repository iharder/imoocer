<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img :src="seller.avatar" alt="">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}} / {{seller.deliveryTime}}分钟送达
        </div>
        <div v-if="seller.supports" class="support">
          <span class="icon" :class="classMap[0]"></span>
          <span class="text">在线支付满28减5</span>
        </div>
      </div>
      <div v-if="seller.supports" class="support-count" @click="showDetail">
        <span class="count">{{seller.supports.length}}个</span>
        <span class="iconfont right">&#xe75c;</span>
      </div>
    </div>
    <div class="bullentin-wrapper" @click="showDetail">
      <span class="bulletin-title"></span>
      <span class="bulletin-text">{{seller.bulletin}}</span>
      <span class="iconfont">&#xe75c;</span>
    </div>
    <div class="background">
      <img :src="seller.avatar" width="100%" height="100%" alt="">
    </div>
    <transition name="fade">
      <div v-show="detailShow" class="detail" @click="hideDetail">
        <div class="detail-wrapper">
          <div class="detail-main">
            <h1 class="name">{{seller.name}}</h1>
            <div class="star-wrapper">
              <Star :score="seller.score"/>
            </div>
            <div class="title">
              <div class="line"></div>
              <div class="text">优惠信息</div>
              <div class="line"></div>
            </div>
            <ul v-if="seller.supports" class="supports">
              <li class="support-item" v-for="item in seller.supports" :key="item.description">
                <span class="icon" :class="classMap[item.type]"></span>
                <span class="text">{{item.description}}</span>
              </li>
            </ul>
            <div class="title">
              <div class="line"></div>
              <div class="text">商家公告</div>
              <div class="line"></div>
            </div>
            <div class="bulletin">
              <p class="content" style="line-height:20px">{{seller.bulletin}}</p>
            </div>
          </div>
        </div>
        <span class="iconfont icon-close1" @click="hideDetail"></span>
      </div>
    </transition>
  </div>
</template>
<script>
import Star from "../../common/star/Star.vue";
export default {
  name: "Header",
  props: {
    seller: Object
  },
  components: {
    Star
  },
  data() {
    return {
      detailShow: false
    };
  },
  methods: {
    showDetail() {
      this.detailShow = true;
    },
    hideDetail() {
      this.detailShow = false;
    }
  },
  created() {
    this.classMap = ["decrease", "discount", "special", "invoice", "guarantee"];
  }
};
</script>
<style lang="stylus" scoped>
@import '../../assets/height.styl';

.header {
  color: #fff;
  overflow: hidden;
  position: relative;
  background: rgba(7, 17, 27, 0.5);

  .content-wrapper {
    padding: 0.48rem 0.24rem 0.36rem 0.48rem;
    position: relative;

    .avatar {
      float: left;

      img {
        width: 1.28rem;
        height: 1.28rem;
        border-radius: 0.04rem;
      }
    }

    .content {
      display: block;
      position: relative;
      left: 0.32rem;
      height: 1.28rem;
      top: 0.04rem;

      .title {
        .brand {
          display: inline-block;
          width: 0.6rem;
          height: 0.36rem;
          background-image: url('./img/brand@2x.png');
          background-size: 0.6rem 0.36rem;
          background-repeat: no-repeat;
          margin-right: 0.12rem;
        }

        .name {
          position: relative;
          top: -0.08rem;
          display: inline-block;
          height: 0.36rem;
          font-size: 0.32rem;
          font-weight: bold;
        }
      }

      .description {
        margin-top: 0.16rem;
        font-size: 0.24rem;
        font-weigth: 200;
      }

      .support {
        .icon {
          display: inline-block;
          margin-top: 0.2rem;
          width: 0.24rem;
          height: 0.24rem;
          margin-right: 0.08rem;
          background-size: 0.24rem 0.24rem;
          background-repeat: no-repeat;

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
          vertical-align: bottom;
          display: inline-block;
          font-size: 0.24rem;
          height: 0.24rem;
          position: relative;
          top: -0.05rem;
        }
      }
    }

    .support-count {
      position: absolute;
      right: 0.24rem;
      bottom: 0.36rem;
      height: 0.48rem;
      padding: 0 0.16rem;
      border-radius: 0.28rem;
      background: rgba(0, 0, 0, 0.2);
      text-align: center;
      font-size: 0.2rem;

      .count {
        display: inline-block;
        height: 0.2rem;
        position: relative;
        top: 0.13rem;
        margin-left: 0.04rem;
        vertical-align: top;
      }

      .right {
        display: inline-block;
        height: 0.2rem;
        position: relative;
        top: 0.13rem;
        margin-left: 0.04rem;
      }
    }
  }

  .bullentin-wrapper {
    padding: 0.14rem 0.44rem 0.14rem 0.24rem;
    height: 0.28rem;
    ellipsis();
    position: relative;
    background: rgba(7, 17, 27, 0.2);

    .bulletin-title {
      display: inline-block;
      width: 0.44rem;
      height: 0.24rem;
      position: relative;
      top: 0.03rem;
      background-image: url('./img/bulletin@2x.png');
      background-size: 0.44rem 0.24rem;
      background-repeat: no-repeat;
      margin-right: 0.16rem;
    }

    .bulletin-text {
      position: relative;
      line-height(0.24rem);
      top: -0.027rem;
      font-size: 0.2rem;
    }

    .iconfont {
      position: absolute;
      height: 0.24rem;
      right: 0.2rem;
      bottom: 0.114rem;
    }
  }

  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    filter: blur(0.2rem);
  }

  .detail {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    height: 13.34rem;
    background: rgba(7, 17, 27, 0.8);
    overflow: hidden;
    transition: all 0.5s ease-in;
    backdrop-filter: blur(10px);

    &.fade-enter-active {
      opacity: 1;
      background: rgba(7, 17, 27, 0.8);
    }

    &.fade-enter, &.fade-leave-to {
      opacity: 0;
      background: rgba(7, 17, 27, 0);
    }

    .detail-wrapper {
      height: 12.08rem;
      width: 100%;
      overflow: hidden;

      .detail-main {
        margin-top: 1.28rem;
        padding-bottom: 1.28rem;

        .name {
          font-size: 0.32rem;
          text-align: center;
          font-weight: 700;
        }

        .star-wrapper {
          margin-top: 0.36rem;
          padding: 0.04rem 0;
          text-align: center;
        }

        .title {
          display: flex;
          width: 80%;
          margin: 0.56rem auto 0.48rem auto;

          .line {
            flex: 1;
            position: relative;
            top: -0.14rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          }

          .text {
            padding: 0 0.24rem;
            font-size: 0.28rem;
          }
        }

        .supports {
          width: 80%;
          margin: 0 auto;

          .support-item {
            padding: 0 0.24rem;
            margin-bottom: 0.24rem;

            &:last-child {
              margin-bottom: 0;
            }

            .icon {
              display: inline-block;
              width: 0.32rem;
              height: 0.32rem;
              margin-right: 0.24rem;
              background-size: 0.32rem 0.32rem;
              background-repeat: no-repeat;

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
              vertical-align: top;
              position: relative;
              top: 0.03rem;
            }
          }
        }

        .bulletin {
          width: 80%;
          margin: 0 auto;

          .content {
            padding: 0 0.24rem;
            font-size: 0.24rem;
            text-indent: 2em;
          }
        }
      }
    }

    .icon-close1 {
      position: fixed;
      top: 0.2rem;
      right: 0.2rem;
      width: 0.64rem;
      height: 0.64rem;
      font-size: 0.64rem;
      color: rgba(255, 255, 255, 0.5);
    }
  }
}
</style>
