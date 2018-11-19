import create from '../../utils/create'

create({
  options: {
    multipleSlots: true
  },
  properties: {
    addChange: {
      type: Boolean,
      value: true
    },
    index: {
      type: Number,
      value: 0
    }
  },
  data: {

  },
  ready: function() {

  },
  methods: {
    change() {
      this.tip();
      this.store.data.write.addIndex = this.properties.index;
      this.update();
    },
    tip() {
      if (this.store.data.write.tipChange) {
        this.store.data.write.tipChange = false;
      }
      this.update();
    },
    addImg() {
      let _this = this;
      let index = this.properties.index;
      let data = this.store.data.write;
      let text = JSON.parse(JSON.stringify(data.text));
      wx.chooseImage({
        count: 1,
        success(res) {
          // tempFilePath可以作为img标签的src属性显示图片
          let img = res.tempFilePaths[0];
          if (text.length == 0) {
            _this.data.write.tempFilePaths = res.tempFilePaths;
          }
          text.splice(index, 0, {
            name: "img",
            value: img
          })
          data.text = text;
          data.addIndex = -1;
          _this.update();
        }
      });
    },
    addText(e) {
      let value = e.currentTarget.dataset.type;
      let index = this.properties.index;
      let condition = {
        name: value,
        index: index
      }
      this.store.data.write.condition = condition;
      this.update();
      this.store.write("addText");
    }
  }
})