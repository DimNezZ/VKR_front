<template>
  <div class="loader_wrapper">
    <slot></slot>
    <div v-if="appStore.isLoading" class="loader_inner"><SpinnerLoader /></div>
  </div>
</template>

<script setup>
import { useAppStore } from '@/stores/app.js'
import SpinnerLoader from './SpinnerLoader.vue'

const appStore = useAppStore()
</script>

<style scoped>
.loader_wrapper {
  width: fit-content;
  height: fit-content;
  position: relative;
}
.loader_inner {
  display: flex;
  justify-content: center;
  padding: 150px 0;
  font-size: var(--small-font-size);
  color: var(--color-blue-secondary);
  position: absolute;
  inset: 0;
  background-color: rgb(0 0 0 / 25%);
  border-radius: var(--control-border-radius);
}
</style>
