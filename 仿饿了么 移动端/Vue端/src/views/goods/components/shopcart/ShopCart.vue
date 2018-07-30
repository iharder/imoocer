<template>
  <div>
    <div class="shopcart">
      <div class="content">
        <div class="content-left" @click="toggleList">
          <div class="logo-wrapper">
            <div class="logo" :class="{'highlight':totalCount>0}">
              <span class="iconfont icon-shopcart"></span>
            </div>
            <div class="num" v-show="totalCount>0"><span>{{totalCount}}</span></div>
          </div>
          <div class="price" :class="{'highlight':totalCount>0}">￥{{totalPrice}}</div>
          <div class="desc">另需配送费￥{{deliveryPrice}}元</div>
        </div>
        <div class="content-right" @click="toggleList">
          <div class="pay" :class="payClass" @click.stop.prevent="pay">
            <span>{{payDesc}}</span>
          </div>
        </div>
        <div class="shopcart-list" :class="show" v-show="totalCount>0">
          <div class="list-header">
          <h1 class="title">购物车</h1>
            <span class="empty" @click="empty">清空</span>
          </div>
          <div class="list-content" ref="shopListWrapper">
          <ul>
            <li class="food" v-for="(food,index) of selectFoods" :key="index+'selectFood'">
              <span class="name">{{food.name}}</span>
              <div class="price">
                <span>￥{{food.price*food.count}}</span>
              </div>
                <div class="cartcontrolWrapper">
                <CartControl :food="food"></CartControl>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="list-mask" v-show="maskShow" :class="maskShowClass" @click="hideMask"></div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
