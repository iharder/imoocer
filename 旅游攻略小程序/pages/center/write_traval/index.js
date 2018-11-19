import store from '../../../store';
import create from '../../../utils/create';
const app = getApp();
create(store, {
  data: {
    img: []
  },
  onLoad: function() {
    app.init();
  },
  addImg() {
    let _this = this;
    app.fileUpload().then(res => {
      let img = this.data.img;
      img.push(res);
      this.setData({
        img: img
      });
      app.qdd.tag.img = img;
    });
  },
  // 下一步
  next() {
    wx.navigateTo({
      url: '/pages/center/write_travalPlace/index',
    })
  },
  onShareAppMessage: function() {

  }
})