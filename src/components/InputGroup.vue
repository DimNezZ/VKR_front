<template>
  <div class="container_wrapper">
    <div class="group_container">
      <div v-if="props.variant === 'bordered'" :title="title" class="group_title">{{ title }}</div>
      <div class="input_container" :class="{ group_bordered: props.variant === 'bordered' }">
        <slot></slot>
      </div>
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
  width: 100%;
}
.group_container {
  display: flex;
  flex-direction: column;
  width: fit-content;
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
  align-items: end;
  gap: 20px;
  padding: var(--big-padding-y) var(--medium-padding-x);
}
@media (max-width: 480px) {
  .group_title {
    font-size: var(--small-font-size);
  }
}
</style>
