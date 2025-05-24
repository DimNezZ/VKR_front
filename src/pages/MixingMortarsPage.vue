<template>
  <PageLayout :information="methodInfo?.information" :annotation="methodInfo?.latex">
    <MixingMortars />
  </PageLayout>
</template>

<script setup>
import MixingMortars from '@/components/forms/MixingMortars.vue'
import PageLayout from '@/components/PageLayout.vue'
import { getMethodInfo } from '@/api/methodInfo.js'
import { onMounted, ref } from 'vue'

const methodInfo = ref(null)

onMounted(async () => {
  try {
    methodInfo.value = await getMethodInfo('mixing-mortars')
  } catch (error) {
    console.error('Ошибка загрузки:', error)
  }
})
</script>
