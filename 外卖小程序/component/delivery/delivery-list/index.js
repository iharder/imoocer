import create from '../../../utils/create'

create({
  externalClasses: ['list-class'],
  options: {
    multipleSlots: true
  },
  properties: {
    detail: {
      type: Object,
      value: {}
    }
  },
  data: {

  },
  ready: function() {

  },
  methods: {
    selectMap() {
      let _this = this;
      wx.chooseLocation({
        success: res => {
          _this.store.data.addres.gps = res;
          _this.store.data.deliveryAdd.detail.gps_address = res.address;
          _this.update();
        }
      })
    },
    defaultIcon() {
      let is_default = this.store.data.deliveryAdd.detail.is_default;

      if (is_default == 0) {
        this.store.data.deliveryAdd.detail.is_default = 1;
        this.update();
      } else {
        this.store.data.deliveryAdd.detail.is_default = 0;
        this.update();
      }
    }
  }
})