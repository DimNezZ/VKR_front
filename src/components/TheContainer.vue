<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 1180px;
  width: 100%;
  margin: 0 auto;
  place-items: center;
  background-color: var(--color-white);
  padding: 40px var(--large-padding-x);
}

@media (max-width: 768px) {
  .container {
    max-width: 720px;
    gap: 20px;
  }
}

@media (max-width: 480px) {
  .container {
    max-width: 450px;
  }
}
</style>
