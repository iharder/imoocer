// components/all_write/inde.js
const app = getApp();
Component({
  options: {
    multipleSlots: true
  },
  properties: {
    writeMask: {
      type: Number,
      value: 2
    }
  },
  data: {
    leave: true
  },
  ready: function() {

  },
  methods: {
    center() {
      let writeMask = this.data.writeMask;
      switch (writeMask) {
        case 0:
          this.setData({
            writeMask: 1
          });
          break;
        case 1:
          setTimeout((res) => {
            this.setData({
              writeMask: 0
            });
          }, 500)
          break;
        case 2:
          this.setData({
            writeMask: 1
          });
          break;
      }
    },
    close() {
      this.setData({
        writeMask: 0
      });
    },
    loadStrategy() {
      if (!this.isCity()) return;
      wx.navigateTo({
        url: '/pages/center/send_strategy/index'
      });
    },
    loadNote() {
      if (!this.isCity()) return;
      wx.navigateTo({
        url: '/pages/center/write_traval/index',
      });
    },
    isCity() {
      if (app.qdd.city_id.length == 0) {
        if (app.common.getPage().route != "pages/destination/index") {
          wx.navigateTo({
            url: '/pages/destination/index',
          });
        }
        this.center();
        setTimeout((res) => {
          wx.showToast({
            title: '请选择目的地城市',
            icon: "none"
          });
        }, 1000);
        return false;
      }
      this.center();
      return true;
    }
  }
})