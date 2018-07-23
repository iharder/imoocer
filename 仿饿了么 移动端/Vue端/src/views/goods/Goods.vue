<template>
  <div class="goods">
    <div class="menu-wrapper" ref="menuWrapper">
      <ul>
        <li v-for="(item,index) in goods" :key="item.name" class="menu-item" :class="{'current':currentIndex===index}" @click="selectMenu(index,$event)">
          <span class="text">
          <span v-if="item.type>0" class="icon" :class="classMap[item.type]"></span>{{item.name}}
          </span>
        </li>
      </ul>
    </div>
     <div class="foods-wrapper" ref="foodsWrapper">    
      <ul>
        <li class="food-list food-list-hook" v-for="(item,index) in goods" :key="index">
          <h1 class="title">{{item.name}}</h1>
          <ul>
            <li class="food-item" v-for="food in item.foods" :key="food.name">
                 <div class="icon">
                   <img :src="food.icon" alt="">
                 </div>
                 <div class="content">
                   <h2 class="name">{{food.name}}</h2>
                   <p class="desc">{{food.description}}</p>
                   <div class="extra">
                     <span class="count">月售{{food.sellCount}}份</span>
                     <span>好评率{{food.rating}}%</span>
                   </div>
                   <div class="price">
                     <span class="now">￥{{food.price}}</span>
                    <span class="old" v-if="food.oldPrice">￥{{food.oldPrice}}</span>
                  </div>
                 </div>
             </li>
          </ul>
        </li>
      </ul>   
    </div>
  </div>  
</template>
<script>
const ERR_OK = 0;
import axios from "axios";
import BScroll from "better-scroll";
export default {
  name: "Goods",
  data() {
    return {
      goods: [],
      classMap: [],
      listHeight: [],
      scrollY: 0
    };
  },
  props: {
    seller: {
      type: Object
    }
  },
  computed: {
    currentIndex() {
      for (let i = 0; i < this.listHeight.length; i++) {
        let height1 = this.listHeight[i];
        let height2 = this.listHeight[i + 1];
        if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
          return i;
        }
      }
      return 0;
    }
  },
  methods: {
    _initScroll() {
      this.menuScroll = new BScroll(this.$refs.menuWrapper, {
        click: true
      });
      this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {
        click: true,
        probeType: 3
      });
      this.foodsScroll.on("scroll", pos => {
        this.scrollY = Math.abs(Math.round(pos.y));
      });
    },
    _calculateHeight() {
      let foodList = this.$refs.foodsWrapper.getElementsByClassName(
        "food-list-hook"
      );
      let height = 0;
      this.listHeight.push(height);
      for (let i = 0; i < foodList.length; i++) {
        height += foodList[i].clientHeight;
        this.listHeight.push(height);
      }
    },
    selectMenu(index, event) {
      //如果为PC不支持事件，则跳过
      if (!event._constructed) {
        return;
      }
      let foodList = this.$refs.foodsWrapper.getElementsByClassName(
        "food-list-hook"
      );
      let el = foodList[index];
      this.foodsScroll.scrollToElement(el, 300);
    }
  },
  created() {
    axios
      .get("https://qddd.oss-cn-hangzhou.aliyuncs.com/eLeme/good.json")
      .then(res => {
        if (res.data.errno == ERR_OK) {
          this.goods = res.data.data;
          this.$nextTick(() => {
            this._initScroll();
            this._calculateHeight();
          });
        }
      });
    this.classMap = ["decrease", "discount", "special", "invoice", "guarantee"];
  }
};
</script>
<style lang="stylus" scoped>
li {
  cursor: pointer;
}

.goods {
  display: flex;
  position: absolute;
  width: 100%;
  top: 3.48rem;
  bottom: 0.92rem;
  overflow: hidden;

  .menu-wrapper {
    width: 1.6rem;
    background: #f3f5f7;
    flex: 0 0 1.6rem;
    overflow: hidden;

    ul {
      .menu-item {
        display: table;
        height: 1.08rem;
        width: 1.12rem;
        padding: 0 0.24rem;
        line-height: 0.28rem;

        &.current {
          position: relative;
          margin-top: -0.02rem;
          z-index: 10;
          background: #fff;
          font-weight: 700;

          .text {
            border: none;
          }
        }

        .icon {
          display: inline-block;
          width: 0.24rem;
          height: 0.24rem;
          margin-right: 0.08rem;
          background-size: 0.24rem 0.24rem;
          background-repeat: no-repeat;
          position: relative;
          top: 0.04rem;

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
          text-align: center;
          font-size: 0.24rem;
          display: table-cell;
          width: 1.12rem;
          vertical-align: middle;
          border-bottom: 1px solid rgba(7, 17, 27, 0.1);
        }

        &:last-child {
          border: none;
        }
      }
    }
  }

  .foods-wrapper {
    flex: 1;
    overflow: hidden;

    .title {
      padding-left: 0.28rem;
      height: 0.52rem;
      line-height: 0.52rem;
      border-left: 0.04rem solid #d9dde1;
      font-size: 0.24rem;
      color: rgb(147, 153, 159);
      background: #f3f5f7;
    }

    .food-item {
      display: flex;
      margin: 18px;
      border-bottom: 0.02rem solid rgba(7, 17, 27, 0.1);
      padding-bottom: 0.36rem;

      &:last-child {
        margin-bottom: 0;
        border: none;
      }

      .icon {
        flex: 0 0 1.14rem;
        margin-right: 0.2rem;

        img {
          width: 1.14rem;
        }
      }

      .content {
        flex: 1;

        .name {
          margin: 2px 0 8px 0;
          height: 0.28rem;
          line-height: 0.28rem;
          font-size: 0.28rem;
          color: rgb(7, 17, 27);
        }

        .desc, .extra {
          margin-bottom: 0.16rem;
          line-height: 0.2rem;
          font-size: 0.2rem;
          color: rgb(147, 153, 159);

          .count {
            margin-right: 0.24rem;
          }
        }

        .extra {
          display: inline-block;
        }

        .desc {
          line-height: 0.24rem;
        }

        .desc {
          margin-bottom: 0.16rem;
        }

        .price {
          font-weight: 700;
          line-height: 0.48rem;

          .now {
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
      }
    }
  }
}
</style>
