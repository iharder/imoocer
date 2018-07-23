import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import fastClick from 'fastclick';
fastClick.attach(document.body);
Vue.config.productionTip = false;

import './assets/iconfont/iconfont.css';
import './assets/reset.css';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')