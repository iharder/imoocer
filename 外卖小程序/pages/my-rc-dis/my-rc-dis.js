import store from '../../store';
import create from '../../utils/create';
import {
  DiscountModel
} from "../../models/my-discount.js";
let discountModel = new DiscountModel();

let extConfig = wx.getStorageSync("extConfig");
const app = getApp();
create(store, {
  onLoad: function() {
    this.upDate();
  },
  onShow() {},
  upDate() {
    wx.showLoading();
    let openId = wx.getStorageSync("openId");
    let config = {
      openid: openId,
      appid: extConfig.appid,
      appkey: extConfig.appkey,
    }
    let wmDis = discountModel.postSellerDis(config);
    wmDis.then(res => {
      this.setData({
        wm: res.data
      })
      wx.hideLoading();
    })
  },
  // 领取优惠券
  rcDis(e) {
    let coupon_id = e.target.dataset.couponid;
    let openId = wx.getStorageSync("openId");
    let config = {
      openid: openId,
      appid: extConfig.appid,
      appkey: extConfig.appkey,
      coupon_id: coupon_id
    }
    let rcDis = discountModel.postRcoupon(config);
    rcDis.then(res => {
      if (res.code == 400) {
        wx.showToast({
          title: res.msg,
          icon: 'none',
          duration: 2000
        })
      } else if (res.code == 200) {
        wx.showToast({
          title: "领取成功",
          icon: 'none',
          duration: 1000
        })
        this.upDate();
      }
    })
  },
  onShareAppMessage: function() {

  }
})