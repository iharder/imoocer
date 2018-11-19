import {
  postMyCol
} from "../../../models/user.js";
class Model {
  static getMyCollect() {
    postMyCol().then(res => {
      console.log(res);
    })
  }
}

export {
  Model
}