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
  border-radius: 5px;
  background-color: #f8f9fa;
}
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 35px;
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
  font-size: 32px;
  font-weight: 800;
  color: #201f20;
}
.copyright {
  padding: 0 10px;
  font-size: 18px;
  text-align: center;
}

@media (max-width: 768px) {
  .logo {
    padding: 5px 10px;
  }
  .image_container {
    min-width: 40px;
    min-height: 40px;
    max-width: 60px;
    max-height: 60px;
  }
  .logo_title {
    font-size: 22px;
  }
  .copyright {
    padding: 0 5px;
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .logo_wrapper {
    max-width: 66%;
  }
  .logo {
    display: flex;
    align-items: center;
    padding: 5px 10px;
  }
  .image_container {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
  .image_container img {
    width: 100%;
    height: 100%;
  }
  .logo_title {
    font-size: 18px;
    font-weight: 800;
    color: #201f20;
  }
  .copyright {
    padding: 0 10px;
    font-size: 14px;
    text-align: center;
  }
}
</style>
