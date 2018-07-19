import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/Home'
import City from './views/city/City'
import Detail from './views/detail/Detail'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ]
})