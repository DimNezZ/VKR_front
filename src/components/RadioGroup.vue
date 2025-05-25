<template>
  <div class="form_radio">
    <input
      :id="id"
      :type="type"
      :name="name"
      :value="value"
      :checked="isChecked"
      :disabled="variant === 'unavailable'"
      class="radio"
      :class="{ input_unavailable: variant === 'unavailable' }"
      @change="handleChange"
    />
    <label :for="id" class="input_label"> {{ label }}</label>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const emit = defineEmits(['update:modelValue'])

const props = defineProps({
  id: {
    type: String,
    default: undefined,
  },
  value: {
    type: String,
    default: '0',
  },
  modelValue: {
    type: [String, Boolean],
    default: '0',
  },
  name: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'radio',
  },
  label: {
    type: String,
    default: '',
  },
  variant: {
    type: String,
    default: 'default',
  },
})

const isChecked = computed(() => {
  return props.modelValue === props.value
})

function handleChange(event) {
  if (props.type === 'checkbox') {
    emit('update:modelValue', event.target.checked ? props.value : '0')
  } else {
    emit('update:modelValue', props.value)
  }
}
</script>

<style scoped>
.form_radio {
  display: flex;
  gap: 8px;
  align-items: center;
  color: var(--color-black);
  font-size: var(--small-font-size);
}
.radio {
  width: 20px;
  height: 20px;
  cursor: pointer;
  appearance: none;
  border: var(--small-border);
  border-radius: 50%;
  position: relative;
  transition: 0.3s;
}
.input_label {
  cursor: pointer;
}
.radio:checked {
  border-color: var(--color-blue-secondary);
}
.radio::after {
  content: '';
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: var(--color-blue-primary);
  position: absolute;
  left: 3px;
  top: 3px;
  transition: opacity 0.2s;
  opacity: 0;
}
.radio:checked::after {
  opacity: 1;
}
.radio_unavailable {
  border-color: var(--input-color-unavailable);
  color: var(--input-color-unavailable);
}
.radio:focus-visible {
  outline: var(--small-border);
}
</style>
