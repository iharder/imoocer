<template>
  <div class="modals-wrap">
    <a-card title="基础模态框" class="card-wrap">
      <a-button type="primary" @click="handleOpen('showModal1')">Open</a-button>
      <a-button type="primary" @click="handleOpen('showModal2')">自定义页脚</a-button>
      <a-button type="primary" @click="handleOpen('showModal3')" >距离顶部20px弹窗</a-button>
      <a-button type="primary" @click="handleOpen('showModal4')">水平垂直居中</a-button>
    </a-card>
    <a-modal title="Vue" v-model="showModal1" >
      <p>欢迎来到qdd后台管理系统</p>
    </a-modal>
    <a-modal title="Vue" v-model="showModal2" okText="下一步" cancelText="算了" >
      <p>欢迎来到qdd后台管理系统</p>
    </a-modal>
    <a-modal title="Vue" v-model="showModal3" class="move" :style="{top:'20px'}">
      <p>欢迎来到qdd后台管理系统</p>
    </a-modal>
    <a-modal title="Vue" v-model="showModal4" :style="{top:'50%',marginTop:'-95px'}">
      <p>欢迎来到qdd后台管理系统</p>
    </a-modal>
    <a-card title="信息确认框" class="card-wrap">
      <a-button type="primary" @click="handleConfirm('showModal1')">Confirm</a-button>
      <a-button type="primary" @click="handleConfirm('showModal2')">Info</a-button>
      <a-button type="primary" @click="handleConfirm('showModal3')">Success</a-button>
      <a-button type="primary" @click="handleConfirm('showModal4')">Warning</a-button>
    </a-card>
  </div>
</template>
<script>
export default {
  name: "Modals",
  data() {
    return {
      showModal1: false,
      showModal2: false,
      showModal3: false,
      showModal4: false
    };
  },
  methods: {
    handleOpen(type) {
      switch (type) {
        case "showModal1":
          this.showModal1 = true;
          break;
        case "showModal2":
          this.showModal2 = true;
          break;
        case "showModal3":
          this.showModal3 = true;
          break;
        case "showModal4":
          this.showModal4 = true;
          break;
        default:
          break;
      }
    },
    handleConfirm(type) {
      switch (type) {
        case "showModal1":
          this.$confirm({
            title: "确认?",
            content: "你确定你学会了Vue了吗?",
            onOk() {
              console.log("Ok");
            },
            onCancel() {
              console.log("Cancel");
            }
          });
          break;
        case "showModal2":
          this.$info({
            title: "确认?",
            content: "你确定你学会了Vue了吗?",
            onOk() {
              console.log("info");
            }
          });
          break;
        case "showModal3":
          this.$success({
            title: "确认?",
            content: "你确定你学会了Vue了吗?",
            onOk() {
              console.log("success");
            }
          });
          break;
        case "showModal4":
          this.$warning({
            title: "确认?",
            content: "你确定你学会了Vue了吗?",
            onOk() {
              console.log("warning");
            }
          });
          break;
        default:
          break;
      }
    }
  }
};
</script>
<style lang="stylus" scoped>
</style>
