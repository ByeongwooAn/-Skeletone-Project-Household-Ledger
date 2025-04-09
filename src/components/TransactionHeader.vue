<template>
  <div class="transaction-header">
    <div class="title-box">거래내역</div>

    <div class="month-box">
      <button class="arrow-btn" @click="$emit('change-month', 'prev')">
        ‹
      </button>
      <span class="month-text">{{ formattedDate }}</span>
      <button class="arrow-btn" @click="$emit('change-month', 'next')">
        ›
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  date: {
    type: Date,
    required: true,
  },
});

const formattedDate = computed(() => {
  const year = props.date.getFullYear();
  const month = String(props.date.getMonth() + 1).padStart(2, '0');
  return `${year}-${month}`;
});
</script>

<style scoped>
.transaction-header {
  width: 1200px;
  height: 200px;
  background-color: green;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.title-box {
  width: 100px;
  height: 60px;
  font-size: 24px;
  font-weight: bold;
  color: black;
}

.month-box {
  width: 259px;
  height: 66px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 20px;
  color: black;
}

.arrow-btn {
  background: none;
  border: none;
  font-size: 28px;
  cursor: pointer;
  width: 32px;
  height: 32px;
  line-height: 1;
  color: black;
}

.month-text {
  font-weight: 500;
}
</style>
