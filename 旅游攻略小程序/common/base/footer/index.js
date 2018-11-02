// components/footer/index.js
Component({
  // 下面是组件的属性列表
  options: {
    multipleSlots: true //在组件定义时的选项中启用多slot支持
  },

  /**
   * 组件的属性列表
   */
  properties: {
    footer: {
      type: Object,
      value: [{
          icon: "icon-gonglve_tabbar_pre1",
          name: "首页",
          link: "/pages/index/index",
        },
        {
          icon: "icon-gonglve_pre",
          name: "目的地",
          link: "/pages/destination/index",
        },
        {
          icon: "icon-gonglve_tabbar1",
          name: "",
        },
        {
          icon: "icon-gonglve_tabbar_pre3",
          name: "福利",
          link: "/pages/fuli/index",
        },
        {
          icon: "icon-gonglve_tabbar_pre2",
          name: "我的",
          link: "/pages/mine/index",
        }
      ],
    },

    color: {
      type: String,
      value: "#00B5DE",
    },

    bottom: {
      type: String,
      value: "100rpx;"
    },

    tabIndex: {
      type: Number,
      value: 0,
    },
    lastIndex: {
      type: Number,
      value: -1
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    footer: [{
        icon: "icon-shouye",
        name: "首页",
        link: "/pages/index/index",
      },
      {
        icon: "icon-icon-",
        name: "订单",
        link: "/pages/order/index",
      },
      {
        icon: "icon-wode",
        name: "我的",
        link: "/pages/mine/index",
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTabClick: function(e) {
      var url = "";
      let lastIndex = this.data.lastIndex;
      if (this.data.tabIndex === e.currentTarget.dataset.index) {
        return false;
      } else {
        var index = e.currentTarget.dataset.index;
        this.setData({
          tabIndex: index,
        })
        if (lastIndex == index) {
          this.setData({
            lastIndex: -1
          })
          return;
        }
      }

      url = this.data.footer[index].link;
      wx.reLaunch({
        url: url,
      })
    },
    center(e) {
      var url = "";
      let lastIndex = this.data.tabIndex;

      var index = e.currentTarget.dataset.index;
      this.setData({
        tabIndex: index,
        lastIndex: lastIndex
      })
      this.triggerEvent('center', {});
    }
  }
})