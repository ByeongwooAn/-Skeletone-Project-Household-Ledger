<template>
  <div class="cash-statistics-view">
    <h1 class="title">월간 요약 통계</h1>
    <br />

    <!-- 탭 메뉴 -->
    <div class="tab-menu">
      <button class="tab" :class="{ active: currentTab === 'income' }" @click="currentTab = 'income'">수입 통계</button>
      <button class="tab" :class="{ active: currentTab === 'expense' }" @click="currentTab = 'expense'">
        지출 통계
      </button>
    </div>

    <!-- 탭에 따른 컴포넌트 렌더링 -->
    <IncomeStats v-if="currentTab === 'income'" />
    <ExpenseStats v-if="currentTab === 'expense'" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

import '@/css/statistics.css';

// 탭에 따라 다른 컴포넌트 보여줌
import IncomeStats from '@/components/cashmonth/IncomeStats.vue';
import ExpenseStats from '@/components/cashmonth/ExpenseStats.vue';

const currentTab = ref('income'); // 기본 탭: 수입 통계
</script>

<style scoped></style>
