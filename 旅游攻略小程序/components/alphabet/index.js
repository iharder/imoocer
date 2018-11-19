import create from '../../utils/create'

create({
  options: {
    multipleSlots: true
  },
  properties: {
    color: {
      type: String,
      value: ""
    }
  },
  data: {

  },
  ready: function() {

  },
  methods: {
    touchStart(e) {
      let data = this.store.data.destination.city;
      let index = e.currentTarget.dataset.index;
      data.scrollTop = data.move[index] - data.headerHeight - 4;
      this.update();
    }
  }
})