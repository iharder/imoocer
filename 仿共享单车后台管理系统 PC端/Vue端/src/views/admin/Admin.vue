<template>
  <div>
    <a-row class="container">
      <a-col :span="4" class="nav-left">
        <NavLeft></NavLeft>
      </a-col>
      <a-col :span="20" class="main">
        <Header></Header>
        <a-row class="content"><router-view></router-view></a-row>
        <Footer></Footer>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import Header from "../../components/header/Header.vue";
import Footer from "../../components/footer/Footer.vue";
import NavLeft from "../../components/navLeft/NavLeft.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer,
    NavLeft
  }
};
</script>
<style lang="stylus" scoped>
.container {
  display: flex;

  .nav-left {
    height: calc(100vh);
    border-right: 1px solid #e8e8e8;
  }

  .main {
    flex: 1;
    background: #FAFAFA;

    .content {
      position: relative;
      padding: 20px;
    }
  }
}
</style>

