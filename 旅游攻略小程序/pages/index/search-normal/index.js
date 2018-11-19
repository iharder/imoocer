// pages/index/search-normal/index.js
import {
  Model
} from "./model.js";
const app = getApp();
Page({
  data: {
    searchHistory: []
  },
  onLoad: function(options) {
    this.loading = this.selectComponent("#loading");
    this.loading.show();
    app.init().then(res => {
      let searchHistory = wx.getStorageSync("searchHistory");
      if (searchHistory) {
        this.setData({
          searchHistory: searchHistory
        });
      }
      Model.getSearchNor();
      this.loading.show();
    });
  },
  // 搜索城市
  searchCity(e) {
    let keywords = e.detail.inputVal;
    
  },
  onShareAppMessage: function() {

  }
})