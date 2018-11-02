import create from '../../utils/create'

create({
  pure: true,
  externalClasses: ['list-class'],
  options: {
    multipleSlots: true
  },
  properties: {
    height: {
      type: String,
      value: "2rpx"
    },
    bgColor: {
      type: String,
      value: "#f6f6f6"
    }
  },
  data: {

  },
  ready: function() {

  },
  methods: {

  }
})