import store from '../../store';
import create from '../../utils/create';
const app = getApp();
create(store, {
  onLoad: function() {

  },
  onShareAppMessage: function() {

  },
  // 进入收货地址页面
  loadDelivery() {
    wx.navigateTo({
      url: '../delivery-add/delivery-add',
    })
  },
  // 进入领取优惠券页面
  loadRcoupon() {
    wx.navigateTo({
      url: '../my-rc-dis/my-rc-dis',
    })
  },
  // 进入我的优惠券页面
  loadMycoupon() {
    wx.navigateTo({
      url: '../my-dis/my-dis',
    })
  },
  // 打电话
  callPhone() {
    this.store.callPhone();
  },
  // 进入预约界面
  loadAppoint() {
    wx.navigateTo({
      url: '../my-appoint/my-appoint',
    })
  },
  // 进入我的买单
  loadPaybill() {
    wx.navigateTo({
      url: '../my-paybill/my-paybill',
    })
  }
})