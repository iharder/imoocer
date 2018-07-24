import Vue from 'vue';
import Router from 'vue-router';
//Admin
import Admin from './views/admin/Admin';
import AdminHome from './views/admin/views/Home';
import AdminButtons from './views/admin/views/ui/Buttons';
import AdminModals from './views/admin/views/ui/Modals';
import AdminLoadings from './views/admin/views/ui/Loadings';
import AdminNotification from './views/admin/views/ui/Notification';
import AdminMessages from './views/admin/views/ui/Messages';
import AdminTabs from './views/admin/views/ui/Tabs';
import NoMatch from './views/admin/views/404';
//Login
import Login from './views/login/Login';
Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    redirect: '/admin/home',
    component: Admin,
    children: [{
        path: '/404',
        component: NoMatch
      }, {
        path: '/admin/home',
        component: AdminHome
      },
      {
        path: '/admin/ui/buttons',
        component: AdminButtons
      },
      {
        path: '/admin/ui/modals',
        component: AdminModals
      },
      {
        path: '/admin/ui/loadings',
        component: AdminLoadings
      },
      {
        path: '/admin/ui/notification',
        component: AdminNotification
      },
      {
        path: '/admin/ui/messages',
        component: AdminMessages
      }, ,
      {
        path: '/admin/ui/tabs',
        component: AdminTabs
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