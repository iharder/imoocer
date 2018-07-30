import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'vue-antd-ui'
import './assets/reset.css';
import 'vue-antd-ui/dist/antd.css';
import VueJsonp from 'vue-jsonp';
Vue.use(VueJsonp);
Vue.config.productionTip = false;
Vue.use(Antd);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');