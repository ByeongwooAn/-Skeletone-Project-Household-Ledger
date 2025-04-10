<template>
  <div class="card-total">
    <p>TOTAL: {{ total.toLocaleString() }}원</p>
  </div>
</template>

<script setup>
defineProps({ total: Number });
</script>
