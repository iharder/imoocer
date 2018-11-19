import store from '../../../store';
import create from '../../../utils/create';
const app = getApp();
import {
  DesModel
} from "../../../models/destination.js";
const desModel = new DesModel();
create(store, {
  data: {
    _index: 0
  },
  onLoad: function(options) {
    this.loading = this.selectComponent("#loading");
    this.loading.show();
    let _this = this;
    let option = Object.keys(options);
    app.init().then(() => {
      if (options.hasOwnProperty('index')) {
        _this.setData({
          _index: options.index,
          cat_id: (index + 1)
        })
      } else {
        _this.setData({
          _index: 0,
          cat_id: 1
        })
      }
      let index = this.data._index;
      desModel.getTravalInfo({
        type: 0,
        cat_id: Number.parseInt(index + 1)
      }).then(res => {
        let travalInfo = res;
        let traval = res.list;
        let leftNote = [];
        let rightNote = [];

        traval.forEach((item, index) => {
          if (index % 2 == 0) {
            leftNote.push(item);
          } else {
            rightNote.push(item);
          }
        });
        let _traval = {
          leftNote: leftNote,
          rightNote: rightNote
        };
        travalInfo._traval = _traval;
        _this.store.data.destination.travalInfo[index] = travalInfo;
        _this.update();
        this.loading.show();
      })
    });
  },
  selectTab(e) {
    let _this = this;
    let index = e.detail.index;
    let lazy = this.store.selectTab(index, {
      store: "destination",
      name: "travalInfoIndex"
    });
    if (!lazy) {
      this.store.mainChange(index);
      return;
    };
    this.setData({
      cat_id: (index + 1)
    });
    desModel.getTravalInfo({
      type: 0,
      cat_id: index + 1
    }).then(res => {
      _this.store.data.destination.travalInfo[index] = res;
      _this.update();
      wx.hideLoading();
      _this.store.mainChange(index);
    });
  },
  // 切换攻略细分类型
  changeType(e) {
    let type = e.detail.type;
    let cat_id = this.data.cat_id;
    let _this = this;
    wx.showLoading({
      title: '加载中',
    });
    desModel.getTravalInfo({
      type: type,
      cat_id: cat_id
    }).then(res => {
      let travalInfo = this.data.destination.travalInfo;
      travalInfo[cat_id - 1] = res;
      _this.update();
      wx.hideLoading();
    });
  },
  onUnload() {
    this.store.data.destination = {
      city: {
        index: '',
        move: '',
        scrollTop: '',
        hotCities: [],
        cities: {},
        letters: [],
        headerHeight: 0
      },
      travalInfo: [],
      travalInfoIndex: [0],
      travalTitle: ['玩乐游记', '住宿游记', '美食游记', '购物游记'],
      travalDetail: {}
    };
    this.update();
  },
  onShareAppMessage: function() {

  }
})