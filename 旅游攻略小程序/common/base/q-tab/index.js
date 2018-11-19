Component({
  options: {
    multipleSlots: true
  },
  properties: {
    list: {
      type: Array,
      value: ['去哪玩', '去哪住', '去哪吃', '去哪买']
    },
    width: {
      type: String,
      value: "40rpx"
    },
    num: {
      type: Number,
      value: 0,
      observer: "_num"
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
  ready() {
    let query = wx.createSelectorQuery().in(this);
    let _this = this;
    query.selectAll('.text').boundingClientRect();
    query.exec((res) => {
      _this.setData({
        width: res[0][0].width * 2 + 'rpx'
      })
    })
  },
  methods: {
    select(e) {
      let num = this.data.num;
      let index = e.currentTarget.dataset.index;
      if (index != num) {
        this.setData({
          num: index
        })
        this.triggerEvent("selectTab", {
          index: index
        })
      }
    },
    // 监听num
    _num(newVal) {
      this.setData({
        num: newVal
      });
    }
  }
})