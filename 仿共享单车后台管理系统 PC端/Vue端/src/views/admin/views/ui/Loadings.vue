<template>
  <div>
    <a-card title="Spin用法" class="loadings-wrap">
      <a-spin size="small" tip="Loading..." ><div class="spin-content"></div></a-spin>
      <a-spin />
      <a-spin size="large"/>
      <s-spin>
        <a-icon slot="indicator" type="loading" style="font-size: 24px;margin: 0 10px;" spin />
      </s-spin>
      <s-spin tip="so">
        <a-icon slot="indicator" type="loading" style="font-size: 34px" spin />
      </s-spin>
    </a-card>
    <a-card title="内容遮罩">
      <a-alert message="Vue" type="" description="欢迎来到qdd后台管理系统"/>
      <a-alert message="Vue" type="warning" description="欢迎来到qdd后台管理系统"/>
      <a-spin tip="加载中">
        <a-alert message="Vue" type="warning" description="欢迎来到qdd后台管理系统"/>
      </a-spin>
      <a-spin tip="加载中">
        <a-icon slot="indicator" type="loading" style="font-size: 24px" spin />
        <a-alert message="Vue" type="warning" description="欢迎来到qdd后台管理系统"/>
      </a-spin>
    </a-card>
  </div>
</template>
<script>
export default {
  name: "Loadings"
};
</script>
<style lang="stylus" scoped>
</style>
