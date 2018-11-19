import store from '../../../store';
import create from '../../../utils/create';
const app = getApp();
create(store, {
  onLoad: function(options) {
    app.init();
  },
  bindInput(e) {
    let text = e.detail.text;
    this.store.data.write.texting = text;
    this.update();
  },
  confirm() {
    let data = this.store.data.write;
    let texting = data.texting;
    if (texting == "") {
      wx.showToast({
        title: '请输入文字',
        icon: "none"
      })
      return;
    };
    let container = JSON.parse(JSON.stringify(data.text));
    let condition = data.condition;
    let result = {
      name: condition.name,
      value: texting
    };
    let index = condition.index;
    container.splice(index, 0, result);
    data.text = container;
    data.texting = "";
    data.addChange = true;
    data.addIndex = -1;
    this.update();
    setTimeout(() => {
      this.store.write("back", 1);
    }, 250);
  },
  onShareAppMessage: function() {

  }
})