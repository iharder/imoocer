// components/common/title/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    top: {
      type: String,
      value: "20rpx"
    },
    leftContent: {
      type: String,
      value: "推荐攻略"
    },
    rightContent: {
      type: String,
      value: "更多"
    },
    bgColor: {
      type: String,
      value: "#fff"
    },
    bottom: {
      type: String,
      value: "20rpx"
    },
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
    lookMoreListener() {
      this.triggerEvent("right", {

      })
    }
  }
})