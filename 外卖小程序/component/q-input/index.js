// component/q-input/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    qType: String,
    content: String,
    height: String,
    top: String,
    padding: String,
    width: String,
    borderRadius: String,
    fontColor: String,
    mainStyle: Object,
    couponList: Object,
    zindex: Number,
    jianMoney: Number,
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
      let cost = e.detail.value;
      this.triggerEvent('bindInput', {
        cost
      });
    },

    /**
     * 选择优惠券
     */
    selectcoupon(e) {
      if (this.properties.couponList.length > 0) {
        this.triggerEvent('selectCouponListener', {e});
      } else {
        wx.showToast({
          title: '暂无优惠券',
        })
      }
    }
  }
})