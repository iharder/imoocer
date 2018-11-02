// pages/diancan/canting/order.js
import store from '../../../store';
import create from '../../../utils/create';
const app = getApp();

import {
  OrderModel
} from '../../../models/canting/order';
const orderModel = new OrderModel();
create(store, {
  /**
   * 页面的初始数据
   */
  data: {
    selectMenu: [],
    totalPrice: 0,
    is_qicai: 1,

    time: ['10分钟', '20分钟', '30分钟', '1小时', '2小时', '3小时'],
    seconds: ['600', '1200', '1800', '3600', '7200', '10800'],

    peopleNum: 1,

    is_jiacan: 0,
    formId: 0,
    desk_id: 1,
    index: 0
  },

  qicai: function(e) {
    var is_qicai = this.data.is_qicai;
    this.setData({
      is_qicai: is_qicai == 1 ? 0 : 1,
      // time_second: 0,
      // index: -1,
    });
  },

  /**
   * 用户点餐
   */
  sureOrder: function(e) {
    let formId = e.detail.formId;
    let extConfig = wx.getStorageSync('extConfig');
    let openId = wx.getStorageSync('openId');
    let index = this.data.index;
    let seconds = this.data.seconds;
    let is_qicai = this.data.is_qicai;
    extConfig.openid = openId;
    extConfig.formid = formId;
    extConfig.menu = JSON.stringify(this.data.selectMenu);
    extConfig.repast_num = this.data.peopleNum;
    extConfig.is_jiacan = this.data.is_jiacan;
    extConfig.desk_id = wx.getStorageSync("desk_id") || 1;
    if (!is_qicai) {
      extConfig.qicai_time = seconds[index];
    }
    extConfig.is_qicai = is_qicai;
    let order = orderModel.postUserOrder(extConfig);
    order.then(res => {
      // console.log(res.data.menu);
      // console.log("用户点餐下单=>" + JSON.stringify(res));
      if (res.code == 200) {
        wx.showToast({
          title: '恭喜发财，下单成功',
        })
        setTimeout(res => {
          wx.navigateBack({});
        }, 2000)
      } else {
        wx.showToast({
          title: res.msg,
          icon: "none"
        })
        setTimeout(res => {
          wx.navigateBack({});
        }, 2000)
      }
    });
  },

  /**
   * 人数减少
   */
  reduce: function() {
    var peopleNum = this.data.peopleNum;
    if (peopleNum == 1) {
      return;
    } else {
      peopleNum -= 1;
    }

    this.setData({
      peopleNum: peopleNum,
    });

  },


  /**
   * 人数减少
   */
  add: function() {
    var peopleNum = this.data.peopleNum;
    peopleNum += 1;
    this.setData({
      peopleNum: peopleNum,
    });
  },

  bindSelectDateChange: function(e) {
    this.setData({
      index: e.detail.value,
      time_second: this.data.seconds[e.detail.value],
      // sex: this.data.sArrays[e.detail.value].id,
    });

    // console.log("當前秒數：" + this.data.time_second);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.showLoading({
      title: '',
    })
    var data = wx.getStorageSync("dcData");
    let is_jiacan = wx.getStorageSync("is_jiacan");
    this.store.data.is_jiacan = is_jiacan;
    var totalPrice = this.data.totalPrice;
    // console.log("选中的=>");
    // console.log(JSON.stringify(data.selectMenu));
    for (var i in data.selectMenu) {
      totalPrice += data.selectMenu[i].count * data.selectMenu[i].price;
    }

    this.store.data.selectMenu = data.selectMenu;
    this.store.data.totalPrice = totalPrice;
    this.update();
    // 满减活动
    let myDis = wx.getStorageSync("myDis");
    let order = wx.getStorageSync("order");
    let disList = myDis.list;
    let num = 0;
    for (let i = 0; i < disList.length; i++) {
      if (disList[i].type_name == "店内消费") {
        num++;
      }
    }
    let couponNum = num;
    this.store.data.couponNum = couponNum;
    wx.hideLoading();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    let seller = wx.getStorageSync("order");
    let haveSeller = seller.have;
    if (haveSeller) {
      let totalPrice = this.data.totalPrice / 100;

      // 检查满减条件
      let activity = seller.manjianlist;

      // 满减价格组
      let manPriceList = [];
      // 满减减少价格组
      let priceList = [];
      let a = '';
      let manPrice = 0;
      let price = 0;
      for (let i = 0; i < activity.length; i++) {
        manPriceList[i] = (activity[i].man_price) / 100;
        priceList[(activity[i].man_price) / 100] = (activity[i].price) / 100;
      }
      let l = activity.length;
      manPriceList.sort(function(a, b) {
        return b - a;
      })

      // console.log(priceList);
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
  loadMyDis() {
    let index = this.data.index;
    // console.log(index);
    let orderData = this.store.data.orderData;
    orderData.use = true;
    wx.setStorageSync("orderData", orderData);
    this.store.data.type = "店内消费";
    this.update()
    wx.navigateTo({
      url: '../../my-dis/my-dis?type=店内消费'
    });
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
    wx.removeStorageSync("dcData");
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})