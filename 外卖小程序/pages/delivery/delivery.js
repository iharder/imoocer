import store from '../../store';
import create from '../../utils/create';
import {
  AddressModel
} from "../../models/my-adress.js";
const addressModel = new AddressModel();
let openId = wx.getStorageSync('openId');
let extConfig = wx.getStorageSync("extConfig");
const app = getApp();
create(store, {
  onLoad: function(option) {
    if (option.title) {
      wx.setNavigationBarTitle({
        title: option.title,
      })
      this.store.data.delivery.title = option.title;
      this.update();
    }
    this.store.data.deliveryAdd.detail.is_default = 0;
  },
  onShareAppMessage: function() {

  },
  onShow: function(option) {
    // 初始化地址
    let detail = this.store.data.deliveryAdd.detail;
    this.store.data.delivery.address = detail.address;
    this.store.data.delivery.name = detail.name;
    this.store.data.delivery.phone = detail.mobile;
    this.update();
  },
  // 修改地址
  button() {
    let title = this.store.data.deliveryAdd.title;
    // 修改地址 
    let store = this.store.data;
    let name = store.delivery.name;
    let address = store.delivery.address;
    let phone = store.delivery.mobile;
    let gps = store.addres.gps;
    let id = store.deliveryAdd.id;
    if (name.length == 0) {
      wx.showToast({
        title: "名字不能为空哦",
        icon: 'none',
        duration: 2000
      })
    } else if (phone.length == 0) {
      wx.showToast({
        title: "电话不能为空哦",
        icon: 'none',
        duration: 2000
      })
    } else if (address.length == 0) {
      wx.showToast({
        title: "地址不能为空哦",
        icon: 'none',
        duration: 2000
      })
    } else if (!gps) {
      wx.showToast({
        title: "具体地址不能为空哦",
        icon: 'none',
        duration: 2000
      })
    } else {
      store.delivery.value = store.address;
      this.update();
      wx.showToast({
        title: '保存成功',
        icon: "none",
        duration: 2000
      });
      let address = store.delivery.value;
      let gps = store.addres.gps;
      let isDefault = store.deliveryAdd.detail.is_default;
      let config = {
        appid: extConfig.appid,
        appkey: extConfig.appkey,
        openid: openId,
        name: address.name,
        mobile: address.phone,
        address: address.address,
        gps_addr: gps.address,
        lng: gps.longitude,
        lat: gps.latitude,
        isDefault: isDefault
      }
      // 添加地址
      if (title == '保存') {
        let addAddress = addressModel.postCreate(config);
        setTimeout(() => {
          wx.navigateBack({
            delta: 1
          });
        }, 500)
      } else {
        let id = this.store.data.deliveryAdd.id;
        config.id = id;
        let editAddress = addressModel.postEdit(config);
        setTimeout(() => {
          wx.navigateBack({
            delta: 1
          });
        }, 500);
      }
    }
  },
})