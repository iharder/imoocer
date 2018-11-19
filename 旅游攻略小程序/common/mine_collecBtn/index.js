// components/collec-button/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    leftContent: {
      type: String,
      value: "删除"
    },
    content: {
      type: String,
      value: "攻略"
    },
    ID: {
      type: Number,
      value: 0
    },
    index: {
      type: Number,
      value: 0
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
    delete(e) {
      let txt = this.properties.leftContent;
      let content = this.properties.content;
      let _this = this;
      wx.showModal({
        title: `确定${txt}该${content}?`,
        confirmText: '确定',
        cancelText: "再想想",
        success(res) {
          if (res.confirm) {
            _this.triggerEvent("deletePub", {
              id: _this.data.ID,
              index: _this.data.index
            })
          } else if (res.cancel) {}
        }
      })
    }
  }
})