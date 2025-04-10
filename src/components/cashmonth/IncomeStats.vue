<template>
  <div class="app">
    <h2>수입 통계</h2>
    <div class="chart-summary-container">
      <!--chart 공간-->
      <div class="chart-area"></div>

      <!--날짜 바, 총액, 카테고리별 요약 배경 상자-->
      <div class="summary-box">
        <!--날짜-->
        <DateSelector :year="selectedYear" :month="selectedMonth" @changeMonth="changeMonth" />
        <!--수입 총액-->
        <TotalCard :total="totalIncome" />
        <!--카테고리별 요약-->
        <SummaryCard
          v-for="(amount, category) in categorySummary"
          :key="category"
          :category="category"
          :amount="amount"
          :percent="((amount / totalIncome) * 100).toFixed(1)"
        />
      </div>
    </div>
    <!--수입 내역-->
    <div class="details-list">
      <h3>수입 내역</h3>
      <DetailCard
        v-for="item in filteredIncome"
        :key="item.id"
        :date="item.date"
        :category="item.category"
        :amount="item.amount"
        :memo="item.memo"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';

import DateSelector from '@/components/cashmonth/DateSelector.vue';
import TotalCard from '@/components/cashmonth/TotalCard.vue';
import SummaryCard from '@/components/cashmonth/SummaryCard.vue';
import DetailCard from '@/components/cashmonth/DetailCard.vue';

import '@/css/statistics.css';

// 날짜 선택
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

// 데이터 로딩
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

// 필터링 및 통계 계산
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

<style scoped></style>
