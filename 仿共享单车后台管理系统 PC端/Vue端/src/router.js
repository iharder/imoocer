import Vue from 'vue';
import Router from 'vue-router';
//Admin
import Admin from './views/admin/Admin';
import AdminHome from './views/admin/views/Home';
import UiButtons from './views/admin/views/ui/Buttons';
import UiModals from './views/admin/views/ui/Modals';
import UiLoadings from './views/admin/views/ui/Loadings';
import UiNotification from './views/admin/views/ui/Notification';
import UiMessages from './views/admin/views/ui/Messages';
import UiTabs from './views/admin/views/ui/Tabs';
import UiGallery from './views/admin/views/ui/Gallery';
import UiCarousel from './views/admin/views/ui/Carousel';
import FormLogin from './views/admin/views/form/Login';
import FromReg from './views/admin/views/form/Reg';
import TableBasic from './views/admin/views/table/Basic';
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
        component: UiButtons
      },
      {
        path: '/admin/ui/modals',
        component: UiModals
      },
      {
        path: '/admin/ui/loadings',
        component: UiLoadings
      },
      {
        path: '/admin/ui/notification',
        component: UiNotification
      },
      {
        path: '/admin/ui/messages',
        component: UiMessages
      },
      {
        path: '/admin/ui/tabs',
        component: UiTabs
      },
      {
        path: '/admin/ui/gallery',
        component: UiGallery
      },
      {
        path: '/admin/ui/carousel',
        component: UiCarousel
      }, {
        path: '/admin/form/login',
        component: FormLogin
      }, {
        path: '/admin/form/reg',
        component: FromReg
      }, {
        path: '/admin/table/basic',
        component: TableBasic
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