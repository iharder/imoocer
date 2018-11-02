import {
  HTTP
} from '../../utils/http-p.js';

class OrderModel extends HTTP {
  //获取我的菜单
  postUserOrder(config) {
    return this.request({
      url: '/api/waimai.order/deskaddmenu',
      method: 'POST',
      data: {
        openid: config.openid,
        appid: config.appid,
        appkey: config.appkey,
        desk_id: config.desk_id,
        menu: config.menu,
        repast_num: config.repast_num,
        is_jiacan: config.is_jiacan,
        formId: config.formid,
        is_qicai: config.is_qicai,
        qicai_time: config.qicai_time
      }
    })
  }

  //扫码或点击链接展示已点菜品(desk_id)
  postGetMyMenuList(config) {
    return this.request({
      url: '/api/waimai.order/deskshoworderfood',
      method: 'POST',
      data: {
        openid: config.openid,
        appid: config.appid,
        appkey: config.appkey,
        desk_id: config.desk_id,
      }
    });
  }
  // 加人
  postAddPeo(config) {
    return this.request({
      url: '/api/waimai.order/jiaren',
      method: 'POST',
      data: {
        openid: config.openid,
        appid: config.appid,
        appkey: config.appkey,
        desk_id: config.desk_id,
        repast_num: config.repast_num
      }
    });
  }
  // 催菜
  postCuiCai(config) {
    return this.request({
      url: '/api/waimai.order/cuicai',
      method: 'POST',
      data: {
        openid: config.openid,
        appid: config.appid,
        appkey: config.appkey,
        desk_id: config.desk_id
      }
    });
  }
  // 桌号付款
  deskPayOrder(config) {
    return this.request({
      url: '/api/waimai.order/deskPayOrder',
      method: 'POST',
      data: {
        openid: config.openid,
        appid: config.appid,
        appkey: config.appkey,
        coupon_id: config.coupon_id,
        formId: config.formId,
        ordertype: config.ordertype,
        desk_id: config.desk_id
      }
    })
  }
}

export {
  OrderModel
};