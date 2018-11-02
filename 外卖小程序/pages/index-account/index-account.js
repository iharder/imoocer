import store from '../../store';
import create from '../../utils/create';
import {
  config
} from "../../models/config.js";
import {
  MenuModel
} from "../../models/index-tkfood-menu.js";
let openid = wx.getStorageSync("openId");

const menuModel = new MenuModel();
const app = getApp();
create(store, {
  onLoad: function() {
    config.openid = openid;
    console.log(config);
    this.store.data.indexAccount.use = false;
    this.update();
  },
  onShareAppMessage: function() {

  },
  onShow() {
    let disList = this.store.data.myDis.list;
    let num = 0;
    for (let i = 0; i < disList.length; i++) {
      if (disList[i].type_name == "外卖") {
        num++;
      }
    }
    this.store.data.indexAccount.disNum = num;
    // 获取默认地址
    config.openid = openid;
    this.store.getDefaultAdd(config);
    this.update();
    let haveSeller = this.store.data.seller.have;
    if (haveSeller) {
      let totalPrice = this.store.data.indexTkFood.totalPrice;
      // 检查满减条件
      let activity = this.store.data.seller.sellerDis.manjianlist;
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
        this.store.data.indexAccount.manPrice = manPrice;
        this.store.data.indexAccount.price = price;
      } else {
        this.store.data.indexAccount.manPrice = 0;
        this.store.data.indexAccount.price = 0;
      }
    } else {
      this.store.data.indexAccount.manPrice = 0;
      this.store.data.indexAccount.price = 0;
    }
    this.update();
  },
  // 进入我的优惠券
  loadMyDis() {
    wx.navigateTo({
      url: '../my-dis/my-dis?type=外卖'
    });
    this.store.data.indexAccount.use = true;
    this.update();
  },
  // 进入收货地址
  loadDelivery() {
    wx.navigateTo({
      url: '../delivery-add/delivery-add',
    })
  },
  // 上传菜单
  formSubmit: function(e) {
    let store = this.store.data;
    let coupon = store.indexAccount.couponId || 0;
    let lat = store.addres.lat;
    let lng = store.addres.lng;
    let menu = store.indexTkFood.selectMenu;
    let formId = e.detail.formId;
    let _this = this;
    if (!store.addres.defaultAdd) {
      wx.showToast({
        title: '请选择收货地址',
        icon: "none",
        duration: 2000
      })
    } else {
      let addressId = store.addres.defaultAdd.address_id;
      config.coupon_id = coupon;
      config.address_id = addressId;
      config.lat = lat;
      config.lng = lng;
      config.menu = JSON.stringify(menu);
      config.formId = formId;
      config.ordertype = 1;
      let data = menuModel.uploadMenu(config);
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
                _this.store.data.indexTkFood.totalPrice = 0;
                _this.store.data.indexTkFood.totalCount = 0;
                _this.store.data.indexTkFood.totalCount = 0;
                setTimeout(() => {
                  wx.redirectTo({
                    url: '/pages/index/index',
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
    }
  }
})