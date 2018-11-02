import {
  KeywordModel
} from "../../models/keyword.js";

const keywordModel = new KeywordModel();
import {
  BookModel
} from "../../models/book.js";
const bookModel = new BookModel();
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
    hotWords: [],
    dataArray: [],
    searching: false
  },
  attached() {

    this.setData({
      historyWords: keywordModel.getHistory()
    })

    keywordModel.getHot().then(res => {
      this.setData({
        hotWords: res.hot
      })
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onCancel(e) {
      this.triggerEvent('cancel', {}, {})
    },
    onConfirm(e) {
      this.setData({
        searching: true
      })
      const q = e.detail.value;
      bookModel.search(0, q).then(res => {
        this.setData({
          dataArray: res.books
        });
        keywordModel.addToHistory(q);
      });
    }
  }
})