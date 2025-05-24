<template>
  <latex-js :baseURL="baseUrl" stylesheet="/latex.css">{{ latex }}</latex-js>
</template>

<script setup>
defineProps({
  latex: {
    type: String,
  },
})
// @ts-ignore
const baseUrl = new URL('/node_modules/latex.js/dist/dist/', import.meta.url).href
</script>

<style scoped>
latex-js {
  display: block;
  width: 100%;
}
</style>
