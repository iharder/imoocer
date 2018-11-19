const app = getApp();
class DesModel {
  // 获取游记列表
  getTravalInfo(config) {
    return app.post("/api/strategy.note/noteMore", {
      cat_id: config.cat_id,
      type: config.type
    });
  }
  // 获取游记详情
  getTravalDetail(config) {
    return app.post("/api/strategy.note/getDetail", {
      note_id: config.note_id
    });
  }
  // 评论游记/回复评论
  // replyComment(config) {
  //   return app.post("/api/strategy.note/comment", {
  //     note_id: config.note_id,
  //     comment_id: config.comment_id,
  //     comment: config.comment
  //   });
  // }
  // 举报游记下评论
  reportComment(config) {
    return app.post("/api/strategy.note/report", {
      strategy_id: config.strategy_id,
      comment_id: config.comment_id,
      note: config.note,
      type: config.type,
      reply_id: config.reply_id
    });
  }
  // 收藏/取消收藏游记
  postCollect(config) {
    return app.post("/api/strategy.note/support", {
      note_id: config.note_id
    });
  }
  // 获取目的地城市
  getDesCity() {
    return app.post("/api/strategy.destination/getCitys", {});
  }
  // 获取相关城市的信息
  postCityDetail(config) {
    return app.post("/api/strategy.destination/getIndex", {
      city_id: config.city_id,
      type: config.type
    });
  }
}
const desModel = new DesModel();
const {
  getDesCity,
  postCityDetail
} = desModel;
export {
  DesModel,
  // 获取目的地城市
  getDesCity,
  // 获取目的地城市详情
  postCityDetail
}