<template>
  <div class="list" ref="wrapper">
		<div>
			<div class="area">
				<div class="title">当前城市</div>
				<div class="button-list">
					<div class="button-wrapper">
						<div class="button">
							合肥
						</div>
					</div>
				</div>
			</div>
			<div class="area">
				<div class="title">热门城市</div>
				<div class="button-list">
					<div class="button-wrapper" v-for="item of hot" :key="item.id">
						<div class="button">
							{{item.name}}
						</div>
					</div>	
				</div>
			</div>
			<div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
				<div class="title">{{key}}</div>
				<div class="item-list">
					<div class="item" v-for="innerItem of item" :key="innerItem.id">
						{{innerItem.name}}
					</div>
				</div>
			</div>
		</div> 
  </div>
</template>
<script>
import Bscroll from "better-scroll";
export default {
  name: "CityList",
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper);
  },
  watch: {
    letter() {
      if (this.letter) {
        const element = this.$refs[this.letter][0];
        this.scroll.scrollToElement(element);
      }
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../../../../public/varibles.styl';

.list {
	overflow: hidden;
	font-size: 0.28rem;
	position: absolute;
	top: 1.58rem;
	left: 0;
	right: 0;
	bottom: 0;

	.title {
		line-height: 0.54rem;
		background: #eee;
		padding-left: 0.2rem;
		color: #666;
		border-bottom: 0.01rem solid #ccc;
		border-top: 0.01rem solid #ccc;
		font-size: 0.26rem;
	}

	.button-list {
		padding: 0.1rem 0.6rem 0.1rem 0.1rem;
		overflow: hidden;

		.button-wrapper {
			width: 33.33%;
			float: left;

			.button {
				margin: 0.1rem;
				padding: 0.1rem 0;
				border: 0.02rem solid #ccc;
				border-radius: 0.06rem;
				text-align: center;
			}
		}
	}

	.item-list {
		.item {
			line-height: 0.76rem;
			padding-left: 0.2rem;
			border-bottom: 0.01rem solid #ccc;
		}

		.item:last-of-type {
			border-bottom: none;
		}
	}
}
</style>
