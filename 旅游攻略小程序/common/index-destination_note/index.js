// common/index-destination_note/item.js
Component({
  options: {
    multipleSlots: true
  },
  properties: {
    bgColor: {
      type: String,
      value: "#fff"
    },
    list: {
      type: Object,
      value: {}
    }
  },
  data: {

  },
  ready: function() {

  },
  methods: {
    loadDetail(e) {
      let id = e.currentTarget.dataset.id;
      // if (!id) {
      //   wx.showToast({
      //     title: '加载失败',
      //     icon: "none"
      //   });
      //   return;
      // };
      wx.navigateTo({
        url: '/pages/destination/destination_noteDetail/index?id=' + id,
      });
    }
  }
})