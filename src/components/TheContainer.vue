<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style scoped>
.container {
  max-width: 1180px;
  width: 100%;
  margin: 0 auto;
  background-color: var(--color-white);
  padding: 40px var(--large-padding-y);
}

@media (max-width: 768px) {
  .container {
    max-width: 720px;
  }
}

@media (max-width: 480px) {
  .container {
    max-width: 450px;
  }
}
</style>
