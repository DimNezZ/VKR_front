<template>
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
</template>

<script setup>
import FormWrapper from '@/components/FormWrapper.vue'
import InputGroup from '@/components/InputGroup.vue'
import CustomInput from '@/components/CustomInput.vue'
import { getFormNumber } from '@/utils/getFormNumber.js'
import { calculateMortarWeightning } from '@/api/mortarWeightning.js'

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
    const response = await calculateMortarWeightning(
      requiredDensity,
      mortarVolume,
      mortarDensity,
      weightingAgentSpecificGravity,
    )
    console.log(response)
  } else {
    console.log('Форма не заполнена')
  }
}
</script>
