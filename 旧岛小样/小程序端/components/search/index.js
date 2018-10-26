import {
  KeywordModel
} from "../../models/keyword.js";

const keywordModel = new KeywordModel();
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    historyWords: [],
    hotWords: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onCancel(e) {
      this.triggerEvent('cancel', {}, {})
    },
    onConfirm(e) {
      const word = e.detail.value;
      keywordModel.addToHistory(word);

      const q = e.detail.value;
      keywordModel.search(0, q).then(res => {
        this.setData({
          dataArray: res.books
        })
      });
    }
  }
})