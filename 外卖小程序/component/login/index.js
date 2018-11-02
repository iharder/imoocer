import create from '../../utils/create'
import {
  UserModel
} from '../../models/index-user.js';
const userModel = new UserModel();
create({
  pure: true,
  externalClasses: ['list-class'],
  options: {
    multipleSlots: true
  },
  properties: {},
  data: {

  },
  ready: function() {
    wx.login({
      success(res) {
        wx.setStorageSync('code', res.code);
      }
    })
  },
  methods: {
    bindGetUserInfo(e) {
      // 登录
      wx.login({
        success(res) {
          let code = res.code;
          let extConfig = wx.getStorageSync('extConfig');
          let appid = extConfig.appid;
          let appkey = extConfig.appkey
          let config = {
            code: code,
            iv: e.detail.iv,
            encryptedData: e.detail.encryptedData,
            info: e.detail.rawData,
            appid: appid,
            appkey: appkey
          }
          let user = userModel.postUser(config);
          wx.showLoading();
          user.then((res) => {
            var openId = res.data.openid;
            wx.setStorageSync('user', res.data)
            wx.setStorageSync('openId', openId);
            wx.switchTab({
              url: '../index/index',
            })
            wx.hideLoading();
          })
        }
      })
    }
  }
})