// pages/demo/demo.js
import {
  MineModel
} from "../../../models/mine.js";
const mineModel = new MineModel();
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    _index: 0,
    noteInfo: [],
    lazyBox: [],
    // 切换细分类型
    have: false
  },
  onLoad: function(options) {
    this.loading = this.selectComponent("#loading");
    this.loading.show();
    let _this = this;
    let option = Object.keys(options);
    if (option.length != 0) {
      this.setData({
        _index: options.index,
        cat_id: Number.parseInt(options.index)
      })
    } else {
      this.setData({
        _index: 0,
        cat_id: 1
      })
    };
    app.init().then(res => {
      let index = _this.data._index;
      mineModel.getNoteInfo({
        type: 0,
        cat_id: Number.parseInt(index) + 1
      }).then(res => {
        let noteInfo = _this.data.noteInfo;
        let lazyBox = _this.data.lazyBox;
        lazyBox.push(index);
        noteInfo[index] = res;
        _this.setData({
          noteInfo: noteInfo
        });
        this.loading.show();
      });
    });
  },
  // 选择加载
  selectTab(e) {
    let index = e.detail.index;
    let lazyBox = this.data.lazyBox;
    let likeLength = 0;
    let _this = this;
    let have = this.data.have;
    this.setData({
      have: false
    });
    lazyBox.forEach((item) => {
      if (item == index) {
        likeLength++;
      }
    });
    if (likeLength != 0) return;
    wx.showLoading({
      title: '加载中',
    })
    lazyBox.push(index);
    let cat_id = index + 1;
    mineModel.getNoteInfo({
      type: 0,
      cat_id: cat_id
    }).then(res => {
      let noteInfo = this.data.noteInfo;
      noteInfo[index] = res;
      _this.setData({
        noteInfo: noteInfo,
        lazyBox: lazyBox,
        cat_id: cat_id
      });
      wx.hideLoading();
    })
  },
  // 切换攻略细分类型
  changeType(e) {
    let type = e.detail.type;
    let cat_id = this.data.cat_id;
    let _this = this;
    wx.showLoading({
      title: '加载中',
    });
    mineModel.getNoteInfo({
      type: type,
      cat_id: cat_id
    }).then(res => {
      let noteInfo = this.data.noteInfo;
      noteInfo[cat_id - 1] = res;
      _this.setData({
        noteInfo: noteInfo
      });
      wx.hideLoading();
    });
  },
  onShareAppMessage: function() {

  }
})