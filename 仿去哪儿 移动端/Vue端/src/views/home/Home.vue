<template>
  <div>
		<HomeHeader/> 
    <Swiper/>
    <HomeIcons/>
  </div>
</template>
<script>
import HomeHeader from "../../components/Header";
import Swiper from "../../components/Swiper";
import HomeIcons from "../../components/Icons";
export default {
  name: "Home",
  components: {
    HomeHeader,
    Swiper,
    HomeIcons
  }
};
</script>
<style>
</style>

