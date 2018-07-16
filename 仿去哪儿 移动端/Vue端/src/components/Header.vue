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
			城市
			<span class="iconfont icon-msnui-triangle-down arrow-icon"></span>
		</div>
  </div>
</div>
</template>
<script>


export default {
  name: "HomeHeader"
};
</script>
<style lang="stylus" scoped>
@import '../../public/varibles.styl';

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
			margin-left: 0.18rem;
			font-size: 0.4rem;
		}
	}

	.header-input {
		flex: 1;
		margin-top: 0.12rem;
		margin-left: 0.2rem;
		padding-left: 0.2rem;
		height: 0.64rem;
		line-height: 0.64rem;
		background: #fff;
		border-radius: 0.1rem;
		color: #ccc;
	}

	.header-right {
		box-sizing: border-box;
		width: 1.24rem;
		float: right;
		margin-left: 0.1rem;
		padding-left: 0.1rem;

		.arrow-icon {
			margin-left: -0.04rem;
			font-size: 0.24rem;
		}
	}
}
</style>

