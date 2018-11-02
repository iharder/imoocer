import create from '../../utils/create'

create({
  externalClasses: ['list-class'],
  options: {
    multipleSlots: true
  },
  properties: {
    content: {
      type: String,
      value: "保存"
    },
    fontSize: {
      type: String,
      value: '34rpx'
    },
    bgColor: {
      type: String,
      value: "#ff8040"
    },
    color: {
      type: String,
      value: "#fff"
    },
    title:{
      type:String,
      value:'保存'
    }
  },
  data: {

  },
  ready: function() {

  },
  methods: {
    button() {
      this.triggerEvent('button', {})
    }
  }
})