// components/user-slide/index.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    multipleSlots: true
  },
  properties: {
    list: {
      type: Array,
      value: [{
        name: "攻略",
        value: '41'
      }, {
        name: "游记",
        value: '57'
      }, {
        name: "粉丝",
        value: '57'
      }]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    changeIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeIndex(e) {
      let index = e.currentTarget.dataset.index;
      this.setData({
        changeIndex: index
      })
    }
  }
})