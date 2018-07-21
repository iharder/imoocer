import Vue from 'vue';
import Router from 'vue-router';
import Goods from './views/goods/Goods';
import Ratings from './views/ratings/Ratings';
import Sells from './views/sells/Sells';
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/ratings',
      name: 'Ratings',
      component: Ratings
    },
    {
      path: '/sells',
      name: 'Sells',
      component: Sells
    }
  ]
})