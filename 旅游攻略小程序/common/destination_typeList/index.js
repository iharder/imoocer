// common/destination-typeList/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    slideList: {
      type: Array,
      value: [{
        name: '热门'
      }, {
        name: '必去top10'
      }, {
        name: '亲子游'
      }, {
        name: '城市风光'
      }, {
        name: '古迹遗址'
      }, {
        name: '摄影佳地'
      }]
    },
    changeIndex: {
      type: Number,
      value: 0
    },
    color: {
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
    selectSlideitem(e) {
      let index = e.currentTarget.dataset.index;
      this.setData({
        changeIndex: index
      })
    }
  }
})