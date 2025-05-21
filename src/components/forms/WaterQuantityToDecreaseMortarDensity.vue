<template>
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
</template>

<script setup>
import FormWrapper from '@/components/FormWrapper.vue'
import InputGroup from '@/components/InputGroup.vue'
import CustomInput from '@/components/CustomInput.vue'
import { getFormNumber } from '@/utils/getFormNumber.js'
import { calculateWaterQuantityToDecreaseMortarDensity } from '@/api/waterQuantityToDecreaseMortarDensity.js'

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
    const response = await calculateWaterQuantityToDecreaseMortarDensity(
      requiredDensity,
      wellMortarVolume,
      mortarDensity,
    )
    console.log(response)
  } else {
    console.log('Форма не заполнена')
  }
}
</script>
