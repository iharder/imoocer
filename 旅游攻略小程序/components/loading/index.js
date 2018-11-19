// components/loading/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isHide: {
      type: Boolean,
      value: false
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
    show() {
      this.setData({
        isHide: !this.data.isHide
      })
    }
  }
})