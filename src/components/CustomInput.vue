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
      :class="{ input_unavailable: props.variant === 'unavailable' }"
    />
  </div>
</template>
<!-- Стоит ли делать недоступной так       :disabled="variant === 'unavailable'" -->
<script setup>
const props = defineProps({
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
    default: 'text',
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
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 230px;
  color: #201f20;
}
.input_text {
  width: 180px;
  border-radius: 5px;
  border: 2px solid #389ddf;
  padding: 10px;
  font-size: 14px;
}
.input_label {
  font-size: 14px;
  word-break: break-word;
}
.input_unavailable {
  border-color: #c6c6c5;
  color: #c6c6c5;
}
.input_text:focus {
  outline: none;
  border-color: #0070ba;
}
</style>
