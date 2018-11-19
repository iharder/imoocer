const app = getApp();
// pages/demo/demo.js
Page({
  data: {
    // 盒子
    tagBox: [],
    // 缓存盒子
    _tagBox: []
  },
  onLoad: function() {
    app.init();
    this.setData(app.qdd.tagConfig);
  },
  onShow() {
    this.setData({
      tagBox: []
    });
  },
  onShareAppMessage: function() {

  },
  // 确认label
  confirmLabel() {
    if (this.data.tagBox.length == 0) {
      wx.showToast({
        title: '请选择标签',
        icon: "none"
      });
      return;
    };
    let tagBox = this.data.tagBox;
    let box = [];
    tagBox.forEach((tag, i) => {
      box[i] = [];
      tag.forEach((item, j) => {
        if (item == 1) {
          box[i].push(j);
        }
      });
    });
    let tags = this.data.tags;
    tagBox = [];
    box.forEach((item, index) => {
      tagBox[index] = [];
      item.forEach((tag, i) => {
        tags[index][tag].id = i;
        tagBox[index].push(tags[index][tag]);
      });
    })
    tagBox = tagBox.filter((item, index) => {
      return item != undefined;
    });
    app.qdd.tagConfig.tagBox = tagBox;
    app.qdd.tagConfig._tagBox = this.data._tagBox;
    wx.navigateBack({
      delta: 1
    });
  },
  // 选择细分标签
  selectLabel(e) {
    e = e.detail;
    let cat_id = e.cat_id - 1;
    let item = e.labelBox;
    let labelBox = this.data.labelBox;
    // if (labelBox) {
    //   labelBox[cat_id] = item;
    // }
    let tagBox = this.data.tagBox;
    tagBox[cat_id] = item;
    this.setData({
      tagBox: tagBox,
      _tagBox: tagBox
    });
  }
})