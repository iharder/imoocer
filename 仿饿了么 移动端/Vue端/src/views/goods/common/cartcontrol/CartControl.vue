<template>
  <div class="cartcontrol">
    <transition name="move">
      <div class="cart-decrease iconfont icon-iconjian" v-show="food.count > 0" @click="decreaseCart"></div>
     </transition> 
     <div class="cart-count" v-show="food.count > 0">{{food.count}}</div>
    <div class="cart-add iconfont icon-iconjia" @click="addCart"></div>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  name: "CartControl",
  props: {
    food: Object
  },
  methods: {
    addCart() {
      if (!this.food.count) {
        Vue.set(this.food, "count", 1);
      } else {
        this.food.count++;
      }
    },
    decreaseCart() {
      if (this.food.count >= 0) {
        this.food.count--;
      }
    }
  }
};
</script>
<style lang="stylus" scoped>
.cartcontrol {
  font-size: 0.48rem;
  position: relative;
  top: 0.2rem;

  .cart-count {
    display: inline-block;
    padding: 0.12rem 0.24rem;
    font-size: 0.26rem;
    position: relative;
    top: 0.04rem;
    color: rgb(147, 153, 159);
  }

  .cart-add {
    text-align: center;
    display: inline-block;
    padding: 0.12rem;
    line-height: 0.2rem;
    color: #fff;
    background: rgb(0, 160, 220);
    border-radius: 50%;
    z-index: 2;
  }

  .cart-decrease {
    text-align: center;
    display: inline-block;
    padding: 0.1rem;
    line-height: 0.2rem;
    border: 0.02rem solid rgb(0, 160, 220);
    color: rgb(0, 160, 220);
    background: #fff;
    border-radius: 50%;
    transition: all 0.2s linear;

    &.move-enter-active {
      opacity: 1;
    }

    &.move-enter, &.move-leave-to {
      opacity: 0;
      transform: translateX(0.22rem);
    }
  }
}
</style>
