<template>
  <PageLayout :information="methodInfo?.information" :annotation="methodInfo?.latex">
    <MortarWeightning />
  </PageLayout>
</template>

<script setup>
import MortarWeightning from '@/components/forms/MortarWeightning.vue'
import PageLayout from '@/components/PageLayout.vue'
import { getMethodInfo } from '@/api/methodInfo.js'
import { onMounted, ref } from 'vue'

const methodInfo = ref(null)

onMounted(async () => {
  try {
    methodInfo.value = await getMethodInfo('mortar-weightning')
  } catch (error) {
    console.error('Ошибка загрузки:', error)
  }
})
</script>
