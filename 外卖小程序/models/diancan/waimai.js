import {
  HTTP
} from '../../utils/http-p.js';

class FoodModel extends HTTP {
  //用户预订
  postGetMenuInfo(config) {
    return this.request({
      url: '/api/waimai.diancanmenu/getMenu',
      method: 'POST',
      data: {
        openid: config.openid,
        appid: config.appid,
        appkey: config.appkey,
      }
    })
  }

  /**
   * 获取优惠信息
   */
  postGetCouponInfo(config) {
    return this.request({
      url: '/api/waimai.diancanmenu/getStoreYouhui',
      method: 'POST',
      data: {
        openid: config.openid,
        appid: config.appid,
        appkey: config.appkey,
      }
    })
  }

  // 下单
  postPlaceOrder(config) {
    return this.request({
      url: '/api/waimai.order/addorder',
      method: 'POST',
      data: {
        appid: config.appid,
        appkey: config.appkey,
        openid: config.openid,
        menu: config.menu,
        ordertype: config.ordertype,
        coupon_id: config.coupon_id,
        formId: config.formId,
        eattype: config.eattype
      }
    })
  }
  // 点餐结果
  postResult(config) {
    return this.request({
      url: '/api/waimai.order/getmyfoodhereorder',
      method: 'POST',
      data: {
        appid: config.appid,
        appkey: config.appkey,
        openid: config.openid,
        order_id: config.order_id || 0
      }
    })
  }
}

export {
  FoodModel
};