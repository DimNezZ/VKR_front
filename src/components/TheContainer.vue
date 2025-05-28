<template>
  <div
    :class="{
      container_row: variant === 'row',
    }"
    class="container"
  >
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: 'column',
  },
})
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  place-items: center;
  background-color: var(--color-white);
  padding: 40px var(--large-padding-x);
}
.container_row {
  flex-direction: row;
  flex-wrap: wrap;
  align-items: start;
  justify-content: space-between;
}

@media (max-width: 768px) {
  .container {
    max-width: 720px;
    gap: 20px;
  }
}
.container_row {
  justify-content: center;
}

@media (max-width: 480px) {
  .container {
    max-width: 450px;
    padding: var(--large-padding-y) var(--big-padding-x);
  }
}
</style>
