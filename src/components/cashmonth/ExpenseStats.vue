<template>
  <div class="app">
    <h2>지출 통계</h2>
    <br />
    <!--모바일 날짜 -->
    <div class="mobile-date-selector">
      <DateSelector :year="selectedYear" :month="selectedMonth" @changeMonth="changeMonth" />
    </div>

    <div class="chart-summary-container">
      <!--chart 공간-->
      <div class="chart-area"></div>

      <!--날짜 바, 총액, 카테고리별 요약 배경 상자-->
      <div class="summary-box">
        <!--PC 날짜-->
        <DateSelector
          class="desktop-date-selector"
          :year="selectedYear"
          :month="selectedMonth"
          @changeMonth="changeMonth"
        /><!--수입 총액-->
        <TotalCard :total="totalExpense" />
        <!--카테고리별 요약-->
        <SummaryCard
          v-for="(amount, category) in categorySummary"
          :key="category"
          :category="category"
          :amount="amount"
          :percent="((amount / totalExpense) * 100).toFixed(1)"
        />
      </div>
    </div>
    <!--수입 내역-->
    <div class="details-list">
      <h3>지출 내역</h3>
      <DetailCard
        v-for="item in filteredExpense"
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
const cashflows = ref([]);

onMounted(async () => {
  try {
    const res = await axios.get('http://localhost:3000/cashflows');
    cashflows.value = res.data;
    console.log('불러온 데이터:', cashflows.value);
  } catch (err) {
    console.error('데이터 불러오기 실패:', err);
  }
});

// 필터링 및 통계 계산
const filteredExpense = computed(() => {
  return cashflows.value.filter((item) => {
    const date = new Date(item.date);
    return (
      item.type === 'expense' &&
      date.getFullYear() === selectedYear.value &&
      date.getMonth() + 1 === selectedMonth.value
    );
  });
});

const categorySummary = computed(() => {
  const summary = {};
  filteredExpense.value.forEach((item) => {
    if (!summary[item.category]) {
      summary[item.category] = 0;
    }
    summary[item.category] += item.amount;
  });
  return summary;
});

const totalExpense = computed(() => {
  return filteredExpense.value.reduce((acc, item) => acc + item.amount, 0);
});
</script>

<style scoped></style>
