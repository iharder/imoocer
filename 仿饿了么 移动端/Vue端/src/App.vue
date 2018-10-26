<template>
  <div>
    <Header :seller="seller"></Header>
    <div class="tab">
      <router-link tag="div" to="/" class="tab-item">商品</router-link>
      <router-link tag="div" to="/ratings" class="tab-item">评论</router-link>
      <router-link tag="div" to="/sells" class="tab-item">商家</router-link>
    </div>
    <keep-alive>
      <router-view :seller="seller"></router-view>
    </keep-alive>
  </div>
</template>
<script>
import axios from "axios";
import Header from "./components/header/Header";
export default {
  name: "App",
  components: {
    Header
  },
  data() {
    return {
      seller: {}
    };
  },
  mounted() {
    axios
      .get(
        "https://qddd.oss-cn-hangzhou.aliyuncs.com/eLeme/data.json?spm=5176.8466032.bucket-object.dopenurl.4cbb14502NOLEN&file=data.json"
      )
      .then(res => {
        let data = res.data;
        this.seller = data.seller;
      });
  }
};
</script>
<style lang="stylus" scoped>
@import './assets/height.styl';

div {
  font-size: 0.28rem;
}

.tab {
  display: flex;
  width: 100%;
  border-bottom: 0.02rem solid rgba(7, 17, 27, 0.1);

  &-item {
    flex: 1;
    line-height(0.8rem);
    text-align: center;
    font-size: 0.28rem;
    color: rgb(77, 85, 93);
  }

  .router-link-exact-active {
    color: #f01414;
  }
}
</style>

