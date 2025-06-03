<template>
  <LoaderWrapper>
    <FormWrapper @submit="handleSubmit">
      <InputGroup>
        <CustomInput
          name="densityChange"
          label="Изменение плотности при добавлении раствора (м³)"
          placeholder="0.0"
          v-model="form.densityChange"
          :error="errors.densityChange"
        />
        <CustomInput
          name="mortarToAddedDensity"
          label="Плотность добавляемого раствора (г/см³)"
          placeholder="0.0"
          v-model="form.mortarToAddedDensity"
          :error="errors.mortarToAddedDensity"
        />
      </InputGroup>
      <InputGroup>
        <CustomInput
          name="mortarVolume"
          label="Исходный объём раствора (м³)"
          placeholder="0"
          v-model="form.mortarVolume"
          :error="errors.mortarVolume"
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
import { calculateChangingDensityByAddingMortar } from '@/api/changingDensityByAddingMortar.js'
import { reactive, ref } from 'vue'
import { numberString } from '@/utils/zodParse.js'
import { z } from 'zod'

const result = ref(null)
const form = reactive({
  densityChange: '',
  mortarToAddedDensity: '',
  mortarVolume: '',
  mortarDensity: '',
})
const errors = reactive({
  densityChange: '',
  mortarToAddedDensity: '',
  mortarVolume: '',
  mortarDensity: '',
})

const schema = z.object({
  densityChange: numberString(),
  mortarToAddedDensity: numberString(),
  mortarVolume: numberString(),
  mortarDensity: numberString(),
})

/** @param {FormData} form */
const handleSubmit = async (form) => {
  errors.densityChange = ''
  errors.mortarToAddedDensity = ''
  errors.mortarVolume = ''
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

  const { densityChange, mortarToAddedDensity, mortarVolume, mortarDensity } = parsed.data

  result.value = await calculateChangingDensityByAddingMortar(
    densityChange,
    mortarToAddedDensity,
    mortarVolume,
    mortarDensity,
  )
}
</script>
