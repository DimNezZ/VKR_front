<template>
  <div class="header_wrapper">
    <RouterLink to="/" class="link">
      <TheLogo></TheLogo>
    </RouterLink>
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
  padding: var(--medium-padding-y) 0;
}
.link {
  display: flex;
}
.link:focus-visible {
  outline: 4px solid rgb(255 255 255 / 50%);
  border-radius: var(--control-border-radius);
}
</style>
