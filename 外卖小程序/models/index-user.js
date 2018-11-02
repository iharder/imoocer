import {
  HTTP
} from '../utils/http-p.js';

class UserModel extends HTTP {
  postUser(config) {
    return this.request({
      url: '/api/waimai.passport/login',
      method: 'POST',
      data: {
        code: config.code,
        iv: config.iv,
        encryptedData: config.encryptedData,
        info: config.info,
        appid: config.appid,
        appkey: config.appkey
      }
    })
  }
}

export {
  UserModel
};