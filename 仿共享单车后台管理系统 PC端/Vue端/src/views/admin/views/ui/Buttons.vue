<template>
  <div class="home-wrap">
      <a-card title="基础按钮">
        <a-button type="primary">qdd</a-button>
        <a-button>qdd</a-button>
        <a-button type="dashed">qdd</a-button>
        <a-button type="danger">qdd</a-button>
        <a-button disabled>qdd</a-button>
      </a-card>
      <a-card title="图形按钮">
        <a-button icon="plus">创建</a-button>
        <a-button icon="edit">编辑</a-button>
        <a-button icon="delete">删除</a-button>
        <a-button icon="search" shape="circle"></a-button>
        <a-button type="primary" icon="search">搜索</a-button>
        <a-button type="primary" icon="download">下载</a-button>
      </a-card>
      <a-card title="loading按钮">
        <a-button type="primary" loading={true}>确定</a-button>
        <a-button type="primary" loading={true} shape="circle"></a-button>
        <a-button loading={true} >点击加载</a-button>
        <a-button loading={true} shape="circle"></a-button>
        <a-button type="primary" @click="handleCloseLoading">关闭</a-button>
      </a-card>
  </div>  
</template>
<script>
export default {
  name: "Home"
};
</script>
<style lang="stylus" scoped>
.home-wrap {
  background: #FAFAFA;
  height: 100%;
  font-size: 20px;
}

.ant-card {
  margin-bottom: 10px;

  .ant-btn {
    margin-right: 10px;
  }
}
</style>
