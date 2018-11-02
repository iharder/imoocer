import indexTkFood from "./pages/index-tkfood/store.js";
import delivery from "./pages/delivery/store.js";
import deliveryAdd from "./pages/delivery-add/store.js";
import rcDis from "./pages/my-rc-dis/store.js";
import myDis from "./pages/my-dis/store.js";
import indexAccount from "./pages/index-account/store.js";
import diancanOrder from "./pages/diancan/waimai/store.js";
import {
  AddressModel
} from "./models/my-adress.js";
const addressModel = new AddressModel();
let openId = wx.getStorageSync('openId');
let extConfig = wx.getStorageSync("extConfig");
let user = wx.getStorageSync("user");
let config = {
  openid: openId,
  appkey: extConfig.appkey,
  appid: extConfig.appid
}
export default {
  data: {
    address: function() {
      return {
        address: this.delivery.address,
        name: this.delivery.name,
        phone: this.delivery.phone
      }
    },
    // 活动逻辑
    activi: function() {
      if (this.seller.have) {
        let man = this.seller.sellerDis.manjianlist;
        let totalPrice = this.indexTkFood.totalPrice;
        let manList = [];
        let priceList = {};
        let l = man.length;
        let peisong = this.seller.sellerInfo.qijia;
        for (let i = 0; i < l; i++) {
          manList[i] = man[i].man_price;
          priceList[man[i].man_price] = man[i].price;
        }
        // 价格为0时显示的满减活动
        if (totalPrice == 0) {
          let text = '';
          for (let i = 0; i < l; i++) {
            text += '满' + man[i].man_price + '减' + man[i].price + ',';
          }
          text = text.substring(0, text.length - 1);
          return text;
        }
        manList.sort(function(a, b) {
          return b - a;
        })

        // priceList: {
        //   20: 2,
        //   100: 10
        // }
        for (let i = 0; i < l; i++) {
          if (totalPrice < peisong) {
            return `还差${(peisong - totalPrice).toFixed(2)}元起送`;
          }
          if (totalPrice >= manList[i]) {
            if (i == l - 1) {
              return `已减${priceList[manList[i]]}元,再买${manList[i - 1] - totalPrice}元减${priceList[manList[i - 1]]}元`;
            } else {
              return `已减${priceList[manList[i]]}元`;
            }
          }
        }
        manList.sort(function(a, b) {
          return a - b;
        })
        if (totalPrice > peisong && totalPrice < manList[0]) {
          return `已到配送价格`;
        }
      }
      return '开门大吉';
    },
    addres: {
      default_add: false
    },
    indexTkFood: indexTkFood.data,
    delivery: delivery.data,
    rcDis: rcDis.data,
    myDis: myDis.data,
    indexAccount: indexAccount.data,
    deliveryAdd: deliveryAdd.data,
    diancanOrder: diancanOrder.data,
    seller: {
      have: false
    },
    order: {
      changeIndex: 0,
      wmIndex: 0,
      dcIndex: 1
    },
    orderData: {
      type: '堂食',
      use: false,
      useDis: 0
    },
    user: user
  },
  // 拨打电话
  callPhone() {
    let phone = this.data.seller.sellerInfo.tel;
    wx.makePhoneCall({
      phoneNumber: phone,
    });
  },
  // 获取默认地址
  getDefaultAdd(config) {
    let _this = this;
    let default_add = addressModel.postDefault(config);
    default_add.then(res => {
      _this.data.addres.defaultAdd = res.data.address;
      _this.update();
      wx.hideLoading();
    })
  }
}