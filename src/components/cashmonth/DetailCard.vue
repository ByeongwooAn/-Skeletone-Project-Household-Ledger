<template>
  <div class="detail-card">
    <span class="date">{{ date }}</span>
    <span class="category">{{ category }}</span>
    <span class="amount">{{ amount.toLocaleString() }}원</span>
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
  width: 800px;
  font-size: 1rem;
}
.date {
  width: 200px;
  text-align: left;
}
.category {
  width: 160px;
  text-align: left;
}
.amount {
  flex: 1;
  text-align: right;
  padding-right: 3rem;
}
</style>
