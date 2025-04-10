<template>
  <div id="app">
    <TransactionHeader :date="currentDate" @change-month="updateMonth" />

    <TransactionStatus
      :incomePercent="incomePercent"
      :expensePercent="expensePercent"
      :incomeAmount="incomeAmount"
      :expenseAmount="expenseAmount"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import TransactionHeader from './components/TransactionHeader.vue';
import TransactionStatus from './components/TransactionStatus.vue';

const currentDate = ref(new Date(2024, 10)); // 11월

const incomeAmount = ref(350000);
const expenseAmount = ref(650000);

const incomePercent = computed(() => {
  const total = incomeAmount.value + expenseAmount.value;
  return total ? Math.round((incomeAmount.value / total) * 100) : 0;
});

const expensePercent = computed(() => {
  const total = incomeAmount.value + expenseAmount.value;
  return total ? Math.round((expenseAmount.value / total) * 100) : 0;
});

function updateMonth(direction) {
  const newDate = new Date(currentDate.value);
  if (direction === 'prev') {
    newDate.setMonth(newDate.getMonth() - 1);
  } else {
    newDate.setMonth(newDate.getMonth() + 1);
  }
  currentDate.value = newDate;
}
</script>

<style>
#app {
  width: 1680px;
  height: 1024px;
  background-color: #fff;
  margin: 0 auto;
  position: relative;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;
}
</style>
