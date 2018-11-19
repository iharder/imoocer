// common/index-destination_moreNote/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Array,
      value: []
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
    moreTraval(e) {
      e = e.currentTarget.dataset;
      let id = e.id;
      let index = e.index;
      let list = this.data.list;
      list[index].views++;
      this.setData({
        list: list
      });
      wx.navigateTo({
        url: '/pages/index/note_detail/index?id=' + id,
      })
    }
  }
})