<template>
  <div>
    <Header/>
    <Search :cities="cities"/>
    <List :cities="cities" :hot="hotCities" :letter="letter"/>
    <Alphabet :cities="cities" @change="handleLetterChange"/>
  </div>
</template>
<script>
import axios from "axios";
import Header from "./components/Header";
import Search from "./components/Search";
import List from "./components/List";
import Alphabet from "./components/Alphabet";
export default {
  name: "City",
  components: {
    Header,
    Search,
    List,
    Alphabet
  },
  data() {
    return {
      cities: {},
      hotCities: [],
      letter: ""
    };
  },
  methods: {
    getCityInfo() {
      axios
        .get("https://qddd.oss-cn-hangzhou.aliyuncs.com/qunaer/city.json")
        .then(this.handleGetCityInfoSucc);
    },
    handleGetCityInfoSucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.cities = data.cities;
        this.hotCities = data.hotCities;
      }
    },
    handleLetterChange(letter) {
      this.letter = letter;
    }
  },
  mounted() {
    this.getCityInfo();
  }
};
</script>
<style lang="stylus" scoped>
</style>