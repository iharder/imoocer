<template>
  <ul class="list">
		<li class="item" v-for="item of letters" :key="item" :ref="item" @click="handleLetterClick" @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd">{{item}}</li>
	</ul>  
</template>
<script>
export default {
  name: "Alphabet",
  props: {
    cities: Object
  },
  data() {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    };
  },
  updated() {
    this.startY = this.$refs["A"][0].offsetTop;
  },
  computed: {
    letters() {
      const letters = [];
      for (let i in this.cities) {
        letters.push(i);
      }
      return letters;
    }
  },
  methods: {
    handleLetterClick(e) {
      this.$emit("change", e.target.innerHTML);
    },
    handleTouchStart() {
      this.touchStatus = true;
    },
    handleTouchMove(e) {
      // 获取字母的index索引
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
          const height = e.target.clientHeight;
          const touchY = e.touches[0].clientY - 3.6 * height;
          let index = Math.ceil((touchY - this.startY) / height);
          index--;
          if (index >= 0 && index < this.letters.length) {
            this.$emit("change", this.letters[index]);
          }
        });
      }
    },
    handleTouchEnd() {
      this.touchStatus = false;
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../../../../public/varibles.styl';

.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: 0.4rem;
  font-size: 0.28rem;

  .item {
    line-height: 0.44rem;
    height: 0.44rem;
    text-align: center;
    color: $bgColor;
  }
}
</style>
