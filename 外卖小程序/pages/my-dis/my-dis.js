import store from '../../store';
import create from '../../utils/create';
const app = getApp();
import {
  config
} from "../../models/config.js";
import {
  DiscountModel
} from "../../models/my-discount.js";
const discountModel = new DiscountModel();
create(store, {
  onLoad(option) {
    wx.showLoading();
    let orderData = wx.getStorageSync("orderData");
    let myDis = wx.getStorageSync("myDis");
    if (option.type) {
      this.setData({
        type: option.type,
      })
    }
    this.setData({
      orderData: orderData,
      myDis: myDis
    })
  },
  onShow: function() {
    // 获取我的优惠券

    this.myDis(config);
  },
  onUnload() {
    this.store.data.indexAccount.use = false;
    this.store.data.orderData.use = false;
    this.update();

    let orderData = wx.getStorageSync("orderData");
    if (orderData) {
      orderData.use = false;
    }
    wx.setStorageSync("orderData", orderData);
  },
  data: {},
  myDis() {
    let openId = wx.getStorageSync('openId');
    let _this = this;
    config.openid = openId
    let myDis = discountModel.postMyDis(config);
    myDis.then(res => {
      _this.store.data.myDis = res.data;
      _this.update();
      wx.hideLoading();
    });
  },
  useDis(e) {
    if (this.store.data.orderData.use) {
      this.store.data.orderData.useDis = e.target.dataset.price;
      this.store.data.orderData.couponId = e.target.dataset.id;
    } else {
      this.store.data.indexAccount.useDis = e.target.dataset.price;
      this.store.data.indexAccount.couponId = e.target.dataset.id;
    }
    this.store.data.indexAccount.use = true;
    this.update();
    setTimeout(res => {
      wx.navigateBack({
        delta: 1
      });
    }, 300);

  },
  onShareAppMessage: function() {

  }
})