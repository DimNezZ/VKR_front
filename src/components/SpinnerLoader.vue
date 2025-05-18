<template><div class="loader"></div></template>

<style scoped>
.loader {
  width: 1em;
  height: 1em;
  border-radius: 50%;
  position: relative;
  text-indent: -9999em;
  animation: mulShdSpin 1.1s infinite ease;
  transform: translateZ(0);
}
@keyframes mulShdSpin {
  0%,
  100% {
    box-shadow:
      0em -2.6em 0em 0em color-mix(in srgb, currentColor 100%, #ffffff),
      1.8em -1.8em 0 0em color-mix(in srgb, currentColor 20%, #ffffff),
      2.5em 0em 0 0em color-mix(in srgb, currentColor 20%, #ffffff),
      1.75em 1.75em 0 0em color-mix(in srgb, currentColor 20%, #ffffff),
      0em 2.5em 0 0em color-mix(in srgb, currentColor 20%, #ffffff),
      -1.8em 1.8em 0 0em color-mix(in srgb, currentColor 20%, #ffffff),
      -2.6em 0em 0 0em color-mix(in srgb, currentColor 50%, #ffffff),
      -1.8em -1.8em 0 0em color-mix(in srgb, currentColor 70%, #ffffff);
  }
  12.5% {
    box-shadow:
      0em -2.6em 0em 0em color-mix(in srgb, currentColor 70%, #ffffff),
      1.8em -1.8em 0 0em color-mix(in srgb, currentColor 100%, #ffffff),
      2.5em 0em 0 0em color-mix(in srgb, currentColor 20%, #ffffff),
      1.75em 1.75em 0 0em color-mix(in srgb, currentColor 20%, #ffffff),
      0em 2.5em 0 0em color-mix(in srgb, currentColor 20%, #ffffff),
      -1.8em 1.8em 0 0em color-mix(in srgb, currentColor 20%, #ffffff),
      -2.6em 0em 0 0em color-mix(in srgb, currentColor 20%, #ffffff),
      -1.8em -1.8em 0 0em color-mix(in srgb, currentColor 50%, #ffffff);
  }
  25% {
    box-shadow:
      0em -2.6em 0em 0em color-mix(in srgb, currentColor 50%, #ffffff),
      1.8em -1.8em 0 0em color-mix(in srgb, currentColor 70%, #ffffff),
      2.5em 0em 0 0em color-mix(in srgb, currentColor 100%, #ffffff),
      1.75em 1.75em 0 0em color-mix(in srgb, currentColor 20%, #ffffff),
      0em 2.5em 0 0em color-mix(in srgb, currentColor 20%, #ffffff),
      -1.8em 1.8em 0 0em color-mix(in srgb, currentColor 20%, #ffffff),
      -2.6em 0em 0 0em color-mix(in srgb, currentColor 20%, #ffffff),
      -1.8em -1.8em 0 0em color-mix(in srgb, currentColor 20%, #ffffff);
  }
  37.5% {
    box-shadow:
      0em -2.6em 0em 0em color-mix(in srgb, currentColor 20%, #ffffff),
      1.8em -1.8em 0 0em color-mix(in srgb, currentColor 50%, #ffffff),
      2.5em 0em 0 0em color-mix(in srgb, currentColor 70%, #ffffff),
      1.75em 1.75em 0 0em color-mix(in srgb, currentColor 100%, #ffffff),
      0em 2.5em 0 0em color-mix(in srgb, currentColor 20%, #ffffff),
      -1.8em 1.8em 0 0em color-mix(in srgb, currentColor 20%, #ffffff),
      -2.6em 0em 0 0em color-mix(in srgb, currentColor 20%, #ffffff),
      -1.8em -1.8em 0 0em color-mix(in srgb, currentColor 20%, #ffffff);
  }
  50% {
    box-shadow:
      0em -2.6em 0em 0em color-mix(in srgb, currentColor 20%, #ffffff),
      1.8em -1.8em 0 0em color-mix(in srgb, currentColor 20%, #ffffff),
      2.5em 0em 0 0em color-mix(in srgb, currentColor 50%, #ffffff),
      1.75em 1.75em 0 0em color-mix(in srgb, currentColor 70%, #ffffff),
      0em 2.5em 0 0em color-mix(in srgb, currentColor 100%, #ffffff),
      -1.8em 1.8em 0 0em color-mix(in srgb, currentColor 20%, #ffffff),
      -2.6em 0em 0 0em color-mix(in srgb, currentColor 20%, #ffffff),
      -1.8em -1.8em 0 0em color-mix(in srgb, currentColor 20%, #ffffff);
  }
  62.5% {
    box-shadow:
      0em -2.6em 0em 0em color-mix(in srgb, currentColor 20%, #ffffff),
      1.8em -1.8em 0 0em color-mix(in srgb, currentColor 20%, #ffffff),
      2.5em 0em 0 0em color-mix(in srgb, currentColor 20%, #ffffff),
      1.75em 1.75em 0 0em color-mix(in srgb, currentColor 50%, #ffffff),
      0em 2.5em 0 0em color-mix(in srgb, currentColor 70%, #ffffff),
      -1.8em 1.8em 0 0em color-mix(in srgb, currentColor 100%, #ffffff),
      -2.6em 0em 0 0em color-mix(in srgb, currentColor 20%, #ffffff),
      -1.8em -1.8em 0 0em color-mix(in srgb, currentColor 20%, #ffffff);
  }
  75% {
    box-shadow:
      0em -2.6em 0em 0em color-mix(in srgb, currentColor 20%, #ffffff),
      1.8em -1.8em 0 0em color-mix(in srgb, currentColor 20%, #ffffff),
      2.5em 0em 0 0em color-mix(in srgb, currentColor 20%, #ffffff),
      1.75em 1.75em 0 0em color-mix(in srgb, currentColor 20%, #ffffff),
      0em 2.5em 0 0em color-mix(in srgb, currentColor 50%, #ffffff),
      -1.8em 1.8em 0 0em color-mix(in srgb, currentColor 70%, #ffffff),
      -2.6em 0em 0 0em color-mix(in srgb, currentColor 100%, #ffffff),
      -1.8em -1.8em 0 0em color-mix(in srgb, currentColor 20%, #ffffff);
  }
  87.5% {
    box-shadow:
      0em -2.6em 0em 0em color-mix(in srgb, currentColor 0.2, #ffffff),
      1.8em -1.8em 0 0em color-mix(in srgb, currentColor 0.2, #ffffff),
      2.5em 0em 0 0em color-mix(in srgb, currentColor 0.2, #ffffff),
      1.75em 1.75em 0 0em color-mix(in srgb, currentColor 0.2, #ffffff),
      0em 2.5em 0 0em color-mix(in srgb, currentColor 0.2, #ffffff),
      -1.8em 1.8em 0 0em color-mix(in srgb, currentColor 50%, #ffffff),
      -2.6em 0em 0 0em color-mix(in srgb, currentColor 70%, #ffffff),
      -1.8em -1.8em 0 0em color-mix(in srgb, currentColor 100%, #ffffff);
  }
}
</style>
