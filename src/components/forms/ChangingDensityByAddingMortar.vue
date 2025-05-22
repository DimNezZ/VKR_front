<template>
  <LoaderWrapper>
    <FormWrapper @submit="handleSubmit">
      <InputGroup>
        <CustomInput
          name="densityChange"
          label="Изменение плотности при добавлении раствора (м³)"
          placeholder="0.0"
        />
        <CustomInput
          name="mortarToAddedDensity"
          label="Плотность добавляемого раствора (г/см³)"
          placeholder="0.0"
        />
      </InputGroup>
      <InputGroup>
        <CustomInput name="mortarVolume" label="Исходный объём раствора (м³)" placeholder="0" />
        <CustomInput
          name="mortarDensity"
          label="Плотность исходного раствора (г/см³)"
          placeholder="0.0"
        />
      </InputGroup>
    </FormWrapper>
  </LoaderWrapper>

  <ResultWrapper v-if="result">
    <InputGroup>
      <TextField caption="Конечная плотность раствора:" unit="г/см³">
        {{ result.finalMortarVolume }}</TextField
      >
      <TextField caption="Конечный объём раствора:" unit="м³">
        {{ result.finalMortarDensity }}</TextField
      >
    </InputGroup>
  </ResultWrapper>
</template>

<script setup>
import FormWrapper from '@/components/FormWrapper.vue'
import InputGroup from '@/components/InputGroup.vue'
import CustomInput from '@/components/CustomInput.vue'
import ResultWrapper from '../ResultWrapper.vue'
import LoaderWrapper from '../LoaderWrapper.vue'
import TextField from '../TextField.vue'
import { getFormNumber } from '@/utils/getFormNumber.js'
import { calculateChangingDensityByAddingMortar } from '@/api/changingDensityByAddingMortar.js'
import { ref } from 'vue'

const result = ref(null)

/** @param {FormData} form */
const handleSubmit = async (form) => {
  const densityChange = getFormNumber(form.get('densityChange'))
  const mortarVolume = getFormNumber(form.get('mortarVolume'))
  const mortarDensity = getFormNumber(form.get('mortarDensity'))
  const mortarToAddedDensity = getFormNumber(form.get('mortarToAddedDensity'))

  if (
    densityChange !== undefined &&
    mortarToAddedDensity !== undefined &&
    mortarVolume !== undefined &&
    mortarDensity !== undefined
  ) {
    result.value = await calculateChangingDensityByAddingMortar(
      densityChange,
      mortarToAddedDensity,
      mortarVolume,
      mortarDensity,
    )
  } else {
    result.value = null
    console.log('Форма не заполнена')
  }
}
</script>
