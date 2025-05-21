<template>
  <TheHeader></TheHeader>
  <TheContainer>
    <LoaderWrapper>
      <WaterQuantityToDecreaseMortarDensity />
    </LoaderWrapper>
  </TheContainer>
  <TheFooter></TheFooter>
</template>

<script setup>
import TheHeader from '@/components/blocks/TheHeader.vue'
import TheFooter from '@/components/blocks/TheFooter.vue'
import TheContainer from '@/components/TheContainer.vue'
import WaterQuantityToDecreaseMortarDensity from '@/components/forms/WaterQuantityToDecreaseMortarDensity.vue'
import LoaderWrapper from '@/components/LoaderWrapper.vue'
</script>
