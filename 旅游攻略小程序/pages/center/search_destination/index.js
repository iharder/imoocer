import store from '../../../store';
import create from '../../../utils/create';
const app = getApp();
create(store, {
  onLoad: function() {
    app.init();
  },
  bindInput(e) {
    this.store.write("bindInput", e);
  },
  bindBlur() {
    this.store.write("bindBlur");
  },
  close() {
    this.store.write("close");
  },
  onShareAppMessage: function() {

  }
})