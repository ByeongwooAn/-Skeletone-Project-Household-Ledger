<template>
  <div class="app">
    <h2 class="title">월간 요약 통계</h2>
    <br />
    <div class="tab-menu">
      <router-link class="tab" to="/income" :class="{ active: isActive('/income') }">수입 통계</router-link>
      <router-link class="tab" to="/expense" :class="{ active: isActive('/expense') }">지출 통계</router-link>
    </div>

    <div class="chart-summary-container">
      <div class="chart-area"></div>
      <div class="summary-box">
        <DateSelector :year="selectedYear" :month="selectedMonth" @changeMonth="changeMonth" />

        <TotalCard :total="totalIncome" />

        <SummaryCard
          v-for="(amount, category) in categorySummary"
          :key="category"
          :category="category"
          :amount="amount"
          :percent="((amount / totalIncome) * 100).toFixed(1)"
        />
      </div>
    </div>

    <div class="details-list">
      <h3>수입 내역</h3>
      <DetailCard
        v-for="item in filteredIncome"
        :key="item.id"
        :date="item.date"
        :category="item.category"
        :amount="item.amount"
      />
    </div>
  </div>
</template>

<script setup>
import TotalCard from '@/components/cashmonth/TotalCard.vue';
import SummaryCard from '@/components/cashmonth/SummaryCard.vue';
import DetailCard from '@/components/cashmonth/DetailCard.vue';
import DateSelector from '@/components/cashmonth/DateSelector.vue';

import '@/css/statistics.css';

import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const isActive = (path) => route.path === path;

const selectedYear = ref(new Date().getFullYear());
const selectedMonth = ref(new Date().getMonth() + 1);

const changeMonth = (offset) => {
  let month = selectedMonth.value + offset;
  let year = selectedYear.value;
  if (month > 12) {
    month = 1;
    year += 1;
  } else if (month < 1) {
    month = 12;
    year -= 1;
  }
  selectedMonth.value = month;
  selectedYear.value = year;
};

const transactions = ref([]);

onMounted(async () => {
  try {
    const res = await axios.get('http://localhost:3000/transactions');
    transactions.value = res.data;
    console.log('불러온 데이터:', transactions.value);
  } catch (err) {
    console.error('데이터 불러오기 실패:', err);
  }
});

const filteredIncome = computed(() => {
  return transactions.value.filter((item) => {
    const date = new Date(item.date);
    return (
      item.type === 'income' && date.getFullYear() === selectedYear.value && date.getMonth() + 1 === selectedMonth.value
    );
  });
});

const categorySummary = computed(() => {
  const summary = {};
  filteredIncome.value.forEach((item) => {
    if (!summary[item.category]) {
      summary[item.category] = 0;
    }
    summary[item.category] += item.amount;
  });
  return summary;
});

const totalIncome = computed(() => {
  return filteredIncome.value.reduce((acc, item) => acc + item.amount, 0);
});
</script>

<style></style>
