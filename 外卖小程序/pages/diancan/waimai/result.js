import store from '../../../store';
import create from '../../../utils/create';
const app = getApp();
import {
  FoodModel
}
from '../../../models/diancan/waimai';
import {
  config
}
from "../../../models/config.js";
const foodModel = new FoodModel();
create(store, {
  onLoad: function(options) {
    wx.showLoading({
      title: '',
    })
    let _this = this;
    let openid = wx.getStorageSync("openId");
    config.openid = openid;
    let data = foodModel.postResult(config);
    let seller = wx.getStorageSync("seller");
    data.then(res => {
      _this.store.data.result = res.data;
      _this.store.data.result.seller = seller;
      _this.update();
      wx.hideLoading();
    })
  },
  onShareAppMessage: function() {

  }
})