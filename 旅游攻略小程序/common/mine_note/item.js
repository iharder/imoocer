// components/traval-list/item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like: {
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
    like() {
      let like = this.properties.like;
      this.setData({
        like: !like
      })
    }
  }
})