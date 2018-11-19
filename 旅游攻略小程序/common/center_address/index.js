Component({
  options: {
    multipleSlots: true
  },
  properties: {
    leftContent: {
      type: String,
      value: "出行目的地"
    },
    rightContent: {
      type: String,
      value: "去添加"
    },
    color: {
      type: String,
      color: ""
    },
    address: {
      type: String,
      value: "",
      observer: function(newV) {
        console.log(newV);
      }
    }
  },
  data: {

  },
  ready: function() {

  },
  methods: {
    right() {
      this.triggerEvent("right", {

      })
    }
  }
})