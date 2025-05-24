<template>
  <div class="information_wrapper">
    <div v-if="title" class="information_title">{{ title }}</div>
    <div class="information_text"><slot></slot></div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: '',
  },
})
</script>

<style scoped>
.information_wrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  overflow-wrap: break-word;
}
.information_title {
  font-size: 20px;
  font-weight: 800;
}
.information_text {
  font-size: 16px;
}
@media (max-width: 768px) {
  .information_title {
    font-size: 18px;
  }
}
@media (max-width: 480px) {
  .information_title {
    font-size: 16px;
  }
  .information_text {
    font-size: 14px;
  }
}
</style>
