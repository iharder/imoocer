const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    myList: [{
        name: ["我的发布", "我的收藏"]
      },
      {
        name: ["游币商城", "常用地址"]
      },
      {
        name: ["关于我们", "联系客服"]
      },
      {
        name: ["更多小程序"],
        bind: ["more"]
      }
    ],
    userData: [],
    //轮播
    imgUrls: [
      "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
      "http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg",
      "http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg"
    ],
    currentSwiper: 0,
    moreMask: false,
    writeMask: 2
  },
  onLoad: function (options) {
    app.init().then(res => {
      this.login = this.selectComponent("#loginView");
    });
  },
  bindMylist(e = null) {
    let name = e.detail.name;
    switch (name) {
      case "更多小程序":
        this.changeMore();
        break;
      case "我的发布":
        wx.navigateTo({
          url: '/pages/mine/mine_publish/index?type=1',
        });
        break;
      case "我的收藏":
        wx.navigateTo({
          url: '/pages/mine/mine_collec/index?type=1',
        });
        break;
    }
  },
  // 更多小程序
  changeMore() {
    let moreMask = this.data.moreMask;
    this.setData({
      moreMask: !moreMask
    });
  },
  // 打开写游记
  center() {
    app.qdd.center();
  },
  // 轮播图改变
  swiperChange: function(e) {
    this.setData({
      currentSwiper: e.detail.current
    });
  },
  // 进入用户中心
  loadUsercen() {
    // wx.navigateTo({
    //   url: "/pages/mine/mineCenter/index"
    // });
  },
  // 显示对话框登录
  showLogin: function() {
    if (this.login != undefined)
      this.login.showDialog();
  },
  onShareAppMessage: function() {}
});