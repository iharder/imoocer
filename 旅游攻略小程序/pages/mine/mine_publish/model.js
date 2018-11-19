const app = getApp();
import {
  postMyPub,
  deleteMyStra
} from "../../../models/user.js";
// 获取本页面
import {
  getPage
} from "../../../models/_util/common.js";
class MyPub {
  // 获取发布
  getMyPub(config) {
    postMyPub({
      type: config.type
    }).then(res => {
      getPage().setData({
        myPub: res
      });
      
    });
    getPage().loading.show();
  }
  // 删除发布
  deletePub(config) {
    console.log(config);
    if (config.pubType == "strategy") {
      this.deleteStra(config);
    } else {
      this.deleteNote();
    }
  }
  // 删除攻略
  deleteStra(config) {
    deleteMyStra({
      strategy_id: config.id
    }).then(res => {
      this.popStra(config);
    });
  }
  // 删除游记
  deleteNote() {

  }
  // 减去本地存储的攻略
  popStra(config) {
    let myPub = getPage().data.myPub;
    myPub.strategy.splice(config.index, 1);
    getPage().setData({
      myPub: myPub
    });
  }
}
export {
  MyPub
}