<template>
  <div>
		<HomeHeader /> 
    <Swiper :list="swiperList"/>
    <HomeIcons :list="iconList"/>
    <RecommendIcons :list="recommendList"/>
    <Weekend :list="weekendList"/>
  </div>
</template>
<script>
import HomeHeader from "./components/Header";
import Swiper from "./components/Swiper";
import HomeIcons from "./components/HomeIcons";
import RecommendIcons from "./components/RecommendIcons";
import Weekend from "./components/Weekend";
import axios from "axios";
import { mapState } from "vuex";
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
      lastCity: "",
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    };
  },
  computed: {
    ...mapState(["city"])
  },
  methods: {
    getHomeInfo() {
      axios
        .get(
          "https://qddd.oss-cn-hangzhou.aliyuncs.com/qunaer/index.json?city=" +
            this.city
        )
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
    this.lastCity = this.city;
    this.getHomeInfo();
  },
  activated() {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city;
      this.getHomeInfo();
    }
  }
};
</script>
<style>
</style>

