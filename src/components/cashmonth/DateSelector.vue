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
