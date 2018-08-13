<template>
  <div class="product">
    product
  </div>
</template>
<script>
export default {
  name: "product"
};
</script>
<style lang="stylus" scoped>
.product {
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  color: red;
  z-index: $product-z-index;
  width: 100%;
  height: 100%;
  background-color: $bgc-theme;
}
</style>
