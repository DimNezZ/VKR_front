<template>
  <LoaderWrapper>
    <FormWrapper @submit="handleSubmit">
      <InputGroup>
        <CustomInput
          name="requiredDensity"
          label="Необходимая плотность при смешивании растворов (г/см³)"
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
          name="mortarToAddedDensity"
          label="Плотность добавляемого раствора (г/см³)"
          placeholder="0.0"
        />
      </InputGroup>
    </FormWrapper>
  </LoaderWrapper>

  <ResultWrapper v-if="result">
    <InputGroup>
      <TextField caption="Необходимо добавить раствора:" unit="м³">
        {{ result.mortarToAdd }}</TextField
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
import { calculateMixingMortars } from '@/api/mixingMortars.js'
import { ref } from 'vue'

const result = ref(null)

/** @param {FormData} form */
const handleSubmit = async (form) => {
  const requiredDensity = getFormNumber(form.get('requiredDensity'))
  const mortarVolume = getFormNumber(form.get('mortarVolume'))
  const mortarDensity = getFormNumber(form.get('mortarDensity'))
  const mortarToAddedDensity = getFormNumber(form.get('mortarToAddedDensity'))

  if (
    requiredDensity !== undefined &&
    mortarVolume !== undefined &&
    mortarDensity !== undefined &&
    mortarToAddedDensity !== undefined
  ) {
    result.value = await calculateMixingMortars(
      requiredDensity,
      mortarVolume,
      mortarDensity,
      mortarToAddedDensity,
    )
  } else {
    console.log('Форма не заполнена')
  }
}
</script>
