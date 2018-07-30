<template>
  <div class="gutter-example">
    <a-row :gutter="10">
      <a-col :span="4" v-for="(list,index) of imgs" :key="index">
        <a-card hoverable v-for="item of list" :key="item">
          <img
            alt="example"
            :src="require('./img/'+item)"
            slot="cover"
          />
          <a-card-meta
            title="Gallery"
            description="This is the qddGallery"/>
        </a-card>
      </a-col> 
    </a-row>  
  </div>
</template>
<script>
const img = [
  ["1.png", "2.png", "3.png", "4.png"],
  ["6.png", "7.png", "8.png", "9.png"],
  ["11.png", "12.png", "13.png", "14.png"],
  ["16.png", "17.png", "18.png", "19.png"],
  ["21.png", "22.png", "15.png", "24.png"],
  ["5.png", "10.png", "23.png", "20.png"]
];
export default {
  name: "Gallery",
  data() {
    return {
      imgs: []
    };
  },
  mounted() {
    this.imgs = img;
  }
};
</script>
<style lang="stylus" scoped>
</style>
