// pages/mine/mine-publish/index.js
import {
  MyPub
} from "./model.js";
const myPub = new MyPub();
const app = getApp();
Page({
  data: {
    // 我的发布
    myPub: [],
    // 发布种类
    pubType: "strategy"
  },
  onLoad: function(options) {
    this.loading = this.selectComponent("#loading");
    this.loading.show();
    app.init().then(res => {
      myPub.getMyPub({
        type: options.type
      });
    });
  },
  // 删除发布
  deletePub(e) {
    myPub.deletePub({
      pubType: this.data.pubType,
      id: e.detail.id,
      index: e.detail.index
    });
  },
  // 触发tab
  selectTab(e) {
    if (e.detail == 0) {
      this.setData({
        pubType: "strategy"
      });
    } else {
      this.setData({
        pubType: "note"
      });
    }
  },
  onShareAppMessage: function() {

  }
})