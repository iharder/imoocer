import Vue from 'vue';
import Router from 'vue-router';
import HomeProduct from './views/home/product/Product';

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () =>
        import ('./views/home/Home')
    },
    {
      name: 'home-product',
      path: '/home/product',
      component: HomeProduct
    },
    {
      path: '/category',
      name: 'category',
      component: () =>
        import ('./views/category/Category'),
    },
    {
      path: '/cart',
      name: 'cart',
      component: () =>
        import ('./views/cart/Cart'),
    },
    {
      path: '/my',
      name: 'my',
      component: () =>
        import ('./views/my/My'),
    }
  ]
})