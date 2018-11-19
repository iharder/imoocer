// components/common/footer/index.js
Component({
  //下面是组件的属性列表
  options: {
    multipleSlots: true //在组件定义时的选项中启用多slot支持
  },

  properties: {
    tabTitle: {
      type: Object,
      value: []
    },

    color: {
      type: String,
      value: "#f00"
    },

    float: {
      type: Boolean,
      value: true,
    },

    shadow: {
      type: Boolean,
      value: true,
    },
    num: {
      type: Number,
      value: 0
    },
    bgColor: {
      type: String,
      value: "#fff"
    }
  },

  //组件的初始数据
  data: {

  },

  //组件的方法列表
  methods: {
    toggle: function(e) {
      if (this.data.num === e.currentTarget.dataset.index) {
        return false;
      } else {
        this.setData({
          num: e.currentTarget.dataset.index,
        })
      };
    }
  }
});