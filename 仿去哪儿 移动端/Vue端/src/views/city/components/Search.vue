<template>
	<div>
		<div class="search">
		<input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音" />
	</div>
		<div class="search-content" ref="search" v-show="keyword">
			<ul>
				<li class="search-item" v-for="item of list" :key="item.id" @click="handleCityClick(item.name)">{{item.name}}</li>
				<li class="search-item" v-show="!list.length && show">没有找到匹配数据</li>
			</ul>
		</div>
	</div>  
</template>
<script>
import Bscroll from "better-scroll";
import { mapMutations } from "vuex";
export default {
  name: "CitySearch",
  props: {
    cities: Object
  },
  data() {
    return {
      keyword: "",
      list: [],
      timer: null,
      show: false
    };
  },
  methods: {
    handleCityClick(city) {
      this.changeCity(city);
      this.$router.push("/");
      this.keyword = "";
    },
    ...mapMutations(["changeCity"]),
    iFocusHandle() {
      this.show = true;
    }
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.search, { click: true });
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (!this.keyword) {
        this.show = false;
        this.list = [];
      } else {
        this.timer = setTimeout(() => {
          let result = [];
          for (let i in this.cities) {
            this.cities[i].forEach(value => {
              if (
                value.spell.indexOf(this.keyword) > -1 ||
                value.name.indexOf(this.keyword) > -1
              ) {
                result.push(value);
              }
            });
          }
          this.list = result;
          this.iFocusHandle();
        }, 100);
      }
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../../../../public/varibles.styl';

.search {
  height: 0.72rem;
  padding: 0 0.1rem;
  background: $bgColor;

  .search-input {
    box-sizing: border-box;
    font-size: 0.24rem;
    padding: 0 0.1rem;
    display: block;
    height: 0.62rem;
    line-height: 0.62rem;
    width: 100%;
    text-align: center;
    border-radius: 0.06rem;
    color: #666;
  }
}

.search-content {
  z-index: 1;
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  font-size: 0.28rem;

  .search-item {
    line-height: 0.62rem;
    padding-left: 0.2rem;
    color: #666;
    border-bottom: 1px solid #eaeaea;
  }
}
</style>

