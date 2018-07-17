<template>
  <div>
		<HomeHeader :city="city"/> 
    <Swiper :list="swiperList"/>
    <HomeIcons :list="iconList"/>
    <RecommendIcons :list="recommendList"/>
    <Weekend :list="weekendList"/>
  </div>
</template>
<script>
import HomeHeader from "./components/Header";
import Swiper from "./components/Swiper";
import HomeIcons from "./components/Icons";
import RecommendIcons from "./components/Recommend";
import Weekend from "./components/Weekend";
import axios from "axios";
export default {
  name: "Home",
  components: {
    HomeHeader,
    Swiper,
    HomeIcons,
    RecommendIcons,
    Weekend
  },
  data() {
    return {
      city: "合肥",
      swiperList: [],
      iconList: [],
      recommendList:[],
      weekendList: []
    };
  },
  methods: {
    getHomeInfo() {
      axios
        .get("http://qddd.oss-cn-hangzhou.aliyuncs.com/qunaer/index.json")
        .then(this.getHomeInfoSucc);
    },
    getHomeInfoSucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.swiperList = data.swiperList;
        this.iconList = data.iconList;
        this.recommendList = data.recommendList;
        this.weekendList = data.weekendList;
      }
    }
  },
  mounted() {
    this.getHomeInfo();
  }
};
</script>
<style>
</style>

