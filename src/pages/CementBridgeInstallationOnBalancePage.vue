<template>
  <PageLayout :information="methodInfo?.information" :annotation="methodInfo?.latex">
    <CementBridgeInstallationOnBalance />
  </PageLayout>
</template>

<script setup>
import CementBridgeInstallationOnBalance from '@/components/forms/CementBridgeInstallationOnBalance.vue'
import PageLayout from '@/components/PageLayout.vue'
import { getMethodInfo } from '@/api/methodInfo.js'
import { onMounted, ref } from 'vue'

const methodInfo = ref(null)

onMounted(async () => {
  try {
    methodInfo.value = await getMethodInfo('cement-bridge-installation-on-balance')
  } catch (error) {
    console.error('Ошибка загрузки:', error)
  }
})
</script>
