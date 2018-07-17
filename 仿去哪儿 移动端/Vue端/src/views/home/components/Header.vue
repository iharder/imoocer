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
		<div class="header-right">
			{{this.city}}
			<span class="iconfont icon-msnui-triangle-down arrow-icon"></span>
		</div>
  </div>
</div>
</template>
<script>
export default {
  name: "HomeHeader",
  props: {
    city: String
  }
};
</script>
<style lang="stylus" scoped>
@import '../../../../public/varibles.styl';

.header {
	display: flex;
	font-size: 0.3rem;
	background: $bgColor;
	height: 0.86rem;
	line-height: 0.86rem;
	color: #fff;

	.header-left {
		width: 0.64rem;
		float: left;

		.back-icon {
			margin-left: 0.1rem;
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
		width: 1.24rem;
		float: right;
		padding-left: 0.15rem;
		margin-right: 0.1rem;
		position: relative;

		.arrow-icon {
			position: absolute;
			right: 0.15rem;
			font-size: 0.24rem;
		}
	}
}
</style>

