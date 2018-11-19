import {
  postSearchNor,
  postSearchResult
} from "../../../models/mine.js";
class Model {
  static getSearchNor() {
    return postSearchNor().then(res => {
      console.log(res);
    });
  }
  static getSearchResult(config) {
    return postSearchResult({
      keywords: config.keywords,
      type: config.type
    }).then(res => {
      console.log(res);
    });
  }
}

export {
  Model
}