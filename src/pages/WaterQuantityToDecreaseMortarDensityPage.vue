<template>
  <PageLayout :information="methodInfo?.information" :annotation="methodInfo?.latex">
    <WaterQuantityToDecreaseMortarDensity />
  </PageLayout>
</template>

<script setup>
import WaterQuantityToDecreaseMortarDensity from '@/components/forms/WaterQuantityToDecreaseMortarDensity.vue'
import PageLayout from '@/components/PageLayout.vue'
import { getMethodInfo } from '@/api/methodInfo.js'
import { onMounted, ref } from 'vue'

const methodInfo = ref(null)

onMounted(async () => {
  try {
    methodInfo.value = await getMethodInfo('water-quantity-to-decrease-mortar-density')
  } catch (error) {
    console.error('Ошибка загрузки:', error)
  }
})
</script>
