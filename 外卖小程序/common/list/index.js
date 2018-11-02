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
      value: "76rpx"
    },
    bgColor: {
      type: String,
      value: "#fff"
    },
    border: {
      type: Boolean,
      value: true
    },
    leftContent: {
      type: String,
      value: '商家信息'
    },
    fontSize: {
      type: String,
      value: '32rpx'
    },
    padding: {
      type: String,
      value: '30rpx'
    },
    rightContent: {
      type: String,
      value: ""
    },
    iconfont: {
      type: String,
      value: "icon-htbArrowright"
    },
    haveIcon: {
      type: Boolean,
      value: false
    },
    midContent: {
      type: String,
      value: ''
    },
    borderTop: {
      type: Boolean,
      value: false
    },
    midLeft: {
      type: String,
      value: '200rpx'
    },
    iconName: {
      type: String,
      value: 'icon-share'
    },
    iconColor: {
      type: String,
      value: '#000'
    }
  },
  data: {

  },
  ready: function() {
    // console.log(this.properties.midContent);
  },
  methods: {

  }
})