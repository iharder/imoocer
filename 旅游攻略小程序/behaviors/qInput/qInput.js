import {
  getPage
} from "../../models/_util/common.js";
const maxLength = 10;
const key = "searchHistory";
const qInput = Behavior({
  properties: {
    mainColor: {
      type: String,
      value: ""
    }
  },
  data: {
    inputVal: ""
  },
  methods: {
    bindInput(e) {
      this.setData({
        inputVal: e.detail.value
      });
      this.triggerEvent("bindInput", {
        inputVal: e.detail.value
      });
    },
    cancel() {
      this.setData({
        inputVal: ""
      });
    },
    getWords(keyword) {
      // 历史记录
      let words = this.getHistory();
      // 是否已有缓存
      const has = words.includes(keyword);
      if (!has) {
        // 搜索历史长度
        const length = words.length;
        if (length >= maxLength) {
          words.pop();
        }
        words.push(keyword);
        return words;
      }
      return false;
    },
    bindConfirm(e) {
      if (this.data.inputVal == "") {
        wx.showToast({
          title: '请输入城市信息',
          icon: "none"
        });
        return;
      }
      let keyword = e.detail.value;
      let words = this.getWords(keyword);
      if (!words) return;
      // 加入缓存
      wx.setStorageSync(key, words);
      // 写入本地
      getPage().setData({
        searchHistory: words
      });
    },
    getHistory() {
      const words = wx.getStorageSync('searchHistory');
      if (!words) {
        return [];
      }
      return words;
    }
  }
})

export {
  qInput
}