import Vue from 'vue';
import Router from 'vue-router';
//Admin
import Admin from './views/admin/Admin';
import NoMatch from './views/admin/views/404';
import AdminHome from './views/admin/views/Home';
//Login
import Login from './views/login/Login';
Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    redirect: '/login',
    component: Admin,
    children: [{
      path: '/404',
      component: NoMatch
    }, {
      path: '/admin/home',
      component: AdminHome
    }]
  }, {
    path: '/login',
    name: 'login',
    component: Login
  }, {
    path: '*',
    redirect: "/404"
  }]
})