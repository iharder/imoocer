// common/write_tag/index.js
// 没有数组
const _unArr = false;
// 有数组
const _Arr = true;
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    mainColor: {
      type: String,
      value: ""
    },
    list: {
      type: Array,
      value: [],
      observer: "_list"
    },
    tagType: {
      type: Array,
      value: []
    },
    isArr: {
      type: Array,
      value: [false, false, false, false]
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
    addLabel() {
      wx.navigateTo({
        url: '/pages/center/_label/index',
      });
    },
    // 监听list
    _list(newV) {
      let isArr = this.data.isArr;
      newV.forEach((item, index) => {
        if (JSON.stringify(item) !== '[]') {
          isArr[index] = _Arr;
        } else {
          isArr[index] = _unArr;
        }
        this.setData({
          isArr: isArr
        });
      });
    },
    deleteItem(e) {
      e = e.currentTarget.dataset;
      this.triggerEvent("deleteItem", {
        tag_type: e.tag_type - 1,
        item_type: e.item_type
      });
    },
    deleteTag(e) {
      this.triggerEvent("deleteTag", {
        tag_type: e.currentTarget.dataset.tag_type - 1
      });
    }
  }
})