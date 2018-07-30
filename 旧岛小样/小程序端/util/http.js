import {
  config,fun1
} from '../config.js'

class HTTP {
  request(params) {
    wx.request({
      url: 'http://bl.7yue.pro/v1/',
    })
  }
}