import CartControl from "../../common/cartcontrol/CartControl";
export default {
  name: "ShopCart",
  data() {
    return {
      show: "",
      maskShowClass: ""
    };
  },
  mounted() {
    this.shopListScroll = new BScroll(this.$refs.shopListWrapper, {
      click: true
    });
  },
  methods: {
    toggleList() {
      if (this.totalCount > 0) {
        this.show = this.show == "" ? "show" : "";
        this.maskShowClass = this.maskShowClass == "" ? "maskShowClass" : "";
      }
      return;
    },
    empty() {
      this.selectFoods.forEach(food => {
        food.count = 0;
      });
    },
    hideMask() {
      this.maskShowClass = "";
      this.show = "";
    },
    pay() {
      if (this.totalPrice < this.minPrice) {
        return;
      }
      window.alert(`支付${this.totalPrice}元`);
    }
  },
  props: {
    selectFoods: {
      type: Array
    },
    deliveryPrice: {
      type: Number,
      default: 0
    },
    minPrice: {
      type: Number,
      default: 20
    }
  },
  computed: {
    totalPrice() {
      let total = 0;
      this.selectFoods.forEach(food => {
        total += food.price * food.count;
      });
      return total;
    },
    totalCount() {
      let count = 0;
      this.selectFoods.forEach(food => {
        count += food.count;
      });
      return count;
    },
    payDesc() {
      if (this.totalPrice === 0) {
        return `￥${this.minPrice}元起送`;
      } else if (this.totalPrice < this.minPrice) {
        let diff = this.minPrice - this.totalPrice;
        return `还差￥${diff}元起送`;
      } else {
        return "去结算";
      }
    },
    payClass() {
      if (this.totalPrice < this.minPrice) {
        return "not-enough";
      } else {
        return "enough";
      }
    },
    maskShow() {
      if (this.totalCount > 0 && this.show == "show") {
        return true;
      }
      return false;
    }
  },
  watch: {
    totalCount(curVal) {
      if (curVal == 0) {
        this.show = "";
        this.maskShowClass = "";
      }
    }
  },
  components: {
    CartControl
  }
};
</script>
<style lang="stylus" scoped>
.shopcart {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 50;
  width: 100%;
  height: 0.96rem;
  color: rgba(255, 255, 255, 0.4);

  .content {
    display: flex;
    background: #141d27;

    .content-left {
      flex: 1;

      .logo-wrapper {
        display: inline-block;
        position: relative;
        top: -0.2rem;
        margin: 0 0.24rem;
        padding: 0.12rem;
        width: 1.12rem;
        height: 1.12rem;
        box-sizing: border-box;
        border-radius: 50%;
        background: #141d27;

        .logo {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: rgb(43, 53, 60);
          text-align: center;

          &.highlight {
            background: rgb(0, 160, 220);

            .icon-shopcart {
              color: #fff;
            }
          }

          .icon-shopcart {
            font-size: 0.48rem;
            color: #80858a;
            line-height: 0.88rem;
          }
        }

        .num {
          position: absolute;
          top: 0;
          right: 0;
          width: 0.48rem;
          height: 0.32rem;
          line-height: 0.32rem;
          text-align: center;
          border-radius: 0.32rem;
          font-size: 0.18rem;
          font-weight: 400;
          color: #fff;
          background: rgb(240, 20, 20);
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);

          span {
            position: relative;
            top: 0.014rem;
          }
        }
      }

      .price {
        display: inline-block;
        margin-top: 0.29rem;
        padding-right: 0.24rem;
        box-sizing: border-box;
        border-right: 0.02rem solid rgba(255, 255, 255, 0.1);
        font-size: 0.32rem;
        font-weight: 700;
        position: relative;
        top: -0.02rem;
        vertical-align: top;

        &.highlight {
          color: #fff;
        }
      }

      .desc {
        vertical-align: top;
        display: inline-block;
        height: 0.48rem;
        margin: 0.35rem 0 0 0.24rem;
        font-size: 0.2rem;
      }
    }

    .content-right {
      display: inline-block;
      width: 2.1rem;

      .pay {
        height: 0.96rem;
        line-height: 0.96rem;
        text-align: center;
        font-size: 0.24rem;
        font-weight: 700;

        &.not-enough {
          background: #2b333b;
        }

        &.enough {
          background: #00b43c;
          color: #fff;
        }
      }
    }
  }

  .shopcart-list {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    transition: all 0.2s linear;
    color: #000;
    transform: translateY(0);
    z-index: -1;

    &.show {
      transform: translateY(-100%);
    }

    .list-header {
      height: 0.8rem;
      line-height: 0.8rem;
      padding: 0 0.36rem;
      background: #f3f5f7;
      border-bottom: 1px solid rgba(7, 17, 27, 0.1);
      border-top: 1px solid #eaeaea;
      position: relative;
      top: 0.02rem;

      .title {
        float: left;
        font-size: 0.28rem;
        color: rgb(7, 17, 27);
      }

      .empty {
        float: right;
        font-size: 0.24rem;
        color: rgb(0, 160, 220);
      }
    }

    .list-content {
      display: block;
      padding: 0 0.36rem;
      background: #fff;
      overflow: hidden;
      max-height: 4rem;

      .food {
        position: relative;
        padding: 12px 0;
        box-sizing: border-box;
        border-bottom: 1px solid rgba(7, 17, 27, 0.1);

        .name {
          line-height: 0.48rem;
          font-size: 0.28rem;
          color: rgb(7, 17, 27);
        }

        .price {
          position: absolute;
          right: 1.8rem;
          bottom: 0.24rem;
          line-height: 0.48rem;
          font-size: 0.28rem;
          font-weight: 700;
          color: rgb(240, 20, 20);
        }

        .cartcontrolWrapper {
          position: absolute;
          right: 0;
          bottom: 0.43rem;
        }
      }
    }
  }
}

.list-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 40;
  transition: all 0.4s ease-in;
  backdrop-filter: blur(0.2rem);
  opacity: 0;

  &.maskShowClass {
    opacity: 1;
    background: rgba(7, 17, 27, 0.6);
  }
}
</style>
