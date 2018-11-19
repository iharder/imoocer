// components/common/q-textarea/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    placeholder: {
      type: String,
      value: "请输入内容"
    },
    num: {
      type: Number,
      value: 0
    },
    color: {
      type: String,
      value: ""
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
    bindInput(e) {

      this.setData({
        num: e.detail.cursor
      });
      this.triggerEvent("bindInput", {
        text: e.detail.value
      });
    }
  }
})