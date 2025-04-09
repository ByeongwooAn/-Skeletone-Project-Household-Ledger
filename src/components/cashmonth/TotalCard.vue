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
  padding: 20px;
  margin-bottom: 2rem;
  border-radius: 10px;
  text-align: center;
  font-weight: bold;
  max-width: 600px;
  width: 100%;
}
</style>
