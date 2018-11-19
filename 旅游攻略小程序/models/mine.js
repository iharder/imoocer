const app = getApp();
class MineModel {
  // 获取首页信息
  getMineInfo() {
    return app.post("/api/strategy.index/getIndex");
  }
  // 获取攻略列表
  getNoteInfo(config) {
    return app.post("/api/strategy.strategy/strategyMore", {
      cat_id: config.cat_id,
      type: config.type
    });
  }
  // 获取攻略详情
  getNoteDetail(config) {
    return app.post("/api/strategy.strategy/getDetail", {
      strategy_id: config.strategy_id
    });
  }
  // 评论攻略/回复评论
  // replyComment(config) {
  //   return app.post("/api/strategy.strategy/comment", {
  //     strategy_id: config.strategy_id,
  //     comment_id: config.comment_id,
  //     comment: config.comment
  //   });
  // }
  // 举报攻略下评论
  reportComment(config) {
    return app.post("/api/strategy.strategy/comment", {
      strategy_id: config.strategy_id,
      comment_id: config.comment_id,
      note: config.note,
      type: config.type,
      reply_id: config.reply_id
    });
  }
  // 收藏/取消收藏游记
  postCollect(config) {
    return app.post("/api/strategy.strategy/collect", {
      strategy_id: config.strategy_id
    });
  }
  // 获得城市和标签
  static postSearchNor() {
    return app.post("/api/strategy.index/citysAndKeywords");
  }
  // 首页搜索结果
  static postSearchResult(config) {
    return app.post("/api/strategy.index/serchResult", {
      keywords: config.keywords,
      type: config.type
    });
  }
}
const {
  postSearchNor,
  postSearchResult
} = MineModel;
export {
  MineModel,
  postSearchNor,
  postSearchResult
}