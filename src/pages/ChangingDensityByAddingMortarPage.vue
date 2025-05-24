<template>
  <PageLayout :information="methodInfo?.information" :annotation="methodInfo?.latex">
    <ChangingDensityByAddingMortar />
  </PageLayout>
</template>

<script setup>
import ChangingDensityByAddingMortar from '@/components/forms/ChangingDensityByAddingMortar.vue'
import PageLayout from '@/components/PageLayout.vue'
import { getMethodInfo } from '@/api/methodInfo.js'
import { onMounted, ref } from 'vue'

const methodInfo = ref(null)

onMounted(async () => {
  try {
    methodInfo.value = await getMethodInfo('changing-density-by-adding-mortar')
  } catch (error) {
    console.error('Ошибка загрузки:', error)
  }
})
</script>
