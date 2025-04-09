import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/CashReportView.vue';

import BasicForm from '@/components/common/BasicForm.vue';

import CashFlowView from '@/views/CashFlowView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/menubar',
      name: 'menubar',
      component: BasicForm,
    },
    {
      path: '/cashflow',
      name: 'cashflow',
      component: CashFlowView,
    },
  ],
});

export default router;
