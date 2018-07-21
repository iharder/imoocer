import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import './assets/reset.css';
import Antd from 'vue-antd-ui'
import 'vue-antd-ui/dist/antd.css'
Vue.use(Antd)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')