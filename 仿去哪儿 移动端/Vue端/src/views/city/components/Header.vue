<template>
  <div class="header">
		城市选择
		<router-link to="/">
			<span class="iconfont icon-fanhui header-back"></span>
		</router-link>		
	</div>
</template>
<script>
export default {
  name: "CityHeader"
};
</script>
<style lang="stylus" scoped>
@import '../../../../public/varibles.styl';

.header {
	overflow: hidden;
	height: $headerHeight;
	line-height: $headerHeight;
	text-align: center;
	color: #fff;
	background: $bgColor;
	font-size: 0.32rem;
	position: relative;
	font-size: 0.28rem;
	.header-back {
		color: #fff;
		position: absolute;
		left: 0;
		width: 0.64rem;
		font-size: 0.4rem;
	}
}
</style>

