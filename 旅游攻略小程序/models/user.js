const app = getApp();
class UserModel {
  //我的发布
  static postMyPub(config) {
    return app.post("/api/strategy.user/getMyRelease", {
      type: config.type
    });
  }
  static postMyCol(config) {
    return app.post("/api/strategy.user/getMyCollect", {});
  }
  // 删除我的攻略
  static deleteMyStra(config) {
    return app.post("/api/strategy.user/delStrategy", {
      strategy_id: config.strategy_id
    });
  }
  // 获取指定用户信息
  static getMyInfo(config) {
    return app.post("/api/strategy.user/getUserIndex", {
      user_id: config.user_id
    });
  }
  // 获取指定用户游记
  static getMyNote(config) {
    return app.post("/api/strategy.user/getUserNotes", {
      user_id: config.user_id
    });
  }
  // 获取指定用户粉丝
  static getMyFan(config) {
    return app.post("/api/strategy.user/getUserFans", {
      user_id: config.user_id
    });
  }
  // 关注
  static postConcern(config) {
    return app.post("/api/strategy.user/followUser", {
      user_id: config.user_id
    });
  }
  // 不再关注
  static postUnConcern(config) {
    return app.post("/api/strategy.user/unFollowUser", {
      user_id: config.user_id
    });
  }
}
const {
  postMyPub,
  deleteMyStra,
  getMyInfo,
  getMyNote,
  getMyFan,
  postUnConcern,
  postConcern,
  postMyCol
} = UserModel;
export {
  postMyPub,
  deleteMyStra,
  getMyInfo,
  getMyNote,
  getMyFan,
  postUnConcern,
  postConcern,
  postMyCol
}