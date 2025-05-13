<template>
  <div class="form_wrapper">
    <div class="input_container">
      <slot></slot>
    </div>
    <div class="button_container">
      <CustomButton variant="reset">Сбросить</CustomButton>
      <CustomButton>Рассчитать</CustomButton>
    </div>
  </div>
</template>

<script setup>
import CustomButton from './CustomButton.vue'
</script>

<style scoped>
.form_wrapper {
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 900px;
  padding: var(--large-padding-x) var(--large-padding-y);
  background-color: var(--color-alabaster);
  border-radius: var(--control-border-radius);
  border: var(--big-border);
}
.input_container {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}
.button_container {
  display: flex;
  flex-wrap: wrap;
  justify-content: end;
  gap: 30px;
}
@media (max-width: 768px) {
  .form_wrapper {
    width: 680px;
    padding: var(--medium-padding-x) var(--large-padding-y);
  }
}
@media (max-width: 480px) {
  .form_wrapper {
    width: 430px;
    padding: var(--medium-padding-x) var(--small-padding-y);
  }
}
</style>
