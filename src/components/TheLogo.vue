<template>
  <div class="logo_wrapper">
    <div class="logo">
      <div class="image_container">
        <img src="../assets/logo.png" alt="Логотип ИШИТР" />
      </div>
      <div class="logo_title">TPUDrillSoft</div>
    </div>
    <div v-if="text != ''" class="copyright">{{ text }}</div>
  </div>
</template>

<script setup>
defineProps({
  text: {
    type: String,
  },
})
</script>

<style scoped>
.logo_wrapper {
  border-radius: var(--control-border-radius);
  background-color: var(--color-alabaster);
}
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: var(--medium-padding-y) 35px;
  color: var(--color-black);
}
.image_container {
  min-width: 60px;
  min-height: 60px;
  max-width: 80px;
  max-height: 80px;
  margin-right: 10px;
}
.image_container img {
  width: 100%;
  height: 100%;
}
.logo_title {
  font-size: var(--logo-font-size);
  font-weight: 800;
}
.copyright {
  padding: 0 var(--medium-padding-x);
  font-size: var(--big-font-size);
  text-align: center;
}

@media (max-width: 768px) {
  .logo {
    padding: var(--small-padding-y) var(--medium-padding-x);
  }
  .image_container {
    min-width: 40px;
    min-height: 40px;
    max-width: 60px;
    max-height: 60px;
  }
  .logo_title {
    font-size: var(--large-font-size);
  }
  .copyright {
    font-size: var(--small-font-size);
  }
}

@media (max-width: 480px) {
  .logo_title {
    font-size: var(--big-font-size);
  }
}
</style>
