import store from '../../store';
import create from '../../utils/create';
import {
  DiscountModel
} from "../../models/my-discount.js";
const discountModel = new DiscountModel();
import {
  config
} from "../../models/config.js";
const app = getApp();
create(store, {
  onLoad: function() {
    wx.showLoading({});
    this.postApoint();
  },
  // 我的预约
  postApoint() {
    let _this = this;
    let data = discountModel.postApoint(config);
    data.then(res => {
      _this.setData({
        yyList: res.data.list
      })
      wx.hideLoading();
    })
  },
  onShareAppMessage: function() {

  }
})