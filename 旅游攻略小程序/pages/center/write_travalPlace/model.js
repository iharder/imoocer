const app = getApp();
import {
  getPublishType,
  postPublish
} from "../../../models/write.js";
import {
  getPage
} from "../../../models/_util/common.js";
class Model {
  //  得到发布类型
  getPubType() {
    getPublishType().then(res => {
      this.page = getPage();
      let startTag = [];
      // 整合成渲染标签
      res.tags.forEach((item) => {
        let index = item[0].cat_id - 1;
        startTag[index] = item;
        startTag[index].map((jtem, id) => {
          return jtem.id = id;
        });
      });
      this.page.setData({
        startTag: startTag,
        pubType: res
      });
      app.qdd.tag.startTag = startTag;
    }).then(res => this.page.loading.show());
  };
  // 发布
  publish(config) {
    postPublish(config).then(res => {
      console.log(res);
    });
  }
  // 更新获取的选择标签
  updateTag(midTag, startTag) {
    // tag索引盒子
    let indexBox = [];
    // 最终展示盒子
    let endTag = [];
    // 攻略类型
    let tagType = this.page.data.tagType;
    midTag.forEach((item, index) => {
      if (item != null) {
        item.forEach((jtem, j) => {
          if (jtem == "true") {
            indexBox.push(index.toString() +
              j.toString()
            );
          }
        });
      }
    });
    tagType.forEach((item, index) => {
      endTag[index] = [];
    });
    // 生成最终tag
    indexBox.forEach((jtem, j) => {
      let tag_type = jtem[0];
      let item_type = jtem[1];
      endTag[tag_type].push(startTag[tag_type][item_type]);
    });
    let publishConfig = this.page.data.publishConfig;
    publishConfig.tag_id = endTag;
    this.page.setData({
      endTag: endTag,
      publishConfig: publishConfig
    });
  }
  // 删除细分标签
  deleteItem(config) {
    // 中间标签
    const midTag = config.midTag;
    midTag[config.tag_type][config.item_type] = "false";
    // 更新标签
    this.updateTag(midTag, config.startTag);
  }
  // 删除分类标签
  deleteTag(config) {
    let midTag = config.midTag;
    midTag[config.tag_type] = midTag[config.tag_type].map((item, index) => {
      return item = "false";
    });
    // 更新标签
    this.updateTag(midTag, config.startTag);
  }
  // 发布tag
  pubTag(endTag) {
    let tag = [];
    endTag.forEach((item) => {
      item.forEach((jtem) => {
        tag.push(jtem);
      })
    })
    tag.map((item, index) => {
      delete item.id;
    });
    return tag;
  }
}
const model = new Model();

export {
  model
}