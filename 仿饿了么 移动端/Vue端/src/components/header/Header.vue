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
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <div v-show="seller.supports" class="support">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div v-show="seller.supports" class="support-count">
        <span class="count">{{seller.supports.length}}个</span>
        <span class="iconfont right">&#xe75c;</span>
      </div>
    </div>
    <div class="bullentin-wrapper">
      <span class="bulletin-title"></span>
      <span class="bulletin-text">{{seller.bulletin}}</span>
      <span class="iconfont">&#xe75c;</span>
    </div>
    <div class="background">
      <img :src="seller.avatar" width="100%" height="100%" alt="">
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  props: {
    seller: Object
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
  position: relative;
  background: rgba(7, 17, 27, 0.5);

  .content-wrapper {
    padding: 0.48rem 0.24rem 0.36rem 0.48rem;
    position: relative;

    .avatar {
      display: inline-block;

      img {
        width: 1.28rem;
        height: 1.28rem;
        border-radius: 0.04rem;
      }
    }

    .content {
      display: inline-block;
      margin-left: 0.32rem;

      .title {
        margin: 0.04rem 0 0.16rem 0;

        .brand {
          display: inline-block;
          width: 0.6rem;
          height: 0.36rem;
          background-image: url('./img/brand@2x.png');
          background-size: 0.6rem 0.36rem;
          background-repeat: no-repeat;
          vertical-align: top;
          position: relative;
          top: -0.075rem;
        }

        .name {
          margin-left: 0.12rem;
          font-size: 0.32rem;
          line-height(0.36rem);
          font-weight: bold;
        }
      }

      .description {
        margin-bottom: 0.2rem;
        line-height(0.24rem);
        font-size: 0.24rem;
      }

      .support {
        .icon {
          display: inline-block;
          position: relative;
          top: 0.05rem;
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
          font-size: 0.24rem;
          line-height(0.24rem);
        }
      }
    }

    .support-count {
      position: absolute;
      right: 0.24rem;
      bottom: 0.36rem;
      line-height(0.48rem);
      padding: 0.24rem 0.16rem;
      border-radius: 0.28rem;
      background: rgba(0, 0, 0, 0.2);
      text-align: center;
      font-size: 0.2rem;

      .count {
        position: relative;
        top: 0.02rem;
        margin-left: 0.04rem;
      }

      .right {
        position: relative;
        top: 0.02rem;
        margin-left: 0.04rem;
      }
    }
  }

  .bullentin-wrapper {
    padding: 0.14rem 0.44rem 0.14rem 0.24rem;
    ellipsis();
    position: relative;
    background: rgba(7, 17, 27, 0.2);

    .bulletin-title {
      display: inline-block;
      width: 0.44rem;
      position: relative;
      top: 0.05rem;
      height: 0.24rem;
      background-image: url('./img/bulletin@2x.png');
      background-size: 0.44rem 0.24rem;
      background-repeat: no-repeat;
      margin-right: 0.16rem;
    }

    .bulletin-text {
      font-size: 10px;
    }

    .iconfont {
      position: absolute;
      right: 0.2rem;
      bottom: 0.16rem;
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
}
</style>
