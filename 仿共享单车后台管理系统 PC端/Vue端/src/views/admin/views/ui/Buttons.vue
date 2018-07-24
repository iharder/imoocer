<template>
  <div class="buttons-wrap">
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
        <a-button type="primary" :loading="loadingShow" >确定</a-button>
        <a-button type="primary" :loading="loadingShow" shape="circle"></a-button>
        <a-button :loading="loadingShow" @click="handleCloseLoading">点击加载</a-button>
        <a-button :loading="loadingShow" shape="circle"></a-button>
        <a-button type="primary" @click="handleCloseLoading">{{loadingText}}</a-button>
      </a-card>
      <a-card title="图形按钮">
        <a-button-group>
          <a-button type="primary">
            <a-icon type="left" />前进
          </a-button>
          <a-button type="primary">
            后退<a-icon type="right" />
          </a-button>
        </a-button-group>
      </a-card>
      <a-card title="按钮尺寸">
        <a-radio-group :value="size" @change="handleSizeChange" defaultValue="default">
          <a-radio value="small">小</a-radio>
          <a-radio value="default">中</a-radio>
          <a-radio value="large">大</a-radio>
        </a-radio-group>
        <a-button type="primary" :size="size">qdd</a-button>
        <a-button :size="size">qdd</a-button>
        <a-button type="dashed" :size="size">qdd</a-button>
        <a-button type="danger" :size="size">qdd</a-button>
      </a-card>
  </div>  
</template>
<script>
export default {
  name: "Buttons",
  data() {
    return {
      loadingShow: null,
      loadingText: "打开",
      size: "default"
    };
  },
  methods: {
    handleCloseLoading() {
      this.loadingShow = this.loadingShow == null ? true : null;
      this.loadingText = this.loadingShow == null ? "打开" : "关闭";
    },
    handleSizeChange(e) {
      this.size = e.target.value;
    }
  }
};
</script>
<style lang="stylus" scoped>
.buttons-wrap {
  background: #FAFAFA;
  font-size: 20px;
}
</style>
