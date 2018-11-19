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
        name: "攻略"
      }, {
        name: "游记"
      }, {
        name: "粉丝"
      }]
    },
    info: {
      type: Object,
      value: []
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
      e = e.currentTarget.dataset;
      let index = e.index;
      let name = e.name;
      this.setData({
        changeIndex: index
      })
    }
  }
})