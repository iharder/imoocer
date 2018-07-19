<template>
  <div>
		<keep-alive exclude="detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import Home from "./views/home/Home.vue";

export default {
  name: "App",
  components: {
    Home
  }
};
</script>
<style>
</style>
