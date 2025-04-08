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

<style scoped>
.card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 16px;
  border-radius: 10px;
  margin-bottom: 1rem;
  background-color: white;
  color: black;
  width: 600px;
  font-weight: bold;
}
.category {
  width: 120px;
  text-align: left;
  padding-left: 3rem;
}
.percent {
  width: 60px;
  text-align: left;
  font-size: 0.9rem;
}
.amount {
  flex: 1;
  text-align: right;
  padding-right: 3rem;
}
</style>
