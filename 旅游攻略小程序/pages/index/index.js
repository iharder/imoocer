import store from '../../store';
import create from '../../utils/create';
const app = getApp();
create(store, {
  data: {

  },
  // 打开写游记
  center() {
    this.store.center();
  },
  // 进入详情
  loadDetail(e) {
    let index = e.currentTarget.dataset.index;
    wx.navigateTo({
      url: `/pages/index/note/index?index=${index}`,
    })
  },
  onLoad: function(options) {

  },
  bindInput(e) {
    this.store.write("bindInput", e);
  },
  bindBlur() {
    this.store.write("bindBlur");
  },
  close() {
    this.store.write("close");
  },
  onShareAppMessage: function() {

  }
})