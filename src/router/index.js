import { createRouter, createWebHistory } from 'vue-router';
import CashReportView from '../views/CashFlowView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: CashReportView,
    },
    {
      path: '/cashflow',
      name: 'cashflow',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CashFlowView.vue'),
    },
  ],
});

export default router;
