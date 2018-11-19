// common/index-destination_oneReply/index.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    replayOne: {
      type: Boolean,
      value: false
    },
    mainColor: {
      type: String,
      value: ""
    },
    comment: {
      type: Object,
      value: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  ready() {

  },
  /**
   * 组件的方法列表
   */
  methods: {
    // 写攻略评论
    bindConfirm(e) {
      let isComment = app.common.pleEnterInfo(e.detail.value);
      if (!isComment) return;
      this.triggerEvent("oneReplyConfirm", {
        comment: e.detail.value
      });
    },
    // 取消单人回复
    close() {
      // 取消后清空输入信息
      this.setData({
        comment: ""
      });
      this.triggerEvent("closeOnePlay", {});
    }
  }
})