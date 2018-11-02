import create from '../../../utils/create'

create({
  pure: true,
  options: {
    multipleSlots: true
  },
  properties: {},
  data: {
    imgList: [{
      left: 25,
      top: 64,
      height: 76,
      width: 76,
      src: ''
    }, {
      left: 360,
      top: 230,
      height: 58,
      bgColor: '#fff',
      borderColor: '#f3f3f3',
      color: '#000',
      content: '再来一单',
      padding: '20rpx'
    }, {
      left: 544,
      top: 230,
      height: 58,
      bgColor: '#fff',
      borderColor: '#ffc3ba',
      color: '#ff624b',
      content: '评价得9金币',
      padding: '20rpx'
    }],
    textList: [{
      left: 122,
      content: '叫只炸鸡(大通路店)',
      top: 44,
      size: 30,
      rightSize: 30
    }, {
      left: 122,
      content: '2018-09-24 23:21',
      top: 94,
      size: 20,
      color: '#a4a4a4'
    }, {
      left: 130,
      content: '四喜套餐',
      top: 158,
      size: 28
    }, {
      left: 592,
      content: '订单已送达',
      top: 60,
      size: 26,
      color: ''
    }, {
      left: 638,
      content: '￥27.5',
      top: 160,
      size: 28,
      color: ''
    }],
    lineList: {
      background: '#f3f3f3',
      width: 588,
      right: -136
    }
  },
  ready: function() {
    let src = wx.getStorageSync("user").face;
    this.store.data.imgList[0].src = src;
    this.update();
  },
  methods: {

  }
})