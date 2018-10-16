// pages/book/book.js
import {
  BookModel
} from '../../models/book.js';
const bookModel = new BookModel();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 纯粹callback 回调地狱 return
    // promise 代码风格 多个异步等待合并
    books: [],
    searching: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // const promise = new Promise((resolve, reject) => {
    //   // pending进行中 fulfilled已成功 rejected已失败
    //   wx.getSystemInfo({
    //     success: res => resolve(res),
    //     fail: error => reject(error)
    //   })
    // });

    // promise.then((res) => {
    //   console.log(res);
    // }, (err) => {
    //   console.log(err);
    // })
    bookModel.getHotList()
      .then(res => {
        this.setData({
          books: res
        })
      })
    // .then(res => {
    //   console.log(res);
    //   return bookModel.getMyBookCount();
    // })
    // .then(res => {
    //   console.log(res);
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },
  onSearching() {
    this.setData({
      searching: true
    })
  },
  onCancel(e) {
    this.setData({
      searching: false
    })
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