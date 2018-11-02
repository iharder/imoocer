// components/common/slide/index.js
Component({
  //下面是组件的属性列表
  options: {
    multipleSlots: true //在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
    textList: {
      type: Array,
      value: [{
        title: '热门',
        area: ['马尔戴夫', '巴厘岛', '泰国']
      }, {
        title: '亚洲',
        area: ['马尔戴夫', '巴厘岛', '泰国']
      }, {
        title: '欧洲',
        area: ['马尔戴夫', '巴厘岛', '泰国']
      }, {
        title: '北美洲',
        area: ['马尔戴夫', '巴厘岛', '泰国']
      }, {
        title: '南美洲',
        area: ['马尔戴夫', '巴厘岛', '泰国']
      }, {
        title: '大洋洲',
        area: ['马尔戴夫', '巴厘岛', '泰国']
      }, {
        title: '非洲',
        area: ['马尔戴夫', '巴厘岛', '泰国']
      }]
    },

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
    selectList(e) {
      this.setData({
        changeIndex: e.currentTarget.dataset.index
      })
    }
  }
})