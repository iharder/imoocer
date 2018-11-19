const app = getApp();
class WriteModel {
  // 获取发布类型
  getPublishType() {
    return app.post("/api/strategy.Release/index");
  }
  // 发布
  postPublish(config) {
    return app.post("/api/strategy.Release/release", {
      type: config.type,
      city: config.city,
      tag_id: config.tag_id,
      title: config.title,
      photo: config.photo,
      details: config.details,
      photos: config.photos,
      content: config.content,
      address: config.address,
      lat: config.lat,
      lng: config.lng
    });
  }
  // 举报攻略评论
  reportStrategy(config) {
    return app.post("/api/strategy.strategy/report", {
      strategy_id: config.strategy_id,
      comment_id: config.comment_id,
      reply_id: config.reply_id,
      note: config.note,
      type: config.type
    })
  }
  // 举报游记评论
  reportNote(config) {
    return app.post("/api/strategy.note/report", {
      note_id: config.note_id,
      comment_id: config.comment_id,
      reply_id: config.reply_id,
      note: config.note,
      type: config.type
    })
  }
}
const writeModel = new WriteModel();
let {
  getPublishType,
  postPublish
} = writeModel;
export {
  WriteModel,
  getPublishType,
  postPublish
}