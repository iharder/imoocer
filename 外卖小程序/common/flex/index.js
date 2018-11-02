import create from '../../utils/create'
create({
  pure: true,
  externalClasses: ['list-class'],
  options: {
    multipleSlots: true
  },
  properties: {
    list: {
      type: Array,
      value: [{
        value: "0.00",
        name: '钱包'
      }, {
        value: "0个",
        name: '优惠'
      }]
    },
    height: {
      type: String,
      value: "124rpx"
    }
  },
  data: {},
  ready: function() {
    let l = this.properties.list.length;
    let width = 750 / l;
    this.store.data.width = width + 'rpx';
    this.update();
  },
  methods: {}
})