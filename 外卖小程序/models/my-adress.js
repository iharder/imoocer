import {
  HTTP
} from '../utils/http-p.js';

class AddressModel extends HTTP {
  // 获取所有地址
  postIndex(config) {
    return this.request({
      url: '/api/waimai.address/index',
      method: 'POST',
      data: {
        appid: config.appid,
        appkey: config.appkey,
        openid: config.openid
      }
    })
  }
  // 获取默认地址
  postDefault(config) {
    return this.request({
      url: '/api/waimai.address/getdefault',
      method: 'POST',
      data: {
        appid: config.appid,
        appkey: config.appkey,
        openid: config.openid
      }
    })
  }
  // 添加地址
  postCreate(config) {
    return this.request({
      url: '/api/waimai.address/create',
      method: 'POST',
      data: {
        appid: config.appid,
        appkey: config.appkey,
        openid: config.openid,
        name: config.name,
        mobile: config.mobile,
        address: config.address,
        gps_addr: config.gps_addr,
        lng: config.lng,
        lat: config.lat,
        is_default: config.isDefault
      }
    })
  }
  // 修改地址
  postEdit(config) {
    return this.request({
      url: '/api/waimai.address/editAddress',
      method: 'POST',
      data: {
        appid: config.appid,
        appkey: config.appkey,
        openid: config.openid,
        name: config.name,
        mobile: config.mobile,
        address: config.address,
        gps_addr: config.gps_addr,
        lng: config.lng,
        lat: config.lat,
        is_default: config.isDefault,
        id: config.id
      }
    })
  }
  // 删除地址
  postDel(config) {
    return this.request({
      url: '/api/waimai.address/delAddress',
      method: 'POST',
      data: {
        appid: config.appid,
        appkey: config.appkey,
        openid: config.openid,
        id: config.id
      }
    })
  }
}

export {
  AddressModel
};