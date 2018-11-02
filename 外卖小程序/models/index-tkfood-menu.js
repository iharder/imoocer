import {
  HTTP
} from '../utils/http-p.js';

class MenuModel extends HTTP {
  postMenu(config, lat, lng, openid) {
    return this.request({
      url: '/api/waimai.waimaimenu/getMenu',
      method: 'POST',
      data: {
        appid: config.appid,
        appkey: config.appkey,
        lat: lat,
        lng: lng,
        openid: openid
      }
    })
  }
  // 上传菜单支付
  uploadMenu(config) {
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
        address_id: config.address_id,
        lat: config.lat,
        lng: config.lng,
        formId: config.formId
      }
    })
  }
}

export {
  MenuModel
};