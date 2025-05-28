<template>
  <div class="form_checkbox">
    <input
      :id="id"
      :type="type"
      :name="name"
      :value="value"
      :checked="isChecked"
      :disabled="variant === 'unavailable'"
      class="checkbox"
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
    default: 'checkbox',
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
.form_checkbox {
  display: flex;
  gap: 8px;
  align-items: center;
  color: var(--color-black);
  font-size: var(--small-font-size);
}

.input_label {
  cursor: pointer;
}

.checkbox {
  appearance: none;
  width: 20px;
  height: 20px;
  position: relative;
  border-radius: var(--control-border-radius);
  border: var(--small-border);
  background-color: var(--color-white);
  cursor: pointer;
  transition: 0.2s;
}
.checkbox:checked {
  border-color: var(--color-blue-secondary);
  background-color: var(--color-blue-primary);
}

.checkbox::after {
  content: '';
  position: absolute;
  left: 6px;
  top: 2px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 0.2s;
}
.checkbox:checked::after {
  opacity: 1;
}

.checkbox:focus-visible {
  outline: var(--small-border);
}

.input_unavailable {
  border-color: var(--input-color-unavailable);
  color: var(--input-color-unavailable);
}

.checkbox:focus-visible {
  outline: var(--small-border);
}
</style>
