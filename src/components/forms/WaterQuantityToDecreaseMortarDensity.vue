<template>
  <LoaderWrapper>
    <FormWrapper @submit="handleSubmit">
      <InputGroup>
        <CustomInput
          name="requiredDensity"
          label="Необходимая плотность при добавлении раствора (г/см³)"
          placeholder="0.0"
        />
      </InputGroup>
      <InputGroup>
        <CustomInput
          name="wellMortarVolume"
          label="Объём раствора в скважине (50 м³)"
          placeholder="0.0"
        />
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
      <TextField caption="Объём воды:" unit="м³"> {{ result.waterVolume }}</TextField>
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
import { calculateWaterQuantityToDecreaseMortarDensity } from '@/api/waterQuantityToDecreaseMortarDensity.js'
import { ref } from 'vue'

const result = ref(null)

/** @param {FormData} form */
const handleSubmit = async (form) => {
  const requiredDensity = getFormNumber(form.get('requiredDensity'))
  const wellMortarVolume = getFormNumber(form.get('wellMortarVolume'))
  const mortarDensity = getFormNumber(form.get('mortarDensity'))

  if (
    requiredDensity !== undefined &&
    wellMortarVolume !== undefined &&
    mortarDensity !== undefined
  ) {
    result.value = await calculateWaterQuantityToDecreaseMortarDensity(
      requiredDensity,
      wellMortarVolume,
      mortarDensity,
    )
  } else {
    result.value = null
    console.log('Форма не заполнена')
  }
}
</script>
