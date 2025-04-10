<template>
  <div class="detail-card">
    <span class="detail-date">{{ date }}</span>
    <span class="detail-category">{{ category }}</span>
    <span class="detail-amount">{{ amount.toLocaleString() }}원</span>
  </div>
</template>

<script setup>
defineProps({
  date: String,
  category: String,
  amount: Number,
});
</script>
