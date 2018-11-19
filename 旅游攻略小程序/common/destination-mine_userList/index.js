Component({
  /**
   * 组件的属性列表
   */
  properties: {
    top: {
      type: String,
      value: "0"
    },
    bottom: {
      type: String,
      value: "0"
    },
    bordTop: {
      type: Boolean,
      value: false
    },
    bordBottom: {
      type: Boolean,
      value: false
    },
    list: {
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
    userInterface() {
      wx.navigateTo({
        url: '/pages/mine/mineCenter/index',
      })
    }
  }
})