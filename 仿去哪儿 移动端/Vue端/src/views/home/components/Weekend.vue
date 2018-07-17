<template>
	<div>
		<div class="title">周末去哪儿</div>
		<ul>
			<li  v-for="item of list" :key="item.id">
                <div class="item-img-wrapper">
                  <img class="item-img" :src="item.imgUrl" alt="">  
                </div>	
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
export default {
  name: "HomeRecommend",
  props: {
    list: Array
  }
};
</script>
<style lang="stylus" scoped>
@import '../../../../public/mixins.styl';

.title {
  height: 0.8rem;
  line-height: 0.8rem;
  background: #ccc;
  text-indent: 0.2rem;
  font-size: 0.28rem;
}

.item-img-wrapper {
  height: 2.2rem;
  overflow: hidden;
  font-size: 0.28rem;

  .item-img {
    width: 100%;
    height: 100%;
  }
}

.item-info {
  padding: 0.1rem;

  .item-title {
    line-height: 0.54rem;
    font-size: 0.32rem;
    ellipsis();
  }

  .item-desc {
    line-height: 0.4rem;
    font-size: 0.28rem;
    color: #ccc;
    ellipsis();
  }
}
</style>
