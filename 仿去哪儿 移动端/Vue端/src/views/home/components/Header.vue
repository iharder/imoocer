<template>
	<div>
		<div class="header">
			<div class="header-left">
				<span class="iconfont icon-fanhui back-icon"></span>
			</div>
			<div class="header-input">
				<span class="iconfont icon-sousuo"></span>
				输入城市/景点/游玩
			</div>
			<router-link to="/city">
				<div class="header-right">
					{{this.city}}
					<span class="iconfont icon-msnui-triangle-down arrow-icon"></span>
				</div>
			</router-link>			
		</div>
	</div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "HomeHeader",
  computed: {
    ...mapState(["city"]),
    ...mapGetters(["doubleCity"])
  }
};
</script>
<style lang="stylus" scoped>
@import '../../../../public/varibles.styl';

.header {
	display: flex;
	font-size: 0.3rem;
	background: $bgColor;
	height: $headerHeight;
	line-height: $headerHeight;
	color: #fff;

	.header-left {
		width: 0.64rem;
		float: left;
		position: relative;

		.back-icon {
			color: #fff;
			position: absolute;
			left: 6px;
			width: 0.64rem;
			font-size: 0.4rem;
		}
	}

	.header-input {
		.icon-sousuo {
			position: absolute;
			left: 0.2rem;
			font-size: 0.34rem;
		}

		font-size: 0.28rem;
		position: relative;
		flex: 1;
		margin-top: 0.12rem;
		margin-left: 0.15rem;
		padding-left: 0.55rem;
		height: 0.6rem;
		line-height: 0.6rem;
		background: #fff;
		border-radius: 0.1rem;
		color: #e4e7ea;
	}

	.header-right {
		box-sizing: border-box;
		float: right;
		padding-left: 0.15rem;
		margin-right: 0.1rem;
		color: #fff;

		.arrow-icon {
			position: relative;
			right: 0.02rem;
			bottom: 0.02rem;
			display: inline-block;
			font-size: 0.24rem;
		}
	}
}
</style>

