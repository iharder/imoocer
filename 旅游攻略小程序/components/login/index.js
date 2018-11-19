// components/common/login/index.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    showFlag: { // 属性名
      type: Number, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: 0, // 属性初始值（可选），如果未指定则会根据类型选择一个
    },

    mainColor: {
      type: String,
      value: "#00B5DE"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    //隐藏弹框
    hideDialog: function() {
      this.setData({
        showFlag: !this.data.showFlag
      })
    },

    //展示弹框
    showDialog() {
      this.setData({
        showFlag: !this.data.showFlag
      })
    },

    getPhoneNumber(val) {
      if (!val.detail.encryptedData) {
        wx.navigateTo({
          url: '/pages/common/pages/login/bindphone',
        });
        return true;
      }
      var that = this;
      wx.login({
        success(res) {
          if (res.code) {
            app.post("/api/passport/getMobile", {
              code: res.code,
              encryptedata: encodeURIComponent(val.detail.encryptedData),
              iv: encodeURIComponent(val.detail.iv),
            }).then(res => {
              app.userInfoData.userToken = res.userToken;
              wx.setStorageSync("usertoken", res.userToken);
              that.setData({
                // isLogin: false,
                // userToken: userToken,
                showFlag: 0,
              });
              // var userToken = wx.getStorageSync("usertoken");
              console.log("userToken=>" + res.userToken);
              // that.getUserInfo();
              //触发取消回调
              // this.triggerEvent("getUserInfo")
              app.getUserInfo(res.userToken);
            });
          } else {
          }
        },
      })
    },
  }
})