// pages/destination/destination-detail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // item: [{
    //   slideList: [{
    //     name: '热门'
    //   }, {
    //     name: '必去top10'
    //   }, {
    //     name: '亲子游'
    //   }, {
    //     name: '城市风光'
    //   }, {
    //     name: '古迹遗址'
    //   }, {
    //     name: '摄影佳地'
    //   }],
    //   changeIndex: 0,
    //   title: "玩乐游记"
    // }, {
    //   slideList: [{
    //     name: '热门'
    //   }, {
    //     name: '必去top10'
    //   }, {
    //     name: '经济型'
    //   }, {
    //     name: '高档型'
    //   }, {
    //     name: '豪华酒店'
    //   }],
    //   changeIndex: 0,
    //   title: "住宿游记"
    // }, {
    //   slideList: [{
    //     name: '热门'
    //   }, {
    //     name: '必去top10'
    //   }, {
    //     name: '西餐厅'
    //   }, {
    //     name: '小龙虾'
    //   }, {
    //     name: '老母鸡汤'
    //   }, {
    //     name: '臭鳜鱼'
    //   }, {
    //     name: "酒吧"
    //   }],
    //   changeIndex: 0,
    //   title: "美食游记"
    // }, {
    //   slideList: [{
    //     name: '热门'
    //   }, {
    //     name: '必去top10'
    //   }, {
    //     name: '步行街'
    //   }, {
    //     name: '万达茂'
    //   }, {
    //     name: '万达广场'
    //   }, {
    //     name: '心之城'
    //   }, {
    //     name: "银泰"
    //   }],
    //   changeIndex: 0,
    //   title: "购物游记"
    // }],
    itemIndex: 0
  },
  // 选择类型
  selectSlideitem(e) {
    let changeIndex = e.currentTarget.dataset.index;
    let item = this.data.item;
    let index = this.data.itemIndex;
    item[index].changeIndex = changeIndex;
    this.setData({
      item: item
    })
  },
  // tab选项卡的索引
  selectTab(e) {
    this.setData({
      itemIndex: e.detail.index
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