import store from '../../../store';
import create from '../../../utils/create';
const app = getApp();
create(store, {
  onLoad: function() {
    app.init();
  },
  getLocation() {
    let _this = this;
    wx.chooseLocation({
      success: (res) => {
        _this.store.data.write.shotPlace = res.address;
        app.qdd.tag.shotPlace = res.address;
        _this.update();
      }
    });
  },
  onShareAppMessage: function() {

  }
})