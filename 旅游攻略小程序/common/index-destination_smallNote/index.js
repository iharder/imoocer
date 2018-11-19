// components/my-list/index.js
Component({
  options: {
    multipleSlots: true
  },
  properties: {
    list: {
      type: Array,
      value: {}
    }
  },

  data: {

  },
  ready: function() {

  },
  methods: {
    loadDetail(e) {
      e = e.currentTarget.dataset;
      let id = e.id;
      let index = e.index;
      if (!id) {
        wx.showToast({
          title: '加载失败',
          icon: "none"
        });
        return;
      };
      let list = this.data.list;
      list[index].views++;
      this.setData({
        list: list
      });
      wx.navigateTo({
        url: `/pages/index/note_detail/index?id=${id}`,
      });
    },
  }
})