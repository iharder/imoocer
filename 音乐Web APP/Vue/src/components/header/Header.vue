<template>
  <div class="header">
    <div class="icon"></div>
    <h1 class="text">Chicken Music</h1>
  </div>
</template>
<script>
export default {
  name: "Header"
};
</script>
<style lang="stylus" scoped>
@import '../../assets/stylus/variable';
@import '../../assets/stylus/mixin';

.header {
  position: relative;
  height: 0.88rem;
  text-align: center;
  color: $color-theme;
  font-size: 0;

  .icon {
    display: inline-block;
    margin-top: 0.12rem;
    width: 0.6rem;
    height: 0.64rem;
    margin-right: 0.18rem;
    background-image: url('./img/logo.png');
    background-size: 0.6rem 0.64rem;
  }

  .text {
    display: inline-block;
    position: relative;
    bottom: 0.15rem;
    font-size: $font-size-large;
  }
}
</style>
