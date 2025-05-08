<template>
  <TheHeader></TheHeader>
  <div class="test">
    <!-- <div class="navcon">
      <NavigationMenu></NavigationMenu>
    </div> -->
  </div>
  <TheFooter></TheFooter>
</template>

<script setup>
import TheFooter from './components/blocks/TheFooter.vue'
import TheHeader from './components/blocks/TheHeader.vue'
import NavigationMenu from './components/NavigationMenu.vue'
</script>

<style scoped>
.test {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
  margin: 0 auto;
  max-width: 1160px;
  padding: 40px 10px;
}
.navcon {
  display: flex;
  justify-content: space-between;
  gap: 30px;
  flex-wrap: wrap;
}
/* @media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
