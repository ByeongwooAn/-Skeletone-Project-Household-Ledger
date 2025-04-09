<template>
  <div class="date-selector">
    <button @click="$emit('changeMonth', -1)"><</button>
    <span>{{ year }}년 {{ month }}월</span>
    <button @click="$emit('changeMonth', 1)">></button>
  </div>
</template>

<script setup>
defineProps({
  year: Number,
  month: Number,
});
</script>

<style scoped>
.date-selector {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-weight: bold;
  color: black;
  margin-bottom: 10px;
}

.date-selector button {
  background-color: transparent;
  color: black;
  border: none;
  padding: 6px 10px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.2s;
}

.date-selector button:hover {
  background-color: #ffef9b;
}
</style>
