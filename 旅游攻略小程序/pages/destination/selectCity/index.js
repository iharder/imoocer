// pages/destination/selectCity/index.js
import city from "./city.js";
import store from '../../../store.js';
import create from '../../../utils/create.js';

const app = getApp();
create(store, {
  data: {

  },
  onLoad: function() {
    let _this = this;
    // 获取城市数据
    let data = this.store.data;
    data.destination.city = city.city.data;
    // 生成字母表
    let letters = [];
    for (var i in data.destination.city.cities) {
      letters.push(i);
    }
    data.destination.city.letters = letters;

    // 更新及获取城市头部DOM
    return new Promise((resolve, reject) => {
      _this.update();
      setTimeout(() => {
        _this.dom();
      }, 100);
    })
  },
  dom() {
    let _this = this;
    let query = wx.createSelectorQuery();
    query.selectAll('.cityList').boundingClientRect();
    query.select('.city-header').boundingClientRect();
    query.exec(res => {
      let city = _this.store.data.destination.city;
      let move = [];
      res[0].forEach(function(currentValue, index) {
        move.push(currentValue.top);
      })
      city.move = move;
      city.headerHeight = res[1].height;
      _this.update();
    })
  },
  tapMove: function(e) {

  },
  bindScroll(e) {
    console.log(e);
  },
  onShareAppMessage: function() {

  }
})