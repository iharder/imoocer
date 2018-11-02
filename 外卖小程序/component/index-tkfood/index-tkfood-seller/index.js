import create from '../../../utils/create'

create({
  options: {
    multipleSlots: true
  },
  properties: {
    changeIndex: {
      type: Number,
      value: 0
    }
  },
  data: {
    id: 0,
    list: [{
        title: '合肥市瑶海区新蚌埠路蓝光时代中心S2商业楼238',
        des: '',
        leftName: 'icon-shouhuodizhi',
        leftColor: '#a6a6a6',
        board: '20rpx',
        noRight: true,
        rightName: 'icon-dianhua',
        border: true,
        phone: "callPhone"
      },
      {
        title: '商家服务: 跨天预订 到店自取(享优惠)',
        des: '',
        leftName: 'icon-gou',
        leftColor: '#a6a6a6icon-dianhua',
        board: '20rpx',
        border: true,
        noRight: true
      }
    ]
  },
  ready: function() {
    this.store.data.list[0].title = this.store.data.seller.sellerInfo.address;
    this.update();
  },
  methods: {
    callPhone() {
      this.triggerEvent('callPhone', {});
    }
  }
})