import create from '../../../utils/create'

create({
  pure: true,
  properties: {},

  data: {},

  methods: {
    loadTkFood() {
      this.triggerEvent('loadTkFood', {})
    },
    loadDis() {
      this.triggerEvent('loadDis', {});
    },
    loadSilver() {
      this.triggerEvent('loadSilver', {});
    },
    loadReserve(){
      this.triggerEvent("loadReserve", {});
    },
    loadOrder(){
      this.triggerEvent("loadOrder", {});
    }
  }
})