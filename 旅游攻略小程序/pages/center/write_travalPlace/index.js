// 主方法
import {
  model
} from "./model.js";
const app = getApp();
Page({
  data: {
    // 上传参数
    publishConfig: {
      type: 2,
      city: 1,
      tag_id: [],
      title: "",
      photo: "",
      details: "",
      address: ""
    },
    // 发布类型
    pubType: {},
    // 中间tag
    midTag: [],
    // 最终展示tag
    endTag: [],
    // 标签类型
    tagType: ['玩乐攻略', '住宿攻略', '美食攻略', '购物攻略'],
    type: "note",
    address: ""
  },
  // 选择完标签后回来更新
  onShow() {
    let midTag = app.qdd.tag.midTag;
    if (midTag.length != 0) {
      this.setData({
        midTag: midTag
      });
      model.updateTag(midTag, this.data.startTag);
    }
    // 更新拍摄地点
    app.common.setConfig('publishConfig', "address", app.qdd.tag.shotPlace);
    // 更新照片
    app.common.setConfig('publishConfig', "photo", app.qdd.tag.img);
    this.setData({
      address: app.qdd.tag.shotPlace
    });
  },
  onLoad() {
    this.loading = this.selectComponent("#loading");
    this.loading.show();
    app.init().then(() => {
      // 得到发布类型
      model.getPubType();
    });
  },
  // 发布
  publish() {
    let publishConfig = this.data.publishConfig;
    model.publish({
      // 类型：游记
      type: publishConfig.type,
      // 城市id
      city: publishConfig.city,
      // 标签
      tag_id: model.pubTag(publishConfig.tag_id),
      // 标题
      title: publishConfig.title,
      // 正文
      details: publishConfig.details,
      // 图片
      photo: publishConfig.photo,
      // 地址
      address: publishConfig.address
    });
  },
  // 跳转增加地址
  address() {
    wx.navigateTo({
      url: '/pages/center/write_travelGraph/index',
    });
  },
  // 删除细分标签
  deleteItem(e) {
    model.deleteItem({
      item_type: e.detail.item_type,
      tag_type: e.detail.tag_type,
      midTag: this.data.midTag,
      startTag: this.data.startTag
    });
  },
  // 删除标签
  deleteTag(e) {
    model.deleteTag({
      tag_type: e.detail.tag_type,
      midTag: this.data.midTag,
      startTag: this.data.startTag
    });
  },
  // 写标题
  writeTitle(e) {
    app.common.setConfig('publishConfig', "title", e.detail.value);
  },
  // 写正文
  writeContent(e) {
    app.common.setConfig('publishConfig', "details", e.detail.value);
  },
  onShareAppMessage: function() {

  }
})