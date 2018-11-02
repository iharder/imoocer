import store from '../../store';
import create from '../../utils/create';
import {
  config
} from "../../models/config.js";
import {
  OrderModel
} from "../../models/order.js";
const orderModel = new OrderModel();
let openid = wx.getStorageSync("openid");
config.openid = openid;
const app = getApp();
create(store, {
  onLoad: function() {
    // // 获取买单订单列表
    wx.showLoading({
      title: '',
    })
    this.getOrderMD();
  },
  // 我的买单
  getOrderMD() {
    let _this = this;
    config.type = 4;
    let data = orderModel.getOrderList(config);
    data.then(res => {
      _this.setData({
        md: res.data
      })
      wx.hideLoading();
    })
  },
  onShareAppMessage: function() {

  }
})