import create from '../../utils/create'

create({
  pure: true,
  externalClasses: ['list-class'],
  options: {
    multipleSlots: true
  },
  properties: {
    type: {
      type: String,
      value: '外卖'
    },
    manPrice: {
      type: Number,
      value: 20
    },
    price: {
      type: Number,
      value: 10
    },
    name: {
      type: String,
      value: ''
    },
    button: {
      type: String,
      value: '领取优惠券'
    },
    is_receive: {
      type: Boolean,
      value: false
    }
  },
  data: {

  },
  ready: function() {

  },
  methods: {
    rcDis() {
      this.triggerEvent('rcDis', {

      })
    }
  }
})