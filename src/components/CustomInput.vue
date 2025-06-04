<template>
  <div class="form_input">
    <label v-if="label" :for="id" class="input_label">{{ label }}</label>
    <input
      :id="id"
      :type="type"
      :name="name"
      :step="step"
      :placeholder="placeholder"
      :value="modelValue"
      :disabled="variant === 'unavailable'"
      class="input_text"
      :class="{ input_unavailable: variant === 'unavailable', input_error: error }"
      @input="handleInput"
    />
    <div v-if="error" class="error_text">{{ error }}</div>
  </div>
</template>

<script setup>
const emit = defineEmits(['update:modelValue'])

defineProps({
  id: {
    type: String,
    default: undefined,
  },
  modelValue: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'number',
  },
  step: {
    type: String,
    default: 'any',
  },
  placeholder: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  variant: {
    type: String,
    default: 'default',
  },
  error: {
    type: [String, Number, Object],
    default: '',
  },
})

/**
 * @param {InputEvent} event
 */
const handleInput = (event) => {
  if (event.currentTarget instanceof HTMLInputElement) {
    emit('update:modelValue', event.currentTarget.value)
  }
}
</script>

<style scoped>
.form_input {
  --input-color-unavailable: var(--color-silver);
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 230px;
  color: var(--color-black);
  font-size: var(--small-font-size);
  position: relative;
}
.input_text {
  width: 180px;
  border-radius: var(--control-border-radius);
  border: var(--small-border);
  padding: var(--medium-padding-y) var(--medium-padding-x);
  transition: 0.2s;
}
.input_label {
  word-break: break-word;
}
.input_unavailable {
  border-color: var(--input-color-unavailable);
  color: var(--input-color-unavailable);
}
.input_text:focus {
  outline: none;
  border-color: var(--color-blue-secondary);
}
.input_text::-webkit-outer-spin-button,
.input_text::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.error_text {
  position: absolute;
  top: 100%;
  color: var(--color-tomato-primary);
}

.input_error {
  border-color: var(--color-tomato-primary);
}
</style>
