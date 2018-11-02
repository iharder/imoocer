import {
  config
} from '../config.js'

const tips = {
  400: '抱歉，授权失败'
}
// 解构
class HTTP {
  request({
    url,
    data = {},
    method = 'GET'
  }) {
    return new Promise((resolve, reject) => {
      this._request(url, resolve, reject, data, method);
    })
  }
  _request(url, resolve, reject, data = {}, method = 'GET') {
    wx.request({
      url: config.api_bare_url + url,
      method: method,
      data: data,
      header: {
        'content-type': 'application/json'
      },
      success: (res) => {
        let code = res.statusCode.toString();
        if (code.startsWith('2')) {
          resolve(res.data);
        } else {
          reject();
          let error_code = res.data.error_code;
          this._show_error(error_code);
        }
      },
      fail: (err) => {
        this._show_error(1);
      }
    })
  }
  _show_error(error_code) {
    if (error_code == 100) {
      wx.redirectTo({
        url: '../pages/login/login',
      })
    }
    const tip = tips[error_code]
    wx.showToast({
      title: tip ? tip : tips[400],
      icon: 'none',
      duration: 2000
    })
  }
}

export {
  HTTP
};