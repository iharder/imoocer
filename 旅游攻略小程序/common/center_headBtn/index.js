// components/common/headBtn/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    rightContent: {
      type: String,
      value: "提交"
    },
    midContent: {
      type: String,
      value: '举报'
    },
    leftContent: {
      type: String,
      value: "取消"
    },
    color: {
      type: String,
      value: ""
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    cancel() {
      setTimeout(() => {
        wx.navigateBack({
          delta: 1
        });
      }, 250);
    },
    right() {
      this.triggerEvent("right", {

      })
    }
  }
})