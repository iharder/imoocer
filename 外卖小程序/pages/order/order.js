import store from '../../store';
import create from '../../utils/create';
const app = getApp();
import {
  config
} from "../../models/config.js";
import {
  OrderModel
} from "../../models/order.js";
const orderModel = new OrderModel();
create(store, {
  onLoad() {

  },
  onShow: function() {
    wx.showLoading({
      title: '',
    })
    let openId = wx.getStorageSync('openId');
    config.openid = openId;
    // 获取外卖订单列表
    this.getOrderWM();
    // 获取点餐订单列表
    this.getOrderDC();
    this.store.data.order.wmLength = 4;
    this.store.data.order.dcLength = 4;
    this.update();
    wx.hideLoading();
  },
  onShareAppMessage: function() {

  },
  // 进去订单详情
  enterOrderdetail(e) {
    let id = e.currentTarget.dataset.id;
    let type = e.currentTarget.dataset.type;
    wx.navigateTo({
      url: `./order-detail?id=${id}&type=${type}`,
    })
  },
  // 获取外卖订单列表
  getOrderWM() {
    let _this = this;
    config.type = 1;
    let data = orderModel.getOrderList(config);
    data.then(res => {
      if (res.data.list.length >= 4) {
        _this.store.data.order._wmList = res.data.list;
        _this.store.data.order.wmList = res.data.list.slice(0, 4)
      } else {
        _this.store.data.order._wmList = res.data.list;
        _this.store.data.order.wmList = res.data.list;
      }
      _this.update();
    })
  },
  // 获取点餐订单列表
  getOrderDC() {
    let _this = this;
    config.type = 2;
    let data = orderModel.getOrderList(config);
    data.then(res => {
      if (res.data.list.length >= 4) {
        _this.store.data.order._dcList = res.data.list;
        _this.store.data.order.dcList = res.data.list.slice(0, 4)
      } else {
        _this.store.data.order._dcList = res.data.list;
        _this.store.data.order.dcList = res.data.list;
      }
      _this.update();
    })
  },
  // 加载更多外卖列表
  moreWm() {
    let l = this.store.data.order.wmLength;
    let _l = this.store.data.order._wmList.length;
    if (l < _l) {
      wx.showLoading({
        title: "加载中"
      });
      let num = 4;
      if (_l - l < 4) {
        num = _l - l;
      }
      this.store.data.order.wmList = this.store.data.order._wmList.slice(0, l + num);
      this.store.data.order.wmLength += num;
      this.update();
      setTimeout(() => {
        wx.hideLoading();
      }, 500);
    }
  },
  // 加载更多点餐列表
  moreDc() {
    let l = this.store.data.order.dcLength;
    let _l = this.store.data.order._dcList.length;
    if (l < _l) {
      wx.showLoading({
        title: "加载中"
      });
      let num = 4;
      if (_l - l < 4) {
        num = _l - l;
      }
      this.store.data.order.dcList = this.store.data.order._dcList.slice(0, l + num);
      this.store.data.order.dcLength += num;
      this.update();
      setTimeout(() => {
        wx.hideLoading();
      }, 300);
    }
  },
  // 切换模块
  changeSlide(e) {
    let store = this.store.data;
    store.order.changeIndex = e.detail.index;
    this.update();
  },
  // 删除订单
  delOrder(e) {
    let _this = this;
    wx.showModal({
      title: '',
      content: '确定删除么',
      success: res => {
        if (res.confirm) {
          let id = e.currentTarget.dataset.id;
          config.order_id = id;
          orderModel.delOrderList(config).then(res => {
            _this.getOrderDC();
            _this.getOrderWM();
          })
        }
      }
    })
  },
  // 继续支付
  continuePay(e) {
    let _this = this;
    config.order_id = e.currentTarget.dataset.id;
    orderModel.continuePay(config).then(res => {
      if (res.code == 200) {
        if (res.data.wx_pay) {
          wx.requestPayment({
            timeStamp: res.data.order.timeStamp,
            nonceStr: res.data.order.nonceStr,
            package: res.data.order.package,
            signType: res.data.order.signType,
            paySign: res.data.order.paySign,
            success: function(res) {

            },
            fail: function(res) {
              wx.showToast({
                title: '支付失败',
                icon: "none"
              })
            }
          })
        } else {
          wx.showToast({
            title: '预约成功',
            icon: "none"
          });
          setTimeout(res => {
            wx.navigateBack({});
          }, 2000)
        }
      } else {
        wx.showToast({
          title: res.msg,
        })
      }
      _this.getOrderDC();
      _this.getOrderWM();
    })
  },
  refund(e) {
    let _this = this;
    config.order_id = e.currentTarget.dataset.id;
    orderModel.refund(config).then(res => {
      _this.getOrderDC();
      _this.getOrderWM();
      if (res == 200) {
        wx.showToast({
          title: '退款成功',
        })
      } else {
        wx.showToast({
          title: res.msg,
          icon: "none"
        })
      }
    })
  },
  onUnload() {

  }

})