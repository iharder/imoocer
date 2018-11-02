import {
  HTTP
} from '../utils/http-p.js';

class DiscountModel extends HTTP {
  // 获取商家优惠券
  postSellerDis(config) {
    return this.request({
      url: '/api/waimai.coupon/index',
      method: 'POST',
      data: {
        appid: config.appid,
        appkey: config.appkey,
        openid: config.openid,
        type: config.type
      }
    })
  }
  // 获取商家活动
  postSeller(config) {
    return this.request({
      url: '/api/waimai.waimaimenu/getStoreYouhui',
      method: 'POST',
      data: {
        appid: config.appid,
        appkey: config.appkey,
        type: config.type
      }
    })
  }

  // 领取优惠券
  postRcoupon(config) {
    return this.request({
      url: '/api/waimai.coupon/receiveCoupon',
      method: 'POST',
      data: {
        appid: config.appid,
        appkey: config.appkey,
        openid: config.openid,
        coupon_id: config.coupon_id
      }
    })
  }
  // 我已经领取的优惠券
  postMyDis(config) {
    return this.request({
      url: "/api/waimai.mine/getMyCoupon",
      method: 'POST',
      data: {
        appid: config.appid,
        appkey: config.appkey,
        openid: config.openid
      }
    })
  }
  // 获取配送信息
  postDistri(config) {
    return this.request({
      url: "/api/waimai.waimaimenu/getpeisong",
      method: 'POST',
      data: {
        appid: config.appid,
        appkey: config.appkey,
        lat: config.lat,
        lng: config.lng,
        openid: config.openid
      }
    })
  }
  // 获取预约信息
  postApoint(config) {
    return this.request({
      url: "/api/waimai.yuyue/myyuyue",
      method: 'POST',
      data: {
        appid: config.appid,
        appkey: config.appkey,
        openid: config.openid
      }
    })
  }
}

export {
  DiscountModel
};