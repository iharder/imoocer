import store from '../../store';
import create from '../../utils/create';
const app = getApp();
create(store, {
  onLoad: function() {

  },
  center() {
    this.store.center();
  },
  onShareAppMessage: function() {

  }
})