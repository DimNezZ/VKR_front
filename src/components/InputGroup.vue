<template>
  <div class="container_wrapper">
    <div v-if="props.variant === 'bordered'" :title="title" class="group_title">{{ title }}</div>
    <div class="input_container" :class="{ group_bordered: props.variant === 'bordered' }">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
  },
  variant: {
    type: String,
    default: 'default',
  },
})
</script>

<style scoped>
.container_wrapper {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.group_title {
  font-size: var(--medium-font-size);
  color: var(--color-black);
}
.group_bordered {
  border-top: var(--small-border);
  border-bottom: var(--small-border);
  border-radius: var(--control-border-radius);
}
.input_container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: end;
  gap: 15px;
  padding: var(--big-padding-x) var(--medium-padding-y);
}
</style>
