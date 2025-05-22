<template>
  <div class="text_wrapper">
    <div class="caption">{{ caption }}</div>
    <slot></slot>
    <div>{{ unit }}</div>
  </div>
</template>

<script setup>
defineProps({
  caption: {
    type: String,
    default: '',
  },
  unit: {
    type: String,
    defauly: '',
  },
})
</script>

<style scoped>
.text_wrapper {
  display: flex;
  gap: 5px;
  font-size: var(--medium-font-size);
}
.caption {
  font-weight: 800;
}
@media (max-width: 768px) {
  .text_wrapper {
    font-size: var(--small-font-size);
  }
}
</style>
