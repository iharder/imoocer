import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import fastClick from 'fastclick';
import VueLazyload from 'vue-lazyload';
import './assets/fonts/iconfont.css';
import './assets/js/rem';
import 'swiper/dist/css/swiper.css';
fastClick.attach(document.body);
Vue.config.productionTip = false;
Vue.use(VueLazyload, {
  preLoad: 1,
  error: require('./assets/img/error.png'),
  loading: require('./assets/img/loading.gif'),
  attempt: 1
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')