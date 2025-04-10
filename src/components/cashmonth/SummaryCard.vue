<template>
  <div class="card">
    <div class="category-with-icon">
      <div class="icon-wrapper" :style="{ backgroundColor }">
        {{ icon }}
      </div>
      <span class="category">{{ pureCategory }}</span>
    </div>
    <span class="percent">{{ percent }}% </span>
    <span class="amount">{{ amount.toLocaleString() }}원</span>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { CATEGORY_STATISTICS } from '@/stores/categorystatistics';

const props = defineProps({
  category: String,
  amount: Number,
  percent: String,
});

const pureCategory = computed(() => {
  const raw = props.category;
  const cleaned = raw.replace(/^[^\w가-힣/]+/, '');
  console.log('정리된 카테고리:', cleaned);
  return cleaned;
});

const icon = computed(() => CATEGORY_STATISTICS[props.category]?.icon || '');
const backgroundColor = computed(() => CATEGORY_STATISTICS[props.category]?.color || '#eee');
</script>
