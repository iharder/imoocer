<template>
  <div>
    <a-card title="通知提醒框">
      <a-button type="primary" @click="openNotification('success')">Success</a-button>
      <a-button type="primary" @click="openNotification('info')">Info</a-button>
      <a-button type="primary" @click="openNotification('warning')">Warning</a-button>
      <a-button type="primary" @click="openNotification('error')">Error</a-button>
    </a-card>
    <a-card title="通知提醒框">
      <a-button type="primary" @click="openNotification('success','bottomRight')">Success</a-button>
      <a-button type="primary" @click="openNotification('info','bottomRight')">Info</a-button>
      <a-button type="primary" @click="openNotification('warning','bottomRight')">Warning</a-button>
      <a-button type="primary" @click="openNotification('error','bottomRight')">Error</a-button>
    </a-card>
  </div>
</template>
<script>
export default {
  name: "Notification",
  methods: {
    openNotification(type, direction) {
      console.log(direction);
      if (direction) {
        this.$notification.config({
          placement: direction
        });
      }
      this.$notification[type]({
        message: "发工资了",
        description: "上个月考勤22天,迟到12天,实发工资250,请笑纳."
      });
    }
  }
};
</script>
<style lang="stylus" scoped>
</style>
