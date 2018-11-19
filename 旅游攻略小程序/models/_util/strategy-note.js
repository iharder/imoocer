const app = getApp();
import {
  getPage
} from "./common.js";
class StraAndNote {
  constructor(config) {
    // 配置
    this.config = config;
    // 游记或攻略的id
    this.id = config.id;
    // 种类
    this.type = config.type;
  }
  // 评论/回复游记或者攻略
  replyCom(config) {
    this.page = getPage();
    if (!app.common.isLogin()) return;
    if (this.type == "strategy") {
      return this.replyStrategy(config);
    } else {
      return this.replyNote(config);
    }
  }
  // 收藏游记或者攻略
  collect(config) {
    if (this.type == "strategy") {
      return this.collectStrategy();
    } else {
      return this.collectNote();
    }
  }
  // 回复攻略
  replyStrategy(config) {
    return app.post("/api/strategy.strategy/comment", {
      strategy_id: this.id,
      comment_id: config.comment_id,
      comment: config.comment
    }).then(res => {
      this.page.setData({
        oneValue: ""
      });
      this.push(config);
    });
  }
  // 回复游记
  replyNote(config) {
    return app.post("/api/strategy.note/comment", {
      note_id: this.id,
      comment_id: config.comment_id,
      comment: config.comment
    }).then(res => {
      this.page.setData({
        oneValue: ""
      });
      this.push(config);
    });
  }
  // 收藏攻略
  collectStrategy() {
    return app.post("/api/strategy.strategy/collect", {
      strategy_id: this.id
    });
  }
  // 收藏游记
  collectNote() {
    return app.post("/api/strategy.note/support", {
      note_id: this.id
    });
  }
  // 判断push
  push(config) {
    if (config.comment_id == undefined) {
      // push评论
      this.pushMainCom(config);
    } else {
      // push副评论
      this.pushOneCom(config);
    }
  }
  // push主评论
  pushMainCom(config) {
    let userInfo = config.userData.userinfo;
    let comments = this.page.data.comments;
    comments.push({
      comment: config.comment,
      face: userInfo.face,
      nickname: userInfo.nickname,
      comment_id: ++config.comment_id
    });
    this.page.setData({
      comments: comments,
      inputValue: ""
    });
  }
  // push副评论
  pushOneCom(config) {
    this.page = getPage();
    let userInfo = config.userData.userinfo;
    let comments = this.page.data.comments;
    comments[config.reply_index].reply.push({
      comment: config.comment,
      face: userInfo.face,
      nick_name: userInfo.nickname,
      author_name: config.author_name,
      comment_id: ++config.comment_id
    });
    this.page.setData({
      comments: comments,
      oneValue: "",
      replayOne: false
    });
  }
}

export {
  StraAndNote
}