<template>
	<div>
    <DetailBanner :sightName="sightName" :bannerImg="bannerImg" :bannerImgs="gallaryImgs"/>
    <DetailHeader />
    <div class="content">
      <DetailList :list="list"/>
    </div>
  </div>
</template>
<script>
import DetailBanner from "./components/Banner";
import DetailHeader from "./components/Header";
import DetailList from "./components/List";
import axios from "axios";
export default {
  name: "Detail",
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data() {
    return {
      sightName: "",
      bannerImg: "",
      gallaryImgs: [],
      list: []
    };
  },
  methods: {
    getDetailInfo() {
      axios
        .get("https://qddd.oss-cn-hangzhou.aliyuncs.com/qunaer/detail.json", {
          params: {
            id: this.$route.params.id
          }
        })
        .then(this.handleGetDataSucc);
    },
    handleGetDataSucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        let data = res.data;
        this.sightName = data.sightName;
        this.bannerImg = data.bannerImg;
        this.gallaryImgs = data.gallaryImgs;
        this.list = data.categoryList;
      }
    }
  },
  mounted() {
    this.getDetailInfo();
  }
};
</script>
<style lang="stylus" scoped>
.content {
  height: 50rem;
}
</style>
