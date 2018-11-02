import create from '../../utils/create'

create({
  pure: true,
  externalClasses: ['list-class'],
  options: {
    multipleSlots: true
  },
  properties: {
    left: {
      type: String,
      value: '160rpx'
    },
    color: {
      type: String,
      value: '#fff'
    },
    top: {
      type: String,
      value: '50rpx'
    },
    content: {
      type: String,
      value: '1'
    }
  },
  data: {

  },
  ready: function() {

  },
  methods: {

  }
})