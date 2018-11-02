import store from '../../store';
import create from '../../utils/create';
const app = getApp();
import {
  AddressModel
} from "../../models/my-adress.js";
import {
  config
} from "../../models/config.js";
const addressModel = new AddressModel();
let openId = wx.getStorageSync('openId');
config.openid = openId;
let extConfig = wx.getStorageSync("extConfig");
create(store, {
  onLoad: function() {
    wx.showLoading();
  },
  // 选择地址
  selectAddress(e) {
    let index = e.currentTarget.dataset.index;
    let indexAdd = this.data.indexAdd.list;
    this.store.data.addres.defaultAdd = indexAdd[index];
    wx.showLoading({
      title: '修改成功',
      duration: 400
    })
    setTimeout(() => {
      wx.navigateBack({
        delta: 1
      })
    }, 500)
    this.update();
  },
  // 新增地址
  addAdress() {
    this.store.data.deliveryAdd.title = '保存';
    this.store.data.deliveryAdd.detail = {};
    wx.navigateTo({
      url: `../delivery/delivery`,
    })
  },
  onShow(option) {
    this.getAllAddress();
    this.store.getDefaultAdd(config);
  },
  // 获取所有地址
  getAllAddress() {
    let _this = this;
    // 获取所有地址
    let config = {
      appid: extConfig.appid,
      appkey: extConfig.appkey,
      openid: openId
    }
    let indextAddress = addressModel.postIndex(config);
    indextAddress.then(res => {
      _this.setData({
        indexAdd: res.data
      })
    });
  },
  // 初始化
  loadAdd(e) {
    let detail = e.currentTarget.dataset.detail;
    let id = e.currentTarget.dataset.detail.id;
    this.store.data.deliveryAdd.detail = detail;
    this.store.data.deliveryAdd.id = id;
  },
  // 修改、获取详细地址
  detailAddress(e) {
    this.loadAdd(e);
    this.store.data.deliveryAdd.title = "修改";
    this.update();
    wx.navigateTo({
      url: `../delivery/delivery?title=修改地址`,
    })
  },
  // 删除地址
  reduceAddress(e) {
    let id = e.currentTarget.dataset.id;
    let _this = this;
    let openId = wx.getStorageSync('openId');
    wx.showModal({
      title: '',
      content: '确定删除么',
      success: res => {
        if (res.confirm) {
          let config = {
            openid: openId,
            appid: extConfig.appid,
            appkey: extConfig.appkey,
            id: id
          }
          addressModel.postDel(config).then(res => {
            addressModel.postIndex(config).then(res => {
              _this.setData({
                indexAdd: res.data
              })
            });
          });
        }
      }
    })
  },
  onShareAppMessage: function() {

  },
  demo() {

  }
})