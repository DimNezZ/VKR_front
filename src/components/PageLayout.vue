<template>
  <TheHeader />
  <TheContainer>
    <ImformationField>{{ information }}</ImformationField>
    <slot></slot>
    <ImformationField title="Пояснение к расчету:">
      <LatexRender v-if="annotation" :latex="annotation" />
    </ImformationField>
  </TheContainer>
  <TheFooter />
</template>

<script setup>
import TheHeader from '@/components/blocks/TheHeader.vue'
import TheFooter from '@/components/blocks/TheFooter.vue'
import TheContainer from '@/components/TheContainer.vue'
import ImformationField from '@/components/ImformationField.vue'
import LatexRender from '@/components/LatexRender.vue'

defineProps({
  information: {
    type: String,
    defualt: '',
  },
  annotation: {
    type: String,
  },
})
</script>
