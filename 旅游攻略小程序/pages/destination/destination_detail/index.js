import {
  DesDetail
} from "./model.js";
const app = getApp();
Page({
  data: {
    // 类别
    noteType: ["玩乐游记", "住宿游记", "美食游记", "购物游记"],
    // 城市信息
    cityInfo: [],
    // 搜索信息
    inputValue: "",
    // 加载过索引
    lazy: [],
    // 城市名字
    cityName: ""
  },
  onLoad: function(options) {
    this.desDetail = new DesDetail({
      city_id: options.id
    });
    this.loading = this.selectComponent("#loading");
    this.loading.show();
    app.common.setConfig("lazy", 0, options.type - 1);
    this.setData({
      cityName: app.qdd.cityName
    });
    app.init().then(res => {
      //获取城市初始信息
      this.desDetail.getCityDetail({
        type: options.type
      }).then(res => {
        this.loading.show();
      });
    });
  },
  // 进入相关攻略
  loadStrategy(e) {
    wx.navigateTo({
      url: '/pages/index/note_detail/index?id=' + e.detail.strategy_id,
    })
  },
  // 更多游记
  morePlay() {
    wx.navigateTo({
      url: '/pages/destination/destination_moreNote/index',
    })
  },
  // tab选项卡的索引
  selectTab(e) {
    let index = e.detail.index;
    if (!app.common.lazy(index)) return;
    wx.showLoading({
      title: '加载中',
    });
    this.desDetail.getCityDetail({
      type: index + 1
    }).then(res => {
      wx.hideLoading();
    });
  },
  //触发输入 
  bindInput(e) {
    this.setData({
      inputValue: e.detail.value
    });
  },
  // 关闭输入
  close() {
    this.setData({
      inputValue: ""
    });
  },
  onShareAppMessage: function() {

  }
})