// components/gonglue-title/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    bgColor: {
      type: String,
      value: '#fff'
    },
    num: {
      type: Number,
      value: 200
    },
    list: {
      type: Array,
      value: ['推荐', '最新']
    },
    title: {
      type: String,
      value: '玩乐攻略'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    have: false
  },
  ready() {
    
  },
  /**
   * 组件的方法列表
   */
  methods: {
    changeBox() {
      let have = this.data.have;
      this.setData({
        have: !have
      })
    }
  }
})