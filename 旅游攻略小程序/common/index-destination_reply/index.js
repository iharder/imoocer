// common/index-destination_reply/in.js
Component({
  options: {
    multipleSlots: true
  },
  properties: {
    like: {
      type: Boolean,
      value: false
    },
    color: {
      type: String,
      value: ""
    },
    value: {
      type: String,
      value: ""
    }
  },
  data: {

  },
  ready: function() {

  },
  methods: {
    like() {
      let like = this.properties.like;
      this.setData({
        like: !like
      })
      this.triggerEvent("like", {
        like: like
      });
    },
    bindConfirm(e) {
      this.triggerEvent("bindConfirm", {
        value: e.detail.value
      });
    }
  }
})