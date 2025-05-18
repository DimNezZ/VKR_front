<template>
  <div class="form_input">
    <label v-if="label" :for="id" class="input_label">{{ label }}</label>
    <input
      :id="id"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      :value="value"
      :disabled="variant === 'unavailable'"
      class="input_text"
      :class="{ input_unavailable: variant === 'unavailable' }"
      @input="emit('input', $event)"
    />
  </div>
</template>

<script setup>
const emit = defineEmits(['input'])

defineProps({
  id: {
    type: String,
    default: undefined,
  },
  value: {
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
})
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
}
.input_text {
  width: 180px;
  border-radius: var(--control-border-radius);
  border: var(--small-border);
  padding: var(--medium-padding-x) var(--medium-padding-y);
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
</style>
