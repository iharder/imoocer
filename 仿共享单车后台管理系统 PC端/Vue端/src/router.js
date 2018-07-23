import Vue from 'vue';
import Router from 'vue-router';
//Admin
import Admin from './views/admin/Admin';
import AdminHome from './views/admin/views/Home';
import AdminButtons from './views/admin/views/ui/Buttons';
import NoMatch from './views/admin/views/404';
//
import Login from './views/login/Login';
Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    redirect: '/admin/home',
    component: Admin,
    children: [{
        path: '/admin/home',
        component: AdminHome
      },
      {
        path: '/admin/ui/buttons',
        component: AdminButtons
      }, {
        path: '/404',
        component: NoMatch
      }
    ]
  }, {
    path: '/login',
    name: 'login',
    component: Login
  }, {
    path: '*',
    redirect: "/404"
  }]
})