import create from '../../../utils/create'

create({
  pure: true,
  externalClasses: ['list-class'],
  options: {
    multipleSlots: true
  },
  properties: {
    sellerInfo: {
      type: Object,
      value: {}
    }
  },
  data: {

  },
  ready: function() {

  },
  methods: {
    callPhone() {
      this.triggerEvent("callPhone", {});
    },
    map() {
      this.triggerEvent("map", {});
    }
  }
})