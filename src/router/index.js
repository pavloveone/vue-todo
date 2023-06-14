import { createRouter, createWebHistory } from 'vue-router'
import Users from '../views/Users.vue';
import Payment from '../views/Payment.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/users',
      name: 'users',
      component: Users
    },
    {
      path: '/payment',
      name: 'payment',
      component: Payment
    }
  ]
})

export default router
