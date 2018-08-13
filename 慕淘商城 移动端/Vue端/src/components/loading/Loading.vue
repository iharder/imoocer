<template>
  <div class="loading" :class="{'loading-inline':inline}">
    <span class="loading-indicator" v-if="indicator==='on'">
      <slot><img src="./img/loading.gif" alt="loading"></slot>
    </span>
    <div class="loading-text" v-if="text">{{text}}</div>
  </div>
</template>
<script>
export default {
  name: "Loading",
  props: {
    indicator: {
      type: String,
      default: "on",
      validator(val) {
        return ["on", "off"].indexOf(val) > -1;
      }
    },
    text: {
      type: String,
      default: "加载中..."
    },
    inline: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../../assets/stylus/mixins.styl';

.loading {
  z-index: 999;
  width: 100%;
  height: 3.66rem;
  flex-center(column);

  &-text {
    margin-top: 0.12rem;
  }

  &.loading-inline {
    flex-direction: row;

    .loading-text {
      margin-top: 0rem;
      margin-left: 0.12rem;
    }
  }
}
</style>
