import {
  MineModel
} from "../../../models/mine.js";
const mineModel = new MineModel();
import {
  StraAndNote
} from "../../../models/_util/strategy-note.js";
const app = getApp();
Page({
  data: {
    // 攻略信息
    noteDetailInfo: {},
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
    this.loading = this.selectComponent("#loading");
    this.loading.show();
    let _this = this;
    let strategy_id = options.id || 1;
    app.init().then(() => {
      mineModel.getNoteDetail({
        strategy_id: strategy_id
      }).then(res => {
        res.detail.views++;
        _this.setData({
          noteDetailInfo: res,
          comments: res.comments.list,
          // 本身model
          straAndNote: new StraAndNote({
            id: res.detail.strategy_id,
            type: "strategy"
          })
        });
        app.qdd.commentDetail = res;
        this.loading.show();
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
    this.data.straAndNote.collectStrategy();
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
  // 更多评论
  moreComment() {
    if (!this.isLogin()) return;
    app.qdd.moreComment = this.data.comments;
    app.qdd.noteTraID = this.data.noteDetailInfo.detail.strategy_id;
    wx.navigateTo({
      url: '/pages/index/note_comment/index?type=strategy'
    });
  },
  // 分享
  onShareAppMessage() {

  }
})