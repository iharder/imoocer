import Vue from 'vue';
import Router from 'vue-router';
import Recommend from './views/recommend/Recommend';


Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      name: 'Recommend',
      component: Recommend
    },
    {
      path: '/singer',
      name: 'Singer',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import ( /* webpackChunkName: "about" */ './views/singer/Singer')
    },
    {
      path: '/rank',
      name: 'Rank',
      component: () =>
        import ('./views/rank/Rank')
    },
    {
      path: '/search',
      name: 'Search',
      component: () =>
        import ('./views/search/Search')
    }
  ]
})