<template>
  <div class="detail-card">
    <span class="date">{{ date }}</span>
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

<style scoped>
.detail-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  padding-left: 3rem;
  border-radius: 12px;
  margin-bottom: 0.5rem;
  background-color: white;
  max-width: 950px;
  width: 90%;
  font-size: 1rem;
}
.date {
  width: 200px;
  text-align: left;
}
.detail-category {
  width: 160px;
  text-align: left;
}
.detail-amount {
  flex: 1;
  text-align: right;
  padding-right: 3rem;
}
</style>
