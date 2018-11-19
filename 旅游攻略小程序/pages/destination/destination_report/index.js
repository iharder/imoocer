// pages/destination/destination-report/index.js
const app = getApp();
import {
  WriteModel
} from "../../../models/write.js";
const writeModel = new WriteModel();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [{
        value: '广告灌水',
        checked: 'true',
        id: 0
      },
      {
        value: '色情暴力',
        id: 1
      },
      {
        value: '危害国家安全',
        id: 2
      },
      {
        value: '其他',
        id: 3
      }
    ],
    reportInfo: "",
    reportType: 1
  },
  // 上传举报
  submitReport() {
    let config = this.data;
    if (config.reportInfo == "") {
      wx.showToast({
        title: '请输入举报信息',
        icon: "none"
      });
      return;
    }
    // 类型为攻略的举报
    if (config.type == "strategy") {
      writeModel.reportStrategy({
        strategy_id: config.id,
        comment_id: config.comment_id,
        reply_id: config.reply_id || undefined,
        note: config.reportInfo,
        type: config.reportType
      }).then(res => {
        this.reportResult();
      })
      return;
    }
    // 类型为游记的举报
    if (this.data.type == "note") {
      writeModel.reportNote({
        note_id: config.id,
        comment_id: config.comment_id,
        reply_id: config.reply_id || undefined,
        note: config.reportInfo,
        type: config.reportType
      }).then(res => {
        this.reportResult();
      }).catch(res => console.log(res));
    }
  },
  // 举报结果
  reportResult() {
    wx.showToast({
      title: '举报成功',
    })
    setTimeout(res => {
      wx.navigateBack({
        delta: 1
      });
    }, 5000)
  },
  // 举报类型选择
  radioChange(e) {
    let reportBox = ['广告灌水', '色情暴力', '危害国家安全', '其他'];
    let reportType = 0;
    reportBox.forEach((item, index) => {
      if (e.detail.value == item) {
        this.setData({
          reportType: (index + 1)
        });
      }
    });
  },
  // 监听打字时间
  bindInput(e) {
    this.setData({
      reportInfo: e.detail.text
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    app.init().then(res => {});
    this.setData(app.qdd.reportConfig);
    if (this.data.type == 'strategy') {
      wx.setNavigationBarTitle({
        title: '攻略详情',
      });
    }
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