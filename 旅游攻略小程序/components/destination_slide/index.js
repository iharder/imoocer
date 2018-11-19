// components/my-list/index.js
Component({
  options: {
    multipleSlots: true
  },
  properties: {
    list: {
      type: Object,
      value: {}
    },
    color: {
      type: String,
      value: "#00bf63"
    }
  },
  ready() {

  },
  data: {
    changeIndex: 0
  },
  methods: {
    selectList(e) {
      this.setData({
        changeIndex: e.currentTarget.dataset.index
      })
    },
    loadDestination(e) {
      e = e.currentTarget.dataset;
      this.triggerEvent("loadDestination", {
        id: e.id,
        type: 1,
        cityName: e.name
      });
    }
  }
})