<template>
  <div class="transaction-container">
    <div class="status">
      <div class="status-title">입출금현황</div>
      <div class="status-bar">
        <div class="fill-bar" :style="{ width: incomePercent + '%' }"></div>
      </div>
    </div>

    <div>
      <div class="income-line">
        <span class="label income-label">입금</span>
        <span class="percent income-percent">{{ incomePercent }}%</span>
        <span class="amount income-amount"
          >{{ incomeAmount.toLocaleString() }}원</span
        >
      </div>

      <div class="expense-line">
        <span class="label expense-label">출금</span>
        <span class="percent expense-percent">{{ expensePercent }}%</span>
        <span class="amount expense-amount"
          >{{ expenseAmount.toLocaleString() }}원</span
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  incomePercent: Number,
  expensePercent: Number,
  incomeAmount: Number,
  expenseAmount: Number,
});

const incomeWidth = computed(() => (props.incomePercent / 100) * 800);
const expenseWidth = computed(() => (props.expensePercent / 100) * 800);
</script>

<style scoped>
.transaction-container {
  width: 1200px;
  height: 200px;
  background-color: yellow;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.status-bar {
  width: 800px;
  height: 10px;
  background-color: #f4cccc; /* 전체 바 배경 = 출금색(핑크) */
  border-radius: 10px;
  overflow: hidden;
  position: relative;
}

.fill-bar {
  height: 100%;
  background-color: #3cb371; /* 입금색(초록) */
  transition: width 0.4s ease-in-out;
}

.income-line,
.expense-line {
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
  justify-content: center;
  margin: 12px 0;
}

.status-title {
  font-size: 24px;
  font-weight: bold;
  color: black;
  margin-bottom: 20px;
}

.label,
.percent,
.amount {
  font-size: 20px;
  color: black;
}

.amount {
  width: 100px;
  text-align: right;
}
</style>
