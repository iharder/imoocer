import create from '../../../utils/create'
create({
  pure: true,

  properties: {
    // 切换模块
    changeIndex: {
      type: Number,
      value: 0
    },
    // 数据
    menu: {
      type: Array,
      value: []
    },

    // 切换的菜名
    menuNameIndex: {
      type: Number,
      value: 0
    },

    standMask: {
      type: Boolean,
      value: false
    },
    // selectStandIndex: {
    //   type: Number,
    //   value: 0
    // },
    totalPrice: {
      type: Number,
      value: 0
    },
    selectMenu: {
      type: Array,
      value: []
    },
    cartMask: {
      type: Boolean,
      value: false
    },
    activity: {
      type: Object,
      value: {}
    },
    distri: {
      type: Object,
      value: {}
    },
    peisong: {
      type: Object,
      value: {}
    },
    activi: {
      type: String,
      value: '开门大吉'
    }
  },

  data: {
    id: 0,
    pIndex: 0, //菜品分类索引
    cIndex: 0, //单菜品索引
    sIndex: 0,
  },

  ready: function() {

  },

  methods: {
    // 选择菜单
    selectMenu(e) {
      let index = e.currentTarget.dataset.index;
      this.store.data.menuNameIndex = index;
      this.update();
      this.setData({
        pIndex: index,
        cIndex: 0,
        sIndex: 0,
      });
      this.triggerEvent('tapping', {
        index: index
      })
    },
    // 增加商品数量1
    add(e) {
      let name = e.currentTarget.dataset.name;
      let index = e.currentTarget.dataset.index;
      this.triggerEvent('addCart', {
        name: name,
        pindex: this.data.pIndex,
        cindex: this.data.cIndex,
        sindex: this.data.sIndex,
        index: index,
      })
    },

    // 减少商品数量1
    reduce(e) {
      let name = e.currentTarget.dataset.name
      let index = e.currentTarget.dataset.index;
      this.triggerEvent('reduceCart', {
        name: name,
        index: index,
      })
    },

    // 选择规格
    selectStand(e) {
      let index = e.currentTarget.dataset.index;
      let name = e.currentTarget.dataset.name;
      if (this.data.cIndex != index) {
        this.setData({
          sIndex: 0,
        });
      }

      if (index != undefined) {
        this.setData({
          cIndex: index,
        });
      }

      this.triggerEvent('selectStand', {
        name: name,
        index: index,
      })

      this.update();
    },

    // 加入购物车
    joinCart(e) {
      let name = e.currentTarget.dataset.name;
      this.triggerEvent('joinCart', {
        name: name,
        pindex: this.data.pIndex,
        cindex: this.data.cIndex,
        sindex: this.data.sIndex,
      })
    },
    //点击切换规格 
    clickStand(e) {
      let selectStandIndex = e.target.dataset.index;
      this.store.data.selectStandIndex = selectStandIndex;
      this.update();
      this.setData({
        sIndex: selectStandIndex,
      });
      // this.triggerEvent('clickStand', {
      //   standId: selectStandIndex
      // })
    },
    // 清空购物车
    clearCart() {
      this.triggerEvent('clearCart', {})
    },
    // 切换购物车遮罩
    cartMask() {
      this.triggerEvent('cartMask', {})
    },
    // 进入结算页
    loadAccount() {
      this.triggerEvent('loadAccount', {})
    },
    // 关闭遮罩
    standClose() {
      this.triggerEvent("standClose",{})
    }
  }
})