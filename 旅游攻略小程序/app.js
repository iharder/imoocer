//app.js
const linkUtils = require("/utils/linkUtils.js");
import {
  ToastPannel
} from "/plugins/toast/index"

import {
  LoadingPannel
} from "/plugins/loading/index"
// 公共接口
import {
  Common
} from "./models/_util/common.js";
const common = new Common();
import btt from "/utils/btt.js"
const app = getApp();
App({
  qdd: {
    // tag配置
    tagConfig: {},
    // 首页信息
    mineInfo: [],
    // 举报配置
    reportConfig: {},
    // 查看全部评论配置:
    commentDetail: {},
    // 用户信息
    userData: [],
    // 新tag
    tag: {
      // 初始tag
      startTag: [],
      // 中间tag
      midTag: [],
      // 地点
      shotPlace: ""
    },
    // 城市id
    city_id: [],
    // 加载过
    index: 0
  },

  common: common,
  ToastPannel,
  LoadingPannel,
  onLaunch(e) {
    this.globalData.scene = e.scene;
  },
  /**
   * 初始化参数
   */
  init(state = 0) {
    var that = this;
    return new Promise(function(resolve, reject) {
      if (!that.globalData.token || !that.globalData.openId) {
        wx.login({
          success: function(res) {
            if (res.code) {
              that.globalData.code = res.code;
              //调用登录接口
              that.post("/api/strategy.initialization/Init", {
                code: res.code,
                sceneId: that.globalData.scene,
                invite: 1,
              }, true).then(res => {
                that.themeInfoData.skin = res.skin;
                that.globalData.token = res.token;
                that.globalData.openId = res.openId;
                that.cityInfoData.departId = res.departId;
                that.cityInfoData.depart = res.depart;
                that.cityInfoData.destination = res.destination;
                wx.setStorageSync('wyu_departId', res.departId);
                that.initConfigInfo(state);
                /**
                 * 判断当前页面是否存在userToken, 如果不存在去缓存试试
                 */
                that.initUserInfo();
                resolve();
              }).catch((error) => {
                reject(error);
              })
            } else {
              reject();
            }
          }
        });
      } else {
        that.initConfigInfo(state);
        that.initUserInfo();
        resolve();
      }
    });
  },

  /**
   * 显示Loading
   */
  showLoading: function(data) {
    wx.showLoading({
      title: data,
    })
  },

  post(api, params = {}, init = false) {
    let extConfig = wx.getExtConfigSync ? wx.getExtConfigSync() : {};
    var apiurl = extConfig.apiurl + api;
    params.token = this.globalData.token;
    if (init) {
      apiurl = extConfig.apiurl + api + "?appId=" + extConfig.app_id + "&appKey=" + extConfig.app_key;
    }
    params.departId = wx.getStorageSync('wyu_departId');
    params.userToken = this.userInfoData.userToken;
    return new Promise(function(resolve, reject) {
      // this.themeInfoData.loading = new getApp().LoadingPannel();
      // loading.show();
      wx.request({
        url: apiurl,
        data: params,
        method: 'POST',
        dataType: 'json',
        success(data) {
          if (data.data.code == 200) {
            resolve(data.data.data);
          } else {
            wx.showModal({
              content: data.data.msg,
              showCancel: false,
              confirmColor: '',
            });
          }
        },
        fail(val) {
          reject();
        }
      });
    });
  },

  fileUpload() {
    var that = this;
    return new Promise(function(resolve, reject) {
      var apiurl = "http://statics.woyaou.com/api/upload/miniappUpload";
      wx.chooseImage({
        count: 1, // 默认9
        sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function(res) {
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          var tempFilePaths = res.tempFilePaths;
          wx.showToast({
              icon: "loading",
              title: "正在上传"
            }),
            wx.uploadFile({
              url: apiurl,
              filePath: tempFilePaths[0],
              name: 'file',
              header: {
                "Content-Type": "multipart/form-data"
              },
              success: function(res) {
                var data = JSON.parse(res.data)
                if (res.statusCode != 200 || data.code != 200) {
                  wx.showModal({
                    title: '提示',
                    content: '上传失败',
                    showCancel: false
                  })
                  return;
                }
                resolve(data.url);
              },
              fail: function(e) {
                wx.showModal({
                  title: '提示',
                  content: '上传失败',
                  showCancel: false
                })
              },
              complete: function() {
                wx.hideToast();
              }
            })
        }
      });
    });
  },


  /**
   * 获取用户信息
   */
  getUserInfo: function(userToken) {
    this.post("/api/user.user/getUserInfo", {
      userToken: userToken,
    }).then(res => {
      var adverts = linkUtils.formatLinks(res.adverts);
      res.adverts = adverts;
      getApp().userInfoData.userData = res;
      this.initUserInfo();
    });
  },

  /**
   * 用户退出
   */
  userLogout: function() {
    this.userInfoData.userToken = "";
    this.userInfoData.userData = [];
    wx.setStorageSync("usertoken", "");
    this.initUserInfo();
  },

  /**
   * 初始化当前页面用户信息
   */
  initUserInfo: function() {
    let pages = getCurrentPages();
    let curPage = pages[pages.length - 1];
    // this.__page = curPage;
    // 给组件的数据合并到页面的data对象中
    var userToken = wx.getStorageSync("usertoken");
    if (userToken != "") {
      this.userInfoData.userToken = userToken;
    }
    // console.log(userToken);
    curPage.setData(getApp().userInfoData);
  },

  /**
   * 初始化配置信息
   */
  initConfigInfo: function(state = 0) {
    var skin = getApp().themeInfoData.skin;
    let pages = getCurrentPages();
    let curPage = pages[pages.length - 1];
    // this.__page = curPage;
    // 给组件的数据合并到页面的data对象中
    curPage.setData(skin.colors);
    // curPage.setData(getApp().globalData.userData);
    if (state == 0) {
      wx.setNavigationBarColor({
        frontColor: skin.colors.navigationBarFrontColor,
        backgroundColor: skin.colors.navigationBarBackgroundColor,
      });
    }

  },

  /**
   * 获取城市Name
   */
  getLocationCityName: function() {
    if (this.cityInfoData.departName != '') {
      return this.cityInfoData.departName;
    } else {
      var cityList = this.cityInfoData.depart.citylist
      for (var x in cityList) {
        for (var y in cityList[x].data) {
          if (cityList[x].data[y].id == this.cityInfoData.departId) {
            console.log(cityList[x].data[y].cityName);
            this.cityInfoData.departName = cityList[x].data[y].cityName;
            return cityList[x].data[y].cityName;
          }
        }
      }
    }
  },

  globalData: {
    token: "",
    userToken: "",
    openId: '',
    scene: 0,
  },

  themeInfoData: {
    skin: [],
    loading: {},
  },

  cityInfoData: {
    departId: 0,
    departName: '',
    depart: [],
    destination: [],
  },

  userInfoData: {
    userData: [], //用户信息
    userToken: "",
  }
})