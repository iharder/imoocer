<template>
  <div class="navbar">
    <div class="navbar-left">
      <slot name="left"></slot>
    </div>
    <div class="navbar-center">
      <slot name="center"></slot>
    </div>
    <div class="navbar-right" v-if="$slots.right">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "Navbar"
};
</script>
<style lang="stylus" scoped>
@import '../../assets/stylus/mixins.styl';

.navbar {
  flex-between();
  height: 1rem;
  background-color: #fff;

  &-left {
    margin-left: 0.2rem;
  }

  &-center {
    flex: 1;
    margin: 0 0.2rem;
  }

  &-right {
    margin-right: 0.2rem;
  }
}
</style>
