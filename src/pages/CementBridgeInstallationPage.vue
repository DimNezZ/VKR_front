<template>
  <PageLayout :information="methodInfo?.information" :annotation="methodInfo?.latex">
    <CementBridgeInstallation />
  </PageLayout>
</template>

<script setup>
import CementBridgeInstallation from '@/components/forms/CementBridgeInstallation.vue'
import PageLayout from '@/components/PageLayout.vue'
import { getMethodInfo } from '@/api/methodInfo.js'
import { onMounted, ref } from 'vue'

const methodInfo = ref(null)

onMounted(async () => {
  try {
    methodInfo.value = await getMethodInfo('cement-bridge-installation')
  } catch (error) {
    console.error('Ошибка загрузки:', error)
  }
})
</script>
