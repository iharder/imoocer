import {
  DesModel
} from "../../../models/destination.js";
const desModel = new DesModel();
import {
  StraAndNote
} from "../../../models/_util/strategy-note.js";
const app = getApp();
Page({
  data: {
    // 游记信息
    travalDetail: {},
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
    wx.showLoading({
      title: '加载中',
    });
    let _this = this;
    let note_id = options.id || 1;
    app.init().then(() => {
      desModel.getTravalDetail({
        note_id: note_id
      }).then(res => {
        _this.setData({
          travalDetail: res,
          comments: res.comments.list,
          // 本身model
          straAndNote: new StraAndNote({
            id: res.detail.note_id,
            type: "note"
          })
        });
        app.qdd.commentDetail = res;
        wx.hideLoading();
      })
    });
  },
  // 回复游记或者攻略
  bindConfirm(e) {
    // 确认是否登录
    if (!this.isLogin()) return;
    // 确认是否输入信息
    if (!app.common.pleEnterInfo(e.detail.value)) return;
    this.data.straAndNote.replyCom({
      comment: e.detail.value,
      userData: this.data.userData
    });
  },
  // 是否登录
  isLogin() {
    this.login = this.selectComponent("#loginView");
    if (this.data.userData.length == 0) {
      this.login.showDialog();
      return false;
    }
    return true;
  },
  // 切换评论类型
  changeComment() {
    this.setData({
      replayOne: !this.data.replayOne
    });
  },
  // 点击回复按钮之后
  reply(e) {
    if (!this.isLogin()) return;
    this.changeComment();
    this.setData({
      comment_id: e.detail.comment_id,
      author_name: e.detail.name,
      reply_index: e.detail.index
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
  // 收藏
  like() {
    this.data.straAndNote.collectNote();
  },
  // 更多评论
  moreComment() {
    if (!this.isLogin()) return;
    app.qdd.moreComment = this.data.comments;
    app.qdd.noteTraID = this.data.travalDetail.detail.note_id;
    wx.navigateTo({
      url: '/pages/index/note_comment/index?type=note'
    });
  },
  // 分享
  onShareAppMessage: function() {

  }
})