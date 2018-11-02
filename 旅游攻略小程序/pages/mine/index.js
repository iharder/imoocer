// pages/mine/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    writeMask: false,
    moreMask: false,
    myList: [{
      name: ['我的发布', '我的收藏']
    }, {
      name: ['游币商城', '常用地址']
    }, {
      name: ['关于我们', '联系客服']
    }, {
      name: ['更多小程序'],
      bind: ["more"]
    }],
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    currentSwiper: 0
  },
  // 切换中间活动
  center() {
    let writeMask = this.data.writeMask;
    console.log(writeMask);
    this.setData({
      writeMask: !writeMask
    })
  },
  // 切换更多APP遮罩
  changeMore() {
    let mask = this.data.moreMask;
    this.setData({
      moreMask: !mask
    })
  },
  // 轮播图改变
  swiperChange: function(e) {
    this.setData({
      currentSwiper: e.detail.current
    })
  },
  // 进入用户中心
  loadUsercen() {
    wx.navigateTo({
      url: '/pages/mine/mineCenter/index'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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