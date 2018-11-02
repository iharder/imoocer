import {
  HTTP
} from '../../utils/http-p.js';

class RestaurantModel extends HTTP {
  //获取我的菜单
  postGetMyMenuInfo(config) {
    return this.request({
      url: '/api/waimai.order/deskshoworderfood',
      method: 'POST',
      data: {
        openid: config.openid,
        appid: config.appid,
        appkey: config.appkey,
        desk_id: config.desk_id,
      }
    })
  }
}

export {
  RestaurantModel
};