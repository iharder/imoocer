import create from '../../utils/create'

create({
  pure: true,

  properties: {
    list: {
      type: Array,
      value: ['菜单', '商家']
    },
    height: {
      type: String,
      value: '80rpx'
    },
    color: {
      type: String,
      value: "#ff8041"
    },
    fontSize: {
      type: String,
      value: "34rpx"
    }
  },

  data: {
    currentIndex: 0,
    width: 0
  },

  ready() {
    let l = this.properties.list.length;
    let width = 750 / l;
    this.store.data.width = width + 'rpx';
    this.update();
  },

  methods: {
    active(e) {
      this.store.data.currentIndex = e.currentTarget.dataset.index;
      this.update();
      this.triggerEvent('tapping', {
        index: this.properties.currentIndex
      })
    }
  }
})