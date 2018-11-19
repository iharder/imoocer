// common/destination_content/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    color: {
      type: String,
      value: ""
    },
    list: {
      type: Array,
      value: []
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
    loadStrategy(e) {
      this.triggerEvent("loadStrategy", {
        strategy_id: e.currentTarget.dataset.strategy_id
      });
    }
  }
})