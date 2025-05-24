<template>
  <PageLayout :information="methodInfo?.information" :annotation="methodInfo?.latex">
    <GnpvList />
  </PageLayout>
</template>

<script setup>
import GnpvList from '@/components/forms/GnpvList.vue'
import PageLayout from '@/components/PageLayout.vue'
import { getMethodInfo } from '@/api/methodInfo.js'
import { onMounted, ref } from 'vue'

const methodInfo = ref(null)

onMounted(async () => {
  try {
    methodInfo.value = await getMethodInfo('gnpv')
  } catch (error) {
    console.error('Ошибка загрузки:', error)
  }
})
</script>
