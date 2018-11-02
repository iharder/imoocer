import store from '../../../store';
import create from '../../../utils/create';
import {
  FoodModel
} from '../../../models/diancan/waimai';
const foodModel = new FoodModel();
import {
  config
} from "../../../models/config.js";
const app = getApp();
create(store, {
  onLoad: function() {
    wx.showLoading({
      title: '',
    })
    // 传递order数据
    let orderData = wx.getStorageSync('orderData');
    orderData.useDis = 0;
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
    orderData.couponId = 0;
    orderData.type = "堂食";
    this.store.data.orderData = orderData;
    this.update();
    let seller = wx.getStorageSync('seller');
    this.setData({
      orderData: orderData,
      _seller: seller
    })
    wx.hideLoading();
  },
  onShareAppMessage: function() {

  },
  onShow() {
    let seller = wx.getStorageSync("order");
    let haveSeller = seller.have;
    if (haveSeller) {
      let totalPrice = (this.store.data.orderData.totalPrice) / 100;
      // 检查满减条件
      let activity = seller.sellerDis.manjianlist;
      // 满减价格组
      let manPriceList = [];
      // 满减减少价格组
      let priceList = [];
      let a = '';
      let manPrice = 0;
      let price = 0;
      for (let i = 0; i < activity.length; i++) {
        manPriceList[i] = activity[i].man_price;
        priceList[activity[i].man_price] = activity[i].price;
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
        this.store.data.orderData.manPrice = manPrice;
        this.store.data.orderData.price = price;
      } else {
        this.store.data.orderData.manPrice = 0;
        this.store.data.orderData.price = 0;
      }
    } else {
      this.store.data.orderData.manPrice = 0;
      this.store.data.orderData.price = 0;
    }
    this.update();
  },
  selectType(e) {
    let type = e.detail.value;
    this.store.data.orderData.type = type;
    this.update();
  },
  // 确认下单
  formSubmit(e) {
    let openId = wx.getStorageSync("openId");
    config.openid = openId;
    let store = this.store.data;
    let coupon = store.orderData.couponId || 0;
    let menu = wx.getStorageSync("orderData").selectMenu;
    let formId = e.detail.formId;
    let eattype = store.orderData.type;
    config.menu = JSON.stringify(menu);
    config.formId = formId;
    config.ordertype = 3;
    config.eattype = eattype;
    config.coupon_id = coupon;
    let data = foodModel.postPlaceOrder(config);
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
              
              setTimeout(() => {
                wx.redirectTo({
                  url: './result',
                })
              }, 1000)
            },
            fail: function(res) {
              wx.showToast({
                title: '支付失败',
                icon: "none"
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
  // 进入我的优惠券
  loadMyDis() {
    let orderData = this.store.data.orderData;
    orderData.use = true;
    wx.setStorageSync("orderData", orderData);
    this.store.data.type = "店内消费";
    this.update()
    wx.navigateTo({
      url: '../../my-dis/my-dis?type=店内消费'
    });

  }
})