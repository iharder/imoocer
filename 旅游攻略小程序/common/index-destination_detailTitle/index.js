// common/index-destination_detailTitle/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    concern: {
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
    // 关注
    concern() {
      let concern = this.properties.concern;
      this.setData({
        concern: !concern
      })
    },
  }
})