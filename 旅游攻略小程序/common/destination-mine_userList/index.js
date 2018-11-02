// components/user-list/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    top: {
      type: String,
      value: "0"
    },
    bottom: {
      type: String,
      value: "0"
    },
    bordTop: {
      type: Boolean,
      value: false
    },
    bordBottom: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  ready(){
    console.log(this.properties.bordBottom);
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})