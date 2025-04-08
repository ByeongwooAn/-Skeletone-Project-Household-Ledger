<template>
  <div class="card-total">
    <p>TOTAL: {{ total.toLocaleString() }}원</p>
  </div>
</template>

<script setup>
defineProps({ total: Number });
</script>

<style scoped>
.card-total {
  background: white;
  color: black;
  padding: 3px;
  margin-bottom: 4rem;
  margin-left: 1.5rem;
  border-radius: 10px;
  text-align: center;
  font-weight: bold;
  width: 600px;
}
</style>
