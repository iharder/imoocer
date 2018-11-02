import {
  HTTP
} from '../utils/http-p.js';

class SellerModel extends HTTP {
  // 商家信息
  postSellerInfo(config) {
    return this.request({
      url: '/api/waimai.index/index',
      method: 'POST',
      data: {
        openid: config.openid,
        appid: config.appid,
        appkey: config.appkey
      }
    })
  }

  //获取用户优惠信息
  postMineCoupon(config) {
    return this.request({
      url: "/api/waimai.maidan/index",
      method: 'POST',
      data: {
        openid: config.openid,
        appid: config.appid,
        appkey: config.appkey
      }
    });
  }
  // 立即付款
  addOrder(config) {
    return this.request({
      url: "/api/waimai.maidan/addOrder",
      method: "POST",
      data: {
        openid: config.openid,
        appid: config.appid,
        appkey: config.appkey,
        coupon_id: config.coupon_id,
        price: config.price
      }
    })
  }
}

export {
  SellerModel
};