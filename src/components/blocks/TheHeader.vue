<template>
  <div class="header_wrapper">
    <TheLogo></TheLogo>
  </div>
</template>

<script setup>
import TheLogo from '../TheLogo.vue'
</script>

<style scoped>
.header_wrapper {
  display: flex;
  justify-content: center;
  background-color: var(--color-blue-secondary);
  padding: var(--medium-padding-x) 0;
}
</style>
