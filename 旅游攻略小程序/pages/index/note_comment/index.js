const app = getApp();
import {
  StraAndNote
} from "../../../models/_util/strategy-note.js";

Page({
  data: {
    // 更多评论
    comments: [],
    // 是否开启单人评论
    replayOne: false,
    // 回复游记或者攻略的内容
    inputValue: "",
    // 用户信息
    userData: {},
    // 主输入信息
    inputValue: "",
    // 单人回复输入信息
    oneValue: ""
  },
  onLoad: function(options) {
    // 初始化
    app.init().then(res => {
      this.setData({
        comments: app.qdd.moreComment,
        commentDetail: app.qdd.commentDetail,
        type: options.type,
        // 本身model
        straAndNote: new StraAndNote({
          id: app.qdd.noteTraID,
          type: options.type
        })
      });
    });
  },
  // 回复游记或者攻略
  bindConfirm(e) {
    let isComment = app.common.pleEnterInfo(e.detail.value);
    if (!isComment) return;
    this.data.straAndNote.replyCom({
      comment: e.detail.value,
      userData: this.data.userData
    });
  },
  // 切换评论类型
  changeComment() {
    this.setData({
      replayOne: !this.data.replayOne
    });
  },
  // 点击回复按钮之后
  reply(e) {
    this.changeComment();
    this.setData({
      comment_id: e.detail.comment_id,
      author_name: e.detail.name,
      reply_index: e.detail.index,
      userData: this.data.userData
    });
  },
  // 回复单人评论后
  oneReplyConfirm(e) {
    this.data.straAndNote.replyCom({
      comment_id: this.data.comment_id,
      comment: e.detail.comment,
      author_name: this.data.author_name,
      reply_index: this.data.reply_index,
      userData: this.data.userData
    });
  },
  // 输入时
  bindInput(e) {
    this.setData({
      inputValue: e.detail.value
    });
  },
  // 关闭主输入框
  closeInput() {
    this.setData({
      inputValue: ""
    });
  },
  // 分享
  onShareAppMessage() {

  }
})