<template>
  <div class="result_wrapper">
    <div class="result_container">
      <slot></slot>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.result_wrapper {
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 900px;
  padding: var(--large-padding-y) var(--large-padding-x);
  background-color: var(--color-alabaster);
  border-radius: var(--control-border-radius);
  border: var(--big-border);
}
.result_container {
  display: flex;
  flex-wrap: wrap;
  align-items: end;
  gap: 20px;
}

@media (max-width: 768px) {
  .result_wrapper {
    width: 680px;
    padding: var(--medium-padding-y) var(--large-padding-x);
  }
}
@media (max-width: 480px) {
  .result_wrapper {
    width: 430px;
    padding: var(--medium-padding-y) var(--big-padding-x);
  }
}
</style>
