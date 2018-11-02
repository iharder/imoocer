// 引入通讯
import store from '../../store';
import create from '../../utils/create';
// 引入普通接口
import {
  config
} from "../../models/config.js";
// 引入优惠接口
import {
  DiscountModel
} from "../../models/my-discount.js";
const discountModel = new DiscountModel();

// 引入商家接口
import {
  SellerModel
} from "../../models/index-seller.js";
const sellerModel = new SellerModel();

const app = getApp();
create(store, {
  // 页面展示的时候
  onLoad() {

    let openId = wx.getStorageSync('openId');
    config.openid = openId;
    // 等待浮层
    wx.showLoading();
    // 检查是否授权
    if (wx.getStorageSync("openId").length == 0) {
      wx.redirectTo({
        url: '../login/login',
      })
    } else {
      // 获取配送信息
      let distribu = this.distribu(config);
      // 获取商家优惠门店
      let sellerDis = this.sellerDis(config);
      // 获取商家基本信息
      let sellerInfo = this.sellerInfo(config);
      // 结束等待浮层
      let _this = this;
      // 获取我的优惠
      let myDis = discountModel.postMyDis(config);
      myDis.then(res => {
        _this.store.data.myDis = res.data;
        wx.setStorageSync("myDis", res.data)
        _this.update();
      });
      Promise.all([distribu, sellerDis, sellerInfo, myDis])
        .then(res => {
          let data = _this.store.data.seller;
          wx.setStorageSync("order", data);
          wx.hideLoading();
        });
    }
  },
  // 商家基本信息接口
  sellerInfo(config) {
    let _this = this;
    let data = sellerModel.postSellerInfo(config);
    data.then(res => {
      _this.store.data.seller.sellerInfo = res.data.data;
      wx.setStorageSync('seller', res.data.data);

      wx.setNavigationBarTitle({
        title: res.data.data.name
      })
      _this.update();
    })
    return new Promise((resolve, reject) => {
      resolve(data);
    })
  },
  // 商家优惠接口
  sellerDis(config) {
    let _this = this;
    let storeConfig = config;
    // 门店优惠
    storeConfig.type = "2";
    let data = discountModel.postSeller(storeConfig);
    data.then(res => {
      _this.store.data.seller.sellerDis = res.data;
      _this.store.data.seller.have = true;
    })
    return new Promise((resolve, reject) => {
      resolve(data);
    })
  },
  // 配送接口
  distribu(config) {
    let _this = this;
    let lat;
    let lng;
    wx.getLocation({
      success: res => {
        this.store.data.addres.lat = res.latitude;
        this.store.data.addres.lng = res.longitude;
        this.update();
        lat = res.latitude;
        lng = res.longitude;
        let distriConfig = {
          appid: config.appid,
          appkey: config.appkey,
          lat: lat,
          lng: lng,
          openid: config.openid
        };
        let data = discountModel.postDistri(distriConfig);
        data.then(res => {
          _this.store.data.indexTkFood.distri = res.data;
          _this.update();
        })
        return new Promise((resolve, reject) => {
          resolve(data);
        })
      }
    });
  },
  // 进入外卖页面
  loadTkFood() {
    wx.navigateTo({
      url: '../index-tkfood/index-tkfood',
    })
  },
  // 打电话
  callPhone() {
    this.store.callPhone();
  },
  // 分享信息
  onShareAppMessage: function() {

  },
  // 进入优惠券页面
  loadDis() {
    wx.navigateTo({
      url: '../my-rc-dis/my-rc-dis',
    })
  },
  // 进入收银界面
  loadSilver() {
    wx.navigateTo({
      url: '../index-silver/index-silver',
    })
  },

  //预订
  loadReserve() {
    wx.navigateTo({
      url: '../yuding/index',
    })
  },

  //点餐
  loadOrder() {
    wx.scanCode({
      success: (res) => {
        console.log(res);
        for (let i = 0; i < res.path.length; i++) {
          if (res.path[i] == '?') {
            wx.navigateTo({
              url: res.path,
            });
          }
        }
        wx.navigateTo({
          url: '/pages/diancan/waimai/index',
        });
      },
      fail: (res) => {
        // console.log(res);
      }
    });
  },

  // 打开地图组件
  map() {
    wx.navigateTo({
      url: '/pages/index-map/index-map',
    })
  }
})