const app = getApp();
Component({
  properties: {
    // 接收的数据
    list: {
      type: Array,
      value: []
    },
    // 主体颜色
    color: {
      type: String,
      value: ""
    },
    // 中间的tag
    midTag: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // 选中
    _checked: "true",
    // 未选中
    _unchecked: "false"
  },
  ready() {

  },
  /**
   * 组件的方法列表
   */
  methods: {
    // 选择标签并且更新
    select(e) {
      e = e.currentTarget.dataset;
      let midTag = this.data.midTag;
      if (midTag[e.index] == "false") {
        midTag[e.index] = this.data._checked;
      } else {
        midTag[e.index] = this.data._unchecked;
      }
      this.setData({
        midTag: midTag
      });
      this.triggerEvent("selectTag", {
        midItem: midTag,
        cat_id: e.cat_id
      });
    }
  }
})