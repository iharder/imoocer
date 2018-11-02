import create from '../../utils/create'
create({
  options: {
    multipleSlots: true
  },
  properties: {
    writeMask: {
      type: Boolean,
      value: false
    }
  },
  data: {

  },
  ready: function() {

  },
  methods: {
    center() {
      this.store.center();
    }
  }
})