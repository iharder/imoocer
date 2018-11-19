const app = getApp();
// 请求目的地城市详情
import {
  postCityDetail
} from "../../../models/destination.js";
// 获取本页面
import {
  getPage
} from "../../../models/_util/common.js";
class DesDetail {
  constructor(config) {
    this.config = config;
    this.city_id = config.city_id;
  }
  // 获取城市详情
  getCityDetail(config) {
    this.page = getPage();
    return postCityDetail({
      city_id: this.city_id,
      type: config.type
    }).then(res => {
      app.common.setConfig("cityInfo", config.type - 1, res);
    });
  }
}

export {
  DesDetail
}