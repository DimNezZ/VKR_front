<template>
  <PageLayout :information="methodInfo?.information" :annotation="methodInfo?.latex">
    <WellVolume />
  </PageLayout>
</template>

<script setup>
import WellVolume from '@/components/forms/WellVolume.vue'
import PageLayout from '@/components/PageLayout.vue'
import { getMethodInfo } from '@/api/methodInfo.js'
import { onMounted, ref } from 'vue'

const methodInfo = ref(null)

onMounted(async () => {
  try {
    methodInfo.value = await getMethodInfo('well-volume')
  } catch (error) {
    console.error('Ошибка загрузки:', error)
  }
})
</script>
