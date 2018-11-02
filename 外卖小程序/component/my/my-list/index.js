import create from '../../../utils/create'

create({
  pure: true,
  externalClasses: ['list-class'],
  options: {
    multipleSlots: true
  },
  properties: {},
  data: {

  },
  ready: function() {

  },
  methods: {
    loadDelivery() {
      this.triggerEvent("loadDelivery", {});
    },
    loadRcoupon() {
      this.triggerEvent("loadRcoupon", {});
    },
    loadMycoupon() {
      this.triggerEvent("loadMycoupon", {});
    },
    callPhone() {
      this.triggerEvent("callPhone", {});
    },
    loadAppoint() {
      this.triggerEvent("loadAppoint", {});
    },
    loadPaybill() {
      this.triggerEvent("loadPaybill", {});
    }
  }
})