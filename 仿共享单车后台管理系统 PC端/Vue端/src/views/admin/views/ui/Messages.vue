<template>
  <div>
    <a-card title="全局提示框">
      <a-button type="primary" @click="showMessage('success')">Success</a-button>
      <a-button type="primary" @click="showMessage('info')">Info</a-button>
      <a-button type="primary" @click="showMessage('warning')">Warning</a-button>
      <a-button type="primary" @click="showMessage('error')">Error</a-button>
      <a-button type="primary" @click="showMessage('loading')">Loading</a-button>
    </a-card>
  </div>
</template>
<script>
export default {
  name: "Messages",
  methods: {
    showMessage(type) {
      this.$message[type]("恭喜你");
    }
  }
};
</script>
<style lang="stylus" scoped>
</style>
