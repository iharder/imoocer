// components/search-input/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    close: {
      type: Boolean,
      value: false
    },
    value: {
      type: String,
      value: ''
    },
    placeholder: {
      type: String,
      value: "请输入目的地"
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
    closeInput() {
      this.setData({
        close: false
      })
    },
    bindInput() {
      if (!this.data.close) {
        this.setData({
          close: true
        })
      }
    },
    bindBlur(e) {
      if (e.detail.value != '') {
        this.setData({
          value: ''
        })
      }
    }
  }
})