import store from '../../store';
import create from '../../utils/create';
import {
  SellerModel
} from '../../models/index-seller';
import {
  config
} from "../../models/config.js";
const sellerModel = new SellerModel();

const app = getApp();
create(store, {

  onLoad: function() {
    wx.showLoading();
    let extConfig = wx.getStorageSync('extConfig');
    let couponlist = sellerModel.postMineCoupon(extConfig);
    couponlist.then(res => {
      couponlist = res.data.couponlist;
      this.setData({
        couponList: couponlist,
      });
      wx.hideLoading();
    });
    this.store.data.threeList[0].text = this.store.data.seller.sellerInfo.name;
    this.store.data.imgSrc[0].src = this.store.data.seller.sellerInfo.logo;
    this.update();
  },

  data: {
    threeList: [{
      text: '威盛智慧餐厅单店版',

    }],
    mainStyle: {
      height: 266,
      textSize: 30,
      textColor: '#fff',
      backgroundColor: '#ff8040'
    },
    imgSrc: [{
      src: '/assets/img/wexin.png',
      size: '100rpx',
      marginBottom: '40rpx',
      borderRadius: "50%"
    }],
    coupon_id: 0,
    jianMoney: 0,
    paymentMoney: 0
  },
  onShareAppMessage: function() {

  },
  ImmPay() {
    if (this.data.paymentMoney == 0) {
      wx.showToast({
        title: '请输入金额',
        icon: "none"
      })
      return;
    }
    let openid = wx.getStorageSync("openId");
    let pay = this.data.paymentMoney - this.data.jianMoney;
    let coupon_id = this.data.coupon_id;
    config.openid = openid;
    config.coupon_id = coupon_id;
    config.price = pay;
    sellerModel.addOrder(config).then(res => {
      if (res.code == 200) {
        if (res.data.wx_pay) {
          wx.requestPayment({
            timeStamp: res.data.order.timeStamp,
            nonceStr: res.data.order.nonceStr,
            package: res.data.order.package,
            signType: res.data.order.signType,
            paySign: res.data.order.paySign,
            success: function(res) {
              wx.showToast({
                title: '支付成功'
              });
              setTimeout(res => {
                wx.navigateBack({});
              }, 2000);
            },
            fail: function(res) {
              wx.showToast({
                title: '支付失败',
                icon: "none"
              })
            }
          })
        } else {

        }
      } else {
        wx.showToast({
          title: res.msg,
        })
      }
    });
  },
  /**选择优惠券 */
  selectCouponListener(e) {
    // console.log("选择优惠券");
    let seller = this.store.data.seller;
    // console.log(seller.cost);
    if (seller.cost == undefined) {
      wx.showToast({
        title: '请输入金额',
        icon: "none"
      })
      return;
    }

    var selectCouponFlag = this.data.selectCouponFlag;
    this.setData({
      selectCouponFlag: !selectCouponFlag,
    });
  },

  // 动态计算价格
  bindInput(e) {
    var cost = e.detail.cost;
    var seller = this.store.data.seller;
    var jianMoney = this.data.jianMoney;

    var manPrice = this.data.manPrice;

    if (cost < manPrice) {
      var couponList = this.data.couponList;
      jianMoney = 0;

      for (var i in couponList) {
        couponList[i].select = 0;
      }

      seller.cost = cost;
      this.setData({
        jianMoney: 0,
        couponList: couponList,
      });
    } else {
      if (jianMoney == undefined) jianMoney = 0;
      seller.cost = parseFloat(cost) - parseFloat(jianMoney);
    }
    this.setData({
      paymentMoney: cost,
    });
    this.update();
  },

  radioChange(e) {
    var index = e.target.dataset.index;
    var couponList = this.data.couponList;
    var jianMoney = this.data.jianMoney;
    let seller = this.store.data.seller;

    for (var i in couponList) {
      if (index == i) {
        if (couponList[i].man_price <= seller.cost) {
          couponList[i].select = 1;
          jianMoney = couponList[i].price;
          this.setData({
            manPrice: couponList[i].man_price,
            coupon_id: couponList[i].user_coupon_id
          });
        } else {
          couponList[i].select = 0;
          wx.showToast({
            title: '满' + couponList[i].man_price + "元可用",
            icon: "none"
          })
          this.setData({
            couponList: couponList,
            jianMoney: 0,
          });
          return;
        }
      } else {
        couponList[i].select = 0;
      }
    }

    this.setData({
      couponList: couponList,
      jianMoney: jianMoney,
    });
    seller.cost = this.data.paymentMoney - jianMoney;
    this.update();
    this.selectCouponListener(e);
  },
})