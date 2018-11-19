import {
  MineModel
} from "../../models/mine.js";
const mineModel = new MineModel();
const app = getApp();

Page({
  data: {
    //用户信息
    userToken: "",
    // 城市名字
    cityName: "合肥"
  },
  onLoad: function(options) {
    let _this = this;
    this.loading = this.selectComponent("#loading");
    this.loading.show();
    // 检查是否加载过
    if (!app.qdd.index) {
      this.load();
      app.qdd.index = 1;
    } else {
      this.setData({
        mineInfo: app.qdd.mineInfo,
        main: "active",
        mainColor: app.qdd.mainColor,
        userData: app.qdd.userData
      });
      this.loading.show();
    }
  },
  // 初始加载
  load() {
    let _this = this;
    app.init().then(res => {
      mineModel.getMineInfo().then(res => {
        this.update(res);
      }).then(res => {
        this.loading.show();
      });
    });
  },
  // 更新
  update(res) {
    let mineInfo = res;
    let note = res.note;
    let leftNote = [];
    let rightNote = [];
    note.forEach((item, index) => {
      if (index % 2 == 0) {
        leftNote.push(item);
      } else {
        rightNote.push(item);
      }
    });
    let _note = {
      leftNote: leftNote,
      rightNote: rightNote
    };
    mineInfo._note = _note;
    this.setData({
      mineInfo: mineInfo
    });
    app.qdd.mineInfo = mineInfo;
    app.qdd.mainColor = this.data.mainColor;
    app.qdd.userData = this.data.userData;
  },
  // 默认搜索
  searchNormal() {
    wx.navigateTo({
      url: '/pages/index/search-normal/index',
    })
  },
  // 切换城市
  selectCity() {
    wx.navigateTo({
      url: '/pages/destination/selectCity/index',
    })
  },
  // 打开写游记
  center() {
    app.qdd.center();
  },
  // 进入详情
  loadDetail(e) {
    e = e.currentTarget.dataset
    let id = e.id;
    let index = e.index;
    // 本地增加浏览数
    let mineInfo = this.data.mineInfo;
    mineInfo.strategy[index].views++;
    this.setData({
      mineInfo: mineInfo
    });
    wx.navigateTo({
      url: '/pages/index/note_detail/index?id=' + id,
    });
  },
  // 进入攻略
  loadNote(e) {
    let index = e.currentTarget.dataset.index;
    wx.navigateTo({
      url: `/pages/index/note/index?index=${index}`,
    })
  },
  // 更多攻略
  moreNote() {
    wx.navigateTo({
      url: '/pages/index/note/index',
    });
  },
  // 更多游记
  moreTraval() {
    wx.navigateTo({
      url: '/pages/destination/destination_moreNote/index',
    });
  },
  onPullDownRefresh() {
    wx.setNavigationBarTitle({
      title: '加载中'
    });
    wx.showNavigationBarLoading();
    mineModel.getMineInfo().then(res => {
      this.update(res);
    }).then(res => {
      wx.hideNavigationBarLoading(); //完成停止加载
      // 动态设置导航条标题
      wx.setNavigationBarTitle({
        title: '首页'
      });
      wx.stopPullDownRefresh();
    });
  },
  onShareAppMessage() {

  },
  onPageScroll() {

  }
})