import store from '../../../store';
import create from '../../../utils/create';
const app = getApp();
// 写作方法
import {
  WriteModel
} from "../../../models/write.js";
const writeModel = new WriteModel();
// 主方法
import {
  SendStrategy
} from "./model.js";
const sendStrategy = new SendStrategy();
create(store, {
  data: {
    // 领域类型
    tagsType: ['玩乐攻略', '住宿攻略', '美食攻略', '购物攻略'],
    // 上传参数
    publishConfig: {
      type: 1,
      city: 1,
      tag_id: "",
      title: "",
      photos: "",
      content: "",
      address: "",
      lat: "",
      lng: ""
    },
    // 类型盒子
    tagBox: [],
    // 接收的tag
    tags: []
  },
  // 更新标签数据
  onShow() {
    this.setData(app.qdd.tagConfig);
    // this.filter();
  },
  onLoad() {
    this.loading = this.selectComponent("#loading");
    this.loading.show();
    let _this = this;
    app.init().then(() => {
      _this.store.data.write.mainColor = _this.data.mainColor;
    }).then(res => {
      writeModel.getPublishType().then(res => {
        wx.hideLoading();
        let tags = res.tags;
        let tagBox = [];
        tags.forEach((item) => {
          let index = item[0].cat_id - 1;
          tagBox[index] = item;
        });
        app.qdd.tagConfig = {
          tags: tagBox,
          _tags: res
        };
      }).then(res => {
        this.loading.show();
      });
    });
  },
  //输入标题 
  bindInput(e) {
    app.common.setConfig("publishConfig", "title", e.detail.value);
  },
  // 发布攻略
  publishStrategy() {
    // 更新
    let publishConfig = this.updateConfig();
    sendStrategy.publishStrategy(publishConfig);
  },
  // 更新属性
  updateConfig() {
    let publishConfig = this.data.publishConfig;
    let location = {};
    // 赋值地理位置
    app.common.getLocation().then(res => {
      // app.common.setConfig()
      location = res;
    });
    return publishConfig = {
      type: 1,
      city: 1,
      tag_id: this.data.tagBox,
      title: this.data.title,
      photos: this.store.data.tempFilePaths,
      content: this.store.data.write.text,
      address: this.store.data.write.shotPlace,
      lat: location.latitude,
      lng: location.longitude
    };
  },
  // 删除标签
  delete(e) {
    e = e.currentTarget.dataset;
    let tagBox = this.data.tagBox;
    let cat_id = e.cat_id - 1;
    let index = e.index;
    if (tagBox[cat_id] == undefined) {
      cat_id--;
    }
    tagBox[cat_id].splice(index, 1);
    if (tagBox[cat_id].length == 0) {
      tagBox.splice(cat_id, 1);
    }
    this.setData({
      tagBox: tagBox
    });
    this.filter();
  },
  //过滤 
  filter() {
    // 缓存
    let result = [];
    let tagBox = this.data.tagBox;
    tagBox.forEach((item, i) => {
      item.forEach((jtem, j) => {
        result.push(jtem.name);
      });
    });
    let tags = this.data.tags;
    // 过滤盒子
    let _tagBox = this.data._tagBox;
    let box = [];
    tags.forEach((item, index) => {
      item.forEach((jtem, j) => {
        if (result.includes(jtem.name)) {
          box.push(index.toString() + j.toString())
        }
      });
    });
    let labelBox = this.pushBox();
    // 更新过滤盒子
    box.forEach((item, index) => {
      let i = item[0];
      let j = item[1];
      labelBox[i][j] = 1;
    });
    this.setData({
      labelBox: labelBox
    });
    app.qdd.tagConfig.labelBox = labelBox;
  },
  // 填充盒子
  pushBox() {
    // 获取
    let tags = this.data.tags;
    let _tagBox = [];
    for (let i = 0; i < tags.length; i++) {
      let tag = [];
      if (tags[i] != undefined) {
        tag = Array(tags[i].length).fill(0);
      }
      _tagBox.push(tag);
    }
    return _tagBox;
  },
  // 添加标签
  addLabel() {
    wx.navigateTo({
      url: '/pages/center/write_traveLabel/index',
    });
  },
  // 点击取消返回
  cancel() {
    wx.navigateBack({
      delta: 1
    });
  },
  // 添加文字
  addText() {
    this.store.write("addText");
  },
  // 添加图片
  addImg() {
    this.store.write("addImg");
  },
  // 切换图片
  changeCover() {
    let _this = this;
    app.fileUpload().then(res => {
      _this.store.data.write.tempFilePaths = res;
      _this.update();
    });
  },
  // 跳转增加地址
  address() {
    wx.navigateTo({
      url: '/pages/center/write_travelGraph/index',
    })
  },
  onShareAppMessage: function() {

  }
})