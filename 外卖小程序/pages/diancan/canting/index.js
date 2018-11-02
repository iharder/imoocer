// pages/diancan/canting/index.js
import {
  RestaurantModel
} from '../../../models/canting/index';
import {
  OrderModel
} from '../../../models/canting/order';
import {
  config
} from "../../../models/config.js";
let openid = wx.getStorageSync("openId");
config.openid = openid;
const restModel = new RestaurantModel();
const orderModel = new OrderModel();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    desk_id: 1,
    showModal: false,

    people_num: 0,
  },

  /**
   * 催下菜
   */
  onUrgeListener: function() {
    config.desk_id = wx.getStorageSync("desk_id");
    orderModel.postCuiCai(config).then(res => {
      if (res.code == 200) {
        wx.showToast({
          title: '催菜成功',
        })
      }
      if (res.code == 400) {
        wx.showToast({
          title: res.msg,
          icon: "none"
        })
      }
    });

  },

  /**
   * 隐藏模态对话框
   */
  hideModal: function() {
    this.setData({
      showModal: false
    });
  },

  /**
   * 对话框确认按钮点击事件
   */
  onConfirm: function(e) {
    // 提交添加人数
    var num = this.data.people_num;
    if (num <= 0) {
      wx.showToast({
        title: "请输入新增人数",
        icon: "none"
      })
      return;
    }
    let desk_id = this.data.desk_id;

    config.desk_id = wx.getStorageSync("desk_id");
    config.repast_num = num;
    let data = orderModel.postAddPeo(config);
    data.then(res => {
      if (res.code == 200) {
        wx.showToast({
          title: "增加成功"
        })
      } else {
        wx.showToast({
          title: res.msg,
          icon: "none"
        })
      }
    })

    this.setData({
      showModal: false,
      people_num: 0
    })
  },

  /**
   * 对话框取消按钮点击事件
   */
  onCancel: function() {
    this.hideModal();
  },

  inputChange: function(e) {

    this.setData({
      people_num: e.detail.value,
    });

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let id = options.desk_id;
    wx.setStorageSync("desk_id", id);
    let seller = wx.getStorageSync("seller");
    this.setData({
      seller: seller
    })
  },

  /**
   * 点菜
   */
  dianMenu: function(e) {
    wx.navigateTo({
      url: '/pages/diancan/canting/diancan',
    })
    wx.setStorageSync("is_jiacan", 0);
  },

  /**
   * 加菜
   */
  addMenu: function(e) {
    wx.navigateTo({
      url: '/pages/diancan/canting/diancan',
    })
    wx.setStorageSync("is_jiacan", 1);
  },

  /**
   * 设置人数
   */
  showDialogBtn: function(e) {
    this.setData({
      showModal: true
    })
  },

  /**
   * 我的菜单
   */
  myMenu: function(e) {
    wx.navigateTo({
      url: '/pages/diancan/canting/mymenu',
    })

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