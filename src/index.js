import { createRouter, createWebHistory } from 'vue-router/dist/vue-router.esm-bundler'
import dashboard from './views/dashboard.vue'

export default () => createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: dashboard,
    },
    {
      path: '/customer',
      name: 'customer',
      component: () => import('./views/customer.vue')
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('./views/product.vue')
    },
  ]
})