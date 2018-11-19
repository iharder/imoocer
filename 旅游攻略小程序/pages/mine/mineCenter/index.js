// pages/mine/mineCenter/index.js
import {
  getMyInfo,
  getMyNote,
  getMyFan,
  concern,
  unConcern
} from "../../../models/user.js";
const app = getApp();
Page({
  data: {
    // 用户信息
    userInfo: {},
    // 用户拥有的信息
    slideInfo: {},
    // 是否关注
    isConcern: false
  },
  onLoad: function() {
    app.init().then(res => {
      let a = getMyInfo({
        user_id: this.data.userData.userinfo.user_id
      }).then(res => {
        this.setData({
          userInfo: res.userinfo,
          slideInfo: [
            res.userinfo.strategys,
            res.userinfo.notes,
            res.userinfo.fans
          ]
        });
      });
      let b = getMyNote({
        user_id: 1
      }).then(res => {
        this.setData({
          noteInfo: res.note
        })
      });
      let c = getMyFan({
        user_id: 1
      }).then(res => {
        this.setData({
          facInfo: res.fans
        })
      });
      // 全部异步执行完
      Promise.all([a]).then(res => {

      })
    });
  },
  //点击关注
  concern() {
    let isConcern = this.data.isConcern;
    this.setData({
      isConcern: !isConcern
    });
    if (!isConcern) {
      concern({
        user_id: 1
      });
    } else {
      unConcern({
        user_id: 1
      });
    }
  },
  onShareAppMessage: function() {

  }
})