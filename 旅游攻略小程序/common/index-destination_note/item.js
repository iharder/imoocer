// common/index-destination_note/item.js
const app = getApp();
import {
  DesModel
} from "../../models/destination.js";
const desModel = new DesModel();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like: {
      type: Number,
      value: 0
    },
    likeNum: {
      type: Number,
      value: 10
    },
    note_id: {
      type: Number,
      value: -1
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  ready() {

  },
  /**
   * 组件的方法列表
   */
  methods: {
    like() {
      if (!app.common.isLogin()) return;
      let _this = this;
      let note_id = this.properties.note_id;
      let like = this.properties.like;
      let likeNum = this.properties.likeNum;
      likeNum = like ? likeNum - 1 : likeNum + 1;
      _this.setData({
        like: !like,
        likeNum: likeNum
      });
      desModel.postCollect({
        note_id: note_id
      }).then(res => {
        // if (like) {
        //   wx.showToast({
        //     title: '取消成功',
        //     icon: "none"
        //   });
        // } else {
        //   wx.showToast({
        //     title: '点赞成功',
        //     icon: "none"
        //   });
        // }
      });
    }
  }
})