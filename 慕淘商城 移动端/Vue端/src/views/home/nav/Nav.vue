<template>
  <nav class="nav">
    <ul class="nav-list">
      <li
        class="nav-item"
        v-for="(item, index) in navs"
        :key="index+'nav-item'">
        <a :href="item.linkUrl" class="nav-link">
          <img :src="item.picUrl" class="nav-pic">
          <span>{{item.text}}</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { navItems } from "./config";

export default {
  name: "Nav",
  created() {
    this.navs = navItems;
  }
};
</script>

<style lang="stylus" scoped>
@import '../../../assets/stylus/mixins.styl';

.nav {
  width: 100%;
  padding-top: 0.3rem;
  background-color: #fff;

  &-list {
    display: flex;
    flex-wrap: wrap;
  }

  &-item {
    width: 20%;
    margin-bottom: 0.3rem;
  }

  &-link {
    flex-center(column);
  }

  &-pic {
    width: 60%;
    margin-bottom: 0.16rem;
  }
}
</style>
