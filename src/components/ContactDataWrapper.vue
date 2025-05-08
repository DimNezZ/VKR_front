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
  background-color: #f8f9fa;
  border-radius: 5px;
}
.text {
  padding: 10px 20px;
  font-size: 16px;
  text-align: center;
}
@media (max-width: 768px) {
  .text {
    padding: 5px 10px;
    font-size: 14px;
  }
}
</style>
