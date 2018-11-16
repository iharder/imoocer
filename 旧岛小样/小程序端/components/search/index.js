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
    more: {
      type: String,
      observer: "_load_more"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    historyWords: [],
    hotWords: [],
    dataArray: [],
    searching: false,
    q: ""
  },
  ready() {

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
    _load_more() {
      if (!this.data.q) {
        return;
      }
      const length = this.data.dataArray.length;
      bookModel.search(length, this.data.q).then(res => {
        const tempArray = this.data.dataArray.concat(res.books);
        this.setData({
          dataArray: tempArray
        })
      });
    },
    onCancel(e) {
      this.triggerEvent('cancel', {}, {})
    },
    onConfirm(e) {
      this.setData({
        searching: true
      })
      const q = e.detail.value || e.detail.text;
      bookModel.search(0, q).then(res => {
        this.setData({
          dataArray: res.books,
          q
        });
        keywordModel.addToHistory(q);
      });
    },
    onDelete(e) {
      this.setData({
        searching: false
      })
    }
  }
})