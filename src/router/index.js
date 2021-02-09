import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/index',
    children: [{
      path: '/index',
      name: 'index',
      component: () => import('../views/Index.vue')
    }, {
      path: '/product/:id',
      name: 'product',
      component: () => import('../views/Product.vue')
    }, {
      path: '/detail/:id',
      name: 'dtail',
      component: () => import('../views/Dtail.vue')
    }]
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/Cart.vue')
  }, 
  {
    path: '/order',
    name: 'Order',
    component: () => import('../views/Order.vue'),
    children: [{
      path: 'list',
      name: 'List',
      component: () => import('../views/List.vue')
    }, {
      path: 'pay',
      name: 'Pay',
      component: () => import('../views/Pay.vue')
    }, {
      path: 'confirm',
      name: 'Confirm',
      component: () => import('../views/Confirm.vue')
    }]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router