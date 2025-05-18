<template>
  <TheHeader></TheHeader>
  <TheContainer>
    <LoaderWrapper>
      <MixingMortars></MixingMortars>
    </LoaderWrapper>
  </TheContainer>
  <TheFooter></TheFooter>
</template>

<script setup>
import TheHeader from '@/components/blocks/TheHeader.vue'
import TheFooter from '@/components/blocks/TheFooter.vue'
import TheContainer from '@/components/TheContainer.vue'
import MixingMortars from '@/components/forms/MixingMortars.vue'
import LoaderWrapper from '@/components/LoaderWrapper.vue'
</script>
