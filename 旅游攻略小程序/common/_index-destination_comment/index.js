// common/index-destination_comment/index.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    border: {
      type: Boolean,
      value: true
    },
    list: {
      type: Array,
      value: []
    },
    borderTop: {
      type: Boolean,
      value: true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    select(e) {
      let _this = this;
      e = e.currentTarget.dataset;
      app.common.showActionSheet(['回复']).then(res => {
        _this.triggerEvent("reply", {
          comment_id: e.comment_id,
          name: e.name,
          index: e.index
        });
      });
    },
    // 举报评论
    report(e) {
      let _this = this;
      e = e.currentTarget.dataset;
      wx.showActionSheet({
        itemList: ['举报'],
        success(res) {
          if (res.tapIndex == 0) {
            _this.triggerEvent("report", {
              comment_id: e.comment_id
            })
          }
        }
      })
    },
    // 删除评论
    delete() {
      let _this = this;
      wx.showActionSheet({
        itemList: ['删除'],
        success(res) {

        }
      })
    }
  }
})