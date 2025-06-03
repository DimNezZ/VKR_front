<template>
  <LoaderWrapper>
    <FormWrapper @submit="handleSubmit">
      <InputGroup>
        <CustomInput
          name="requiredDensity"
          label="Необходимая плотность при добавлении раствора (г/см³)"
          placeholder="0.0"
          v-model="form.requiredDensity"
          :error="errors.requiredDensity"
        />
      </InputGroup>
      <InputGroup>
        <CustomInput
          name="wellMortarVolume"
          label="Объём раствора в скважине (50 м³)"
          placeholder="0.0"
          v-model="form.wellMortarVolume"
          :error="errors.wellMortarVolume"
        />
        <CustomInput
          name="mortarDensity"
          label="Плотность исходного раствора (г/см³)"
          placeholder="0.0"
          v-model="form.mortarDensity"
          :error="errors.mortarDensity"
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
import { calculateWaterQuantityToDecreaseMortarDensity } from '@/api/waterQuantityToDecreaseMortarDensity.js'
import { reactive, ref } from 'vue'
import { numberString } from '@/utils/zodParse.js'
import { z } from 'zod'

const result = ref(null)
const form = reactive({
  requiredDensity: '',
  wellMortarVolume: '',
  mortarDensity: '',
})
const errors = reactive({
  requiredDensity: '',
  wellMortarVolume: '',
  mortarDensity: '',
})

const schema = z.object({
  requiredDensity: numberString(),
  wellMortarVolume: numberString(),
  mortarDensity: numberString(),
})

/** @param {FormData} form */
const handleSubmit = async (form) => {
  errors.requiredDensity = ''
  errors.wellMortarVolume = ''
  errors.mortarDensity = ''
  const formDataObj = Object.fromEntries(form.entries())
  const parsed = schema.safeParse(formDataObj)

  if (!parsed.success) {
    for (const issue of parsed.error.issues) {
      errors[issue.path[0]] = issue.message
    }
    result.value = null
    return
  }

  const { requiredDensity, wellMortarVolume, mortarDensity } = parsed.data

  result.value = await calculateWaterQuantityToDecreaseMortarDensity(
    requiredDensity,
    wellMortarVolume,
    mortarDensity,
  )
}
</script>
