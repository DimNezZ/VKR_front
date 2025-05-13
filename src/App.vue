<template>
  <TheHeader></TheHeader>
  <div class="test">
    <NavigationMenu></NavigationMenu>
    <FormWrapper
      ><InputGroup variant="bordered">
        <CustomInput label="asdasd"></CustomInput>
        <CustomInput label="asdaasdasdasdsd"></CustomInput>
        <CustomInput label="asdasadasasdassddasdsd"></CustomInput> </InputGroup
    ></FormWrapper>
  </div>
  <TheFooter></TheFooter>
</template>

<script setup>
import TheFooter from './components/blocks/TheFooter.vue'
import TheHeader from './components/blocks/TheHeader.vue'
import FormWrapper from './components/FormWrapper.vue'
import InputGroup from './components/InputGroup.vue'
import CustomInput from './components/CustomInput.vue'
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
