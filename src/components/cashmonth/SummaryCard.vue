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
  padding: 15px 16px;
  border-radius: 10px;
  background-color: white;
  color: black;
  max-width: 600px;
  width: 90%;
  font-weight: bold;
  flex-wrap: wrap;
}

.category {
  width: 95px;
  text-align: left;
  padding-left: 2rem;
}
.percent {
  text-align: left;
  font-size: 0.9rem;
}
.amount {
  flex: 1;
  text-align: right;
  padding-right: 2rem;
}
</style>
