<template>
  <TheHeader></TheHeader>
  <TheContainer>
    <LoaderWrapper>
      <CementBridgeInstallationOnBalance />
    </LoaderWrapper>
  </TheContainer>
  <TheFooter></TheFooter>
</template>

<script setup>
import TheHeader from '@/components/blocks/TheHeader.vue'
import TheFooter from '@/components/blocks/TheFooter.vue'
import TheContainer from '@/components/TheContainer.vue'
import CementBridgeInstallationOnBalance from '@/components/forms/CementBridgeInstallationOnBalance.vue'
import LoaderWrapper from '@/components/LoaderWrapper.vue'
</script>
