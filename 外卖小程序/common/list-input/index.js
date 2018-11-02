import create from '../../utils/create'

create({
  externalClasses: ['list-class'],
  options: {
    multipleSlots: true
  },
  properties: {
    placeholder: {
      type: String,
      value: "姓名"
    },
    name: {
      type: String,
      value: ""
    },
    value: {
      type: String,
      value: ""
    },
    type: {
      type: String,
      value: 'text'
    }
  },
  data: {

  },
  ready: function() {

  },
  methods: {
    bindInput(e) {
      let name = this.properties.name;
      let store = this.store.data.deliveryAdd.detail;
      this.store.data.delivery[name] = e.detail.value;
      store[name] = e.detail.value;
      this.update();
    }
  }
})