<template>
  <div class="card">
    <span class="category">{{ category }}</span>
    <span class="percent">{{ percent }}% </span>
    <span class="amount">{{ amount.toLocaleString() }}원</span>
  </div>
</template>

<script setup>
defineProps({
  category: String,
  amount: Number,
  percent: Number,
});
</script>
