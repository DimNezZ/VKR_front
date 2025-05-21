<template>
  <div class="wrapper" :text="text">
    <div class="text">
      <a :href="href" target="_blank">
        {{ text }}
      </a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
  href: {
    type: String,
  },
})
</script>

<style scoped>
.wrapper {
  background-color: var(--color-alabaster);
  border-radius: var(--control-border-radius);
}
.text {
  padding: var(--medium-padding-y) var(--large-padding-x);
  font-size: var(--medium-font-size);
  color: var(--color-black);
  text-align: center;
}
a {
  cursor: pointer;
  transition: 0.5s;
}
.wrapper:hover {
  text-decoration: underline;
}
@media (max-width: 768px) {
  .text {
    padding: var(--small-padding-y) var(--medium-padding-x);
    font-size: var(--small-font-size);
  }
}
</style>
