<script setup>
import { useMediaQuery } from '@vueuse/core';
import MainView from '@/components/MainComponent.vue';
import MainViewMobile from '@/components/MobileMainComponent.vue';

const isMobile = useMediaQuery('(max-width: 796px)');
</script>

<template>
  <component :is="isMobile ? MainViewMobile : MainView" />
</template>
