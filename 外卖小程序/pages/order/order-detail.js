import store from '../../store';
import create from '../../utils/create';
const app = getApp();
import {
  OrderModel
}
from '../../models/order';
import {
  config
}
from "../../models/config.js";
const orderModel = new OrderModel();
create(store, {
  onLoad: function(options) {
    wx.showLoading({
      title: '',
    });
    let id = options.id;
    let type = options.type;
    let _this = this;
    let openid = wx.getStorageSync("openId");
    config.openid = openid;
    config.order_id = id;
    config.type = type;
    console.log(config);
    let data = orderModel.getOrderDetail(config);
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