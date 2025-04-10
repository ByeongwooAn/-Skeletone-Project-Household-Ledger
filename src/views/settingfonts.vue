<script setup>
import { useSetting } from "@/composables/useSetting.js";

const { changeFont } = useSetting();
</script>

<template>
  <select @change="(e) => changeFont(e.target.value)">
    <option value="Black Han Sans">Black Han Sans</option>
    <option value="Arial">Arial</option>
    <option value="Do Hyeon">Do Hyeon</option>
    <option value="Sunflower">Sunflower</option>
  </select>
</template>
