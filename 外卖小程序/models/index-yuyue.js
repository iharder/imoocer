import {
  HTTP
} from '../utils/http-p.js';

class ReserveModel extends HTTP {
  //用户预订
  postReserveInfo(config) {
    return this.request({
      url: '/api/waimai.yuyue/addyuyue',
      method: 'POST',
      data: {
        formid: config.formid,
        openid: config.openid,
        appid: config.appid,
        appkey: config.appkey,
        name: config.name,
        phone: config.phone,
        num: config.num,
        yuyue_time: config.date + " " + config.time,
        remark: config.remark,
      }
    })
  }
}

export {
  ReserveModel
};