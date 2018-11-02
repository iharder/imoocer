// pages/diancan/canting/mymenu.js
import {
  OrderModel
} from '../../../models/canting/order';
const orderModel = new OrderModel();
import {
  config
} from "../../../models/config.js";
import store from '../../../store';
import create from '../../../utils/create';
const app = getApp();
create(store, {

  data: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.showLoading({
      title: '',
    })
    // 传递order数据
    let orderData = wx.getStorageSync('orderData');
    orderData = {};
    orderData.useDis = 0;
    orderData.couponId = 0;
    // 检查门店数量
    let myDis = wx.getStorageSync("myDis");
    this.store.data.myDis = myDis;
    this.update();
    let disList = myDis.list;
    let num = 0;
    for (let i = 0; i < disList.length; i++) {
      if (disList[i].type_name == "店内消费") {
        num++;
      }
    }
    orderData.disNum = num;
    this.store.data.orderData = orderData;
    this.update();
    wx.hideLoading();
  },

  onShow() {
    this.getMyMenuList();
  },

  getMyMenuList: function(e) {
    let _this = this;
    let extConfig = wx.getStorageSync('extConfig');
    let openId = wx.getStorageSync('openId');
    extConfig.openid = openId;
    extConfig.desk_id = wx.getStorageSync("desk_id");
    let order = orderModel.postGetMyMenuList(extConfig);
    order.then(res => {
      if (res.code == 400) {
        wx.showToast({
          title: res.msg,
          icon: "none",
          duration: 2000
        });
        setTimeout(res => {
          wx.navigateBack({});
        }, 2000)
        return;
      }
      _this.store.data.data = res.data;
      _this.update();
      let seller = wx.getStorageSync("order");
      let haveSeller = seller.have;
      if (haveSeller) {
        let activity = seller.sellerDis.manjianlist;
        let totalPrice = res.data.order.price;
        // 满减价格组
        let manPriceList = [];
        // 满减减少价格组
        let priceList = [];
        let a = '';
        let manPrice = 0;
        let price = 0;
        for (let i = 0; i < activity.length; i++) {
          manPriceList[i] = (activity[i].man_price);
          priceList[(activity[i].man_price)] = (activity[i].price);
        }
        let l = activity.length;
        manPriceList.sort(function(a, b) {
          return b - a;
        })

        if (totalPrice >= manPriceList[l - 1]) {
          for (let i = 0; manPriceList.length; i++) {
            if (totalPrice >= manPriceList[i]) {
              a = i;
              break;
            }
          }
          manPrice = manPriceList[a];
          price = priceList[manPrice];
          _this.store.data.orderData.manPrice = manPrice;
          _this.store.data.orderData.price = price;
        } else {
          _this.store.data.orderData.manPrice = 0;
          _this.store.data.orderData.price = 0;
        }
      } else {
        _this.store.data.orderData.manPrice = 0;
        _this.store.data.orderData.price = 0;
      }
      _this.update();
    });
  },
  loadMyDis() {
    let index = this.data.index;
    let orderData = this.store.data.orderData;
    orderData.use = true;
    wx.setStorageSync("orderData", orderData);
    this.store.data.type = "店内消费";
    this.update()
    wx.navigateTo({
      url: '../../my-dis/my-dis?type=店内消费'
    });
  },
  formSubmit: function(e) {
    let store = this.store.data;
    let coupon = store.orderData.couponId || 0;
    let menu = store.data.foods;
    let formId = e.detail.formId;
    config.coupon_id = coupon;
    config.formId = formId;
    config.ordertype = 2;
    config.desk_id = wx.getStorageSync("desk_id");
    let data = orderModel.deskPayOrder(config);
    data.then(res => {
      if (res.code == 200) {
        if (res.data.wx_pay) {
          wx.requestPayment({
            timeStamp: res.data.order.timeStamp,
            nonceStr: res.data.order.nonceStr,
            package: res.data.order.package,
            signType: res.data.order.signType,
            paySign: res.data.order.paySign,
            success: function(res) {
              wx.showToast({
                title: '支付成功',
                duration: 2000
              })
              setTimeout(res => {
                wx.navigateBack({});
              }, 2000)
            },
            fail: function(res) {
              wx.showToast({
                title: '支付失败',
                icon: "none",
                duration: 2000
              })
            }
          })
        }
      } else {
        wx.showToast({
          title: res.msg,
        })
      }
    })
  },
  onShareAppMessage: function() {

  }
})