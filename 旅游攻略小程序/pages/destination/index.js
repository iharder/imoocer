const app = getApp();
import {
  getDesCity
} from "../../models/destination.js";
Page({
  data: {
    // 主体遮罩
    main: "",
    // 城市列表
    cityList: {}
  },
  onLoad: function(options) {
    this.loading = this.selectComponent("#loading");
    this.loading.show();
    app.init().then(res => {
      getDesCity().then(res => {
        this.setData({
          cityList: res
        });
      }).then(res => {
        this.loading.show();
      });
    });
  },
  // 进入目的地城市详情
  loadDestination(e) {
    app.qdd.city_id = e.detail.id;
    app.qdd.cityName = e.detail.cityName;
    wx.navigateTo({
      url: `/pages/destination/destination_detail/index?id=${e.detail.id}&type=${e.detail.type}`
    });
  },
  // 进入选择目的地城市
  loadSearch() {
    wx.navigateTo({
      url: '/pages/destination/selectCity/index',
    })
  },
  onShareAppMessage: function() {

  }
})