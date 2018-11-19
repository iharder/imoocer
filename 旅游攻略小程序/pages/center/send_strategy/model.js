import {
  WriteModel
} from "../../../models/write.js";
const writeModel = new WriteModel();
const app = getApp();
class SendStrategy {
  publishStrategy(publishConfig) {
    writeModel.postPublish(publishConfig).then(res => {
      console.log(res);
    });
  }
}
export {
  SendStrategy
}