<template>
  <LoaderWrapper>
    <FormWrapper @submit="handleSubmit">
      <InputGroup>
        <CustomInput
          name="requiredDensity"
          label="Необходимая плотность при смешивании растворов (г/см³)"
          placeholder="0.0"
          v-model="form.requiredDensity"
          :error="errors.requiredDensity"
        />
        <CustomInput
          name="mortarVolume"
          label="Исходный объём раствора (м³)"
          placeholder="0.0"
          v-model="form.mortarVolume"
          :error="errors.mortarVolume"
        />
      </InputGroup>
      <InputGroup>
        <CustomInput
          name="mortarDensity"
          label="Плотность исходного раствора (г/см³)"
          placeholder="0.0"
          v-model="form.mortarDensity"
          :error="errors.mortarDensity"
        />
        <CustomInput
          name="mortarToAddedDensity"
          label="Плотность добавляемого раствора (г/см³)"
          placeholder="0.0"
          v-model="form.mortarToAddedDensity"
          :error="errors.mortarToAddedDensity"
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
import { calculateMixingMortars } from '@/api/mixingMortars.js'
import { reactive, ref } from 'vue'
import { numberString } from '@/utils/zodParse.js'
import { z } from 'zod'

const result = ref(null)
const form = reactive({
  requiredDensity: '',
  mortarVolume: '',
  mortarDensity: '',
  mortarToAddedDensity: '',
})
const errors = reactive({
  requiredDensity: '',
  mortarVolume: '',
  mortarDensity: '',
  mortarToAddedDensity: '',
})

const schema = z.object({
  requiredDensity: numberString(),
  mortarVolume: numberString(),
  mortarDensity: numberString(),
  mortarToAddedDensity: numberString(),
})

/** @param {FormData} form */
const handleSubmit = async (form) => {
  errors.requiredDensity = ''
  errors.mortarVolume = ''
  errors.mortarDensity = ''
  errors.mortarToAddedDensity = ''
  const formDataObj = Object.fromEntries(form.entries())
  const parsed = schema.safeParse(formDataObj)

  if (!parsed.success) {
    for (const issue of parsed.error.issues) {
      errors[issue.path[0]] = issue.message
    }
    result.value = null
    return
  }

  const { requiredDensity, mortarVolume, mortarDensity, mortarToAddedDensity } = parsed.data

  result.value = await calculateMixingMortars(
    requiredDensity,
    mortarVolume,
    mortarDensity,
    mortarToAddedDensity,
  )
}
</script>
