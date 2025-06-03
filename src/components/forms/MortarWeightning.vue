<template>
  <LoaderWrapper>
    <FormWrapper @submit="handleSubmit">
      <InputGroup>
        <CustomInput
          name="requiredDensity"
          label="Необходимая плотность при утяжелении раствора (г/см³)"
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
          name="weightingAgentSpecificGravity"
          label="Удельный вес утяжелителя (г/см³)"
          placeholder="0.0"
          v-model="form.weightingAgentSpecificGravity"
          :error="errors.weightingAgentSpecificGravity"
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
import { calculateMortarWeightning } from '@/api/mortarWeightning.js'
import { reactive, ref } from 'vue'
import { numberString } from '@/utils/zodParse.js'
import { z } from 'zod'

const result = ref(null)
const form = reactive({
  requiredDensity: '',
  mortarVolume: '',
  mortarDensity: '',
  weightingAgentSpecificGravity: '',
})
const errors = reactive({
  requiredDensity: '',
  mortarVolume: '',
  mortarDensity: '',
  weightingAgentSpecificGravity: '',
})

const schema = z.object({
  requiredDensity: numberString(),
  mortarVolume: numberString(),
  mortarDensity: numberString(),
  weightingAgentSpecificGravity: numberString(),
})

/** @param {FormData} form */
const handleSubmit = async (form) => {
  errors.requiredDensity = ''
  errors.mortarVolume = ''
  errors.mortarDensity = ''
  errors.weightingAgentSpecificGravity = ''
  const formDataObj = Object.fromEntries(form.entries())
  const parsed = schema.safeParse(formDataObj)

  if (!parsed.success) {
    for (const issue of parsed.error.issues) {
      errors[issue.path[0]] = issue.message
    }
    result.value = null
    return
  }

  const { requiredDensity, mortarVolume, mortarDensity, weightingAgentSpecificGravity } =
    parsed.data

  result.value = await calculateMortarWeightning(
    requiredDensity,
    mortarVolume,
    mortarDensity,
    weightingAgentSpecificGravity,
  )
}
</script>
