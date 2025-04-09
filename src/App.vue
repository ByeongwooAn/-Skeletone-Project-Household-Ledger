<template>
  <div class="app">
    <RouterView />
    <BasicForm />
  </div>
</template>

<script>
import BasicForm from './components/common/BasicForm.vue';
import CashFlowView from './views/CashFlowView.vue';

export default {
  name: 'App',
  components: {
    BasicForm,
    components: {
      CashFlowView,
    },
  },
};
</script>

<style scoped></style>
