<template>
  <button
    type="button"
    class="button"
    :disabled="variant === 'unavailable'"
    :class="{
      button_unavailable: variant === 'unavailable',
      button_reset: variant === 'reset',
    }"
    @click="emit('click', $event)"
  >
    <slot></slot>
  </button>
</template>

<script setup>
const emit = defineEmits(['click'])

const props = defineProps({
  variant: {
    type: String,
    default: 'default',
  },
})

// const { variant } = props
</script>

<style scoped>
.button {
  --button-color: var(--color-blue-primary);
  --button-color-hover: var(--color-blue-primary);
  --button-color-focus: var(--color-blue-primary);
  --button-color-active: var(--color-blue-secondary);

  color: var(--color-white);
  background-color: var(--button-color);
  padding: var(--medium-padding-x) 0;
  border-radius: var(--control-border-radius);

  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  max-height: 40px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  line-height: 20px;
  transition: 0.2s;
}

.button:not(:disabled):active {
  background-color: var(--button-color-active);
}

.button.button_reset {
  --button-color: var(--color-tomato-primary);
  --button-color-hover: var(--color-tomato-primary);
  --button-color-focus: var(--color-tomato-primary);
  --button-color-active: var(--color-tomato-secondary);
}

.button.button_unavailable {
  --button-color: var(--color-silver);
}

@media (max-width: 480px) {
  .button {
    width: 100px;
    max-height: 35px;
    padding: 10px 0;
    font-size: 14px;
  }
}
</style>
