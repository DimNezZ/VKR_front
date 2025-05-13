<template>
  <div class="wrapper" :text="text">
    <div class="text">{{ text }}</div>
  </div>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
})
</script>

<style scoped>
.wrapper {
  background-color: var(--color-alabaster);
  border-radius: var(--control-border-radius);
}
.text {
  padding: var(--medium-padding-x) var(--large-padding-y);
  font-size: var(--medium-font-size);
  color: var(--color-black);
  text-align: center;
}
@media (max-width: 768px) {
  .text {
    padding: var(--small-padding-x) var(--medium-padding-y);
    font-size: var(--small-font-size);
  }
}
</style>
