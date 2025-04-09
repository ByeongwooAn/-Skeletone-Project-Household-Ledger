<script setup>
import MenuBar from './components/common/MenuBar.vue';
</script>

<template>
  <div id="container">
    <MenuBar />
    <div id="page-rendering-div">
      <RouterView />
    </div>
  </div>
</template>
<style scoped>
#container{
    display: flex;
}
</style>