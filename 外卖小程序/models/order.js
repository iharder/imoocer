import {
  HTTP
} from '../utils/http-p.js';

class OrderModel extends HTTP {
  //获取订单列表
  getOrderList(config) {
    return this.request({
      url: '/api/waimai.mine/order',
      method: 'POST',
      data: {
        openid: config.openid,
        appid: config.appid,
        appkey: config.appkey,
        type: config.type
      }
    })
  }
  // 获取订单详情
  getOrderDetail(config) {
    return this.request({
      url: '/api/waimai.order/getWaiMaiOrder',
      method: 'POST',
      data: {
        openid: config.openid,
        appid: config.appid,
        appkey: config.appkey,
        type: config.type,
        order_id: config.order_id
      }
    })
  }
  // 删除订单
  delOrderList(config) {
    return this.request({
      url: '/api/waimai.mine/delorder',
      method: 'POST',
      data: {
        openid: config.openid,
        appid: config.appid,
        appkey: config.appkey,
        order_id: config.order_id
      }
    })
  }
  // 继续支付
  continuePay(config) {
    return this.request({
      url: '/api/waimai.mine/continuePay',
      method: 'POST',
      data: {
        openid: config.openid,
        appid: config.appid,
        appkey: config.appkey,
        order_id: config.order_id
      }
    })
  }
  // 订单申请退款
  refund(config) {
    return this.request({
      url: '/api/waimai.mine/applyTuikuan',
      method: 'POST',
      data: {
        openid: config.openid,
        appid: config.appid,
        appkey: config.appkey,
        order_id: config.order_id
      }
    })
  }

}

export {
  OrderModel
};