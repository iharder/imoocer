// pages/yuding/index.js
import {
  ReserveModel
} from '../../models/index-yuyue';

const reserveModel = new ReserveModel();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    date: "",
    time: "",
  },

  /**
   * 日期改变
   */
  bindDateChange: function(e) {
    // console.log(e);
    var date = e.detail.value;
    this.setData({
      date: date,
    });
  },

  /**
   * 时间改变
   */
  bindTimeChange: function(e) {
    // console.log(e);
    var time = e.detail.value;
    this.setData({
      time: time,
    });
  },

  /**
   * 预约表单
   */
  onYuYueListener: function(e) {
    // console.log(e);
    var name = e.detail.value.name;
    var num = e.detail.value.num;
    var phone = e.detail.value.phone;
    var remark = e.detail.value.remark;
    var date = this.data.date;
    var time = this.data.time;
    var formid = e.detail.formId;
    let extConfig = wx.getStorageSync('extConfig');
    let openId = wx.getStorageSync('openId');
    // console.log("openid=>" + openId);
    if (openId == '') {
      wx.showToast({
        title: '授权登录',
        icon: "none"
      })
      return;
    }
    extConfig.openid = openId;
    extConfig.formid = formid;
    if (name == '') {
      wx.showToast({
        title: '姓名不能为空',
        icon: "none"
      })
      return;
    }
    extConfig.name = name;

    if (num == '') {
      wx.showToast({
        title: '人数不能为空',
        icon: "none"
      })
      return;
    }
    extConfig.num = num;

    if (phone == '') {
      wx.showToast({
        title: '手机号不能为空',
        icon: "none"
      })
      return;
    }
    extConfig.phone = phone;

    if (date == '') {
      wx.showToast({
        title: '请选择日期',
        icon: "none"
      })
      return;
    }
    extConfig.date = date;

    if (time == '') {
      wx.showToast({
        title: '请选择时间',
        icon: "none"
      })
      return;
    }
    extConfig.time = time;
    extConfig.remark = remark;

    let yuyue = reserveModel.postReserveInfo(extConfig);

    yuyue.then(res => {
      // console.log(res);
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
                title: '预约成功'
              });
              setTimeout(() => {
                wx.navigateBack({})
              }, 1000)
            },
            fail: function(res) {
              wx.showToast({
                title: '预约失败',
                icon: "none",
                duration: 2000
              });
            }
          })
        }
      } else {
        wx.showToast({
          title: res.msg,
        })
      }
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    new ReserveModel();
    let seller = wx.getStorageSync("seller");
    this.setData({
      imgSrc: seller.logo,
      name: seller.name
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