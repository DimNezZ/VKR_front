<template>
  <form @submit.prevent="handleSubmit" @reset.prevent="handleReset" class="form_wrapper">
    <div class="input_container">
      <slot></slot>
    </div>
    <div class="button_container">
      <CustomButton type="reset" variant="danger">Сбросить</CustomButton>
      <CustomButton type="submit">Рассчитать</CustomButton>
    </div>
  </form>
</template>

<script setup>
import CustomButton from './CustomButton.vue'

const emit = defineEmits(['submit', 'reset', 'update:modelValue'])
const props = defineProps(['modelValue'])

const handleSubmit = (event) => {
  emit('submit', new FormData(event.target))
}
const handleReset = () => {
  emit('reset')
  emit(
    'update:modelValue',
    Object.fromEntries(Object.keys(props.modelValue).map((key) => [key, ''])),
  )
}
</script>

<style scoped>
.form_wrapper {
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 900px;
  padding: var(--large-padding-y) var(--large-padding-x);
  background-color: var(--color-alabaster);
  border-radius: var(--control-border-radius);
  border: var(--big-border);
}
.input_container {
  display: flex;
  flex-wrap: wrap;
  align-items: end;
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
    padding: var(--medium-padding-y) var(--large-padding-x);
  }
}
@media (max-width: 480px) {
  .form_wrapper {
    width: 430px;
    padding: var(--medium-padding-y) var(--big-padding-x);
  }
}
</style>
