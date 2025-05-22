<template>
  <LoaderWrapper>
    <FormWrapper @submit="handleSubmit">
      <InputGroup>
        <CustomInput
          name="requiredDensity"
          label="Необходимая плотность при утяжелении раствора (г/см³)"
          placeholder="0.0"
        />
        <CustomInput name="mortarVolume" label="Исходный объём раствора (м³)" placeholder="0.0" />
      </InputGroup>
      <InputGroup>
        <CustomInput
          name="mortarDensity"
          label="Плотность исходного раствора (г/см³)"
          placeholder="0.0"
        />
        <CustomInput
          name="weightingAgentSpecificGravity"
          label="Удельный вес утяжелителя (г/см³)"
          placeholder="0.0"
        />
      </InputGroup>
    </FormWrapper>
  </LoaderWrapper>

  <ResultWrapper v-if="result">
    <InputGroup>
      <TextField caption="Необходимое количество утяжелителя:" unit="кг">
        {{ result.weightingAgentWeight }}</TextField
      >
      <TextField caption="Конечный объём раствора:" unit="м³">
        {{ result.finalMortarVolume }}</TextField
      >
    </InputGroup>
  </ResultWrapper>
</template>

<script setup>
import FormWrapper from '@/components/FormWrapper.vue'
import InputGroup from '@/components/InputGroup.vue'
import CustomInput from '@/components/CustomInput.vue'
import LoaderWrapper from '../LoaderWrapper.vue'
import ResultWrapper from '../ResultWrapper.vue'
import TextField from '../TextField.vue'
import { getFormNumber } from '@/utils/getFormNumber.js'
import { calculateMortarWeightning } from '@/api/mortarWeightning.js'
import { ref } from 'vue'

const result = ref(null)

/** @param {FormData} form */
const handleSubmit = async (form) => {
  const requiredDensity = getFormNumber(form.get('requiredDensity'))
  const mortarVolume = getFormNumber(form.get('mortarVolume'))
  const mortarDensity = getFormNumber(form.get('mortarDensity'))
  const weightingAgentSpecificGravity = getFormNumber(form.get('weightingAgentSpecificGravity'))

  if (
    requiredDensity !== undefined &&
    mortarVolume !== undefined &&
    mortarDensity !== undefined &&
    weightingAgentSpecificGravity !== undefined
  ) {
    result.value = await calculateMortarWeightning(
      requiredDensity,
      mortarVolume,
      mortarDensity,
      weightingAgentSpecificGravity,
    )
  } else {
    result.value = null
    console.log('Форма не заполнена')
  }
}
</script>
