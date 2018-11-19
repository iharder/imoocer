const app = getApp();
// pages/demo/demo.js
Page({
  data: {
    startTag: []
  },
  onLoad: function() {
    app.init().then(res => {
      // 初始化midTag或者获取midTag
      if (app.qdd.tag.midTag.length == 0) {
        let midTag = JSON.parse(JSON.stringify(app.qdd.tag.startTag));
        for (let i = 0; i < midTag.length; i++) {
          if (midTag[i] != undefined) {
            midTag[i] = new Array(midTag[i].length);
            midTag[i].fill("false");
          }
        }
        this.setData({
          startTag: app.qdd.tag.startTag,
          midTag: midTag
        });
      } else {
        this.setData({
          midTag: app.qdd.tag.midTag,
          startTag: app.qdd.tag.startTag
        });
      }
    });
  },
  // 选择某个标签并且更新midTag
  selectTag(e) {
    let midItem = e.detail.midItem;
    let cat_id = e.detail.cat_id - 1;
    app.common.setConfig("midTag", cat_id, midItem);

  },
  // 确认
  confirmLabel() {
    // 检测midTag是否有选中标签
    try {
      this.data.midTag.forEach((item, index) => {
        if (item != null) {
          let arr = item.filter((jtem, jndex) => {
            return jtem == "true";
          });
          if (arr.length != 0) {

            app.qdd.tag.midTag = this.data.midTag;
            wx.navigateBack({
              delta: 1
            });
            throw new Error("true")
          }
        }
      });
    } catch (e) {
      if (e.message == "true") {
        return;
      }
    }
    wx.showToast({
      title: '请选择标签',
      icon: "none"
    });
  },
  onShareAppMessage: function() {

  }
})