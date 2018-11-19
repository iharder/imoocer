// components/my-list/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Array,
      value: ['我的发布', '我的收藏']
    },
    name: {
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
    bind(e) {
      this.triggerEvent("bind", {
        name: e.currentTarget.dataset.name
      })
    }
  }
})