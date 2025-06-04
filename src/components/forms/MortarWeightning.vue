<template>
  <LoaderWrapper>
    <FormWrapper v-model="model" @submit="handleSubmit">
      <InputGroup>
        <CustomInput
          name="requiredDensity"
          label="Необходимая плотность при утяжелении раствора (г/см³)"
          placeholder="0.0"
          v-model="model.requiredDensity"
          :error="errors.requiredDensity"
        />
        <CustomInput
          name="mortarVolume"
          label="Исходный объём раствора (м³)"
          placeholder="0.0"
          v-model="model.mortarVolume"
          :error="errors.mortarVolume"
        />
      </InputGroup>
      <InputGroup>
        <CustomInput
          name="mortarDensity"
          label="Плотность исходного раствора (г/см³)"
          placeholder="0.0"
          v-model="model.mortarDensity"
          :error="errors.mortarDensity"
        />
        <CustomInput
          name="weightingAgentSpecificGravity"
          label="Удельный вес утяжелителя (г/см³)"
          placeholder="0.0"
          v-model="model.weightingAgentSpecificGravity"
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
import { ref } from 'vue'
import { z } from 'zod/v4'
import { useValidation } from '@/utils/useValidation.js'

const result = ref(null)

const model = ref({
  requiredDensity: '',
  mortarVolume: '',
  mortarDensity: '',
  weightingAgentSpecificGravity: '',
})
const schema = z.object({
  requiredDensity: z.coerce.number().positive('Обязательное поле'),
  mortarVolume: z.coerce.number().positive('Обязательное поле'),
  mortarDensity: z.coerce.number().positive('Обязательное поле'),
  weightingAgentSpecificGravity: z.coerce.number().positive('Обязательное поле'),
})

const { errors, getData, validate } = useValidation(schema, model)

const handleSubmit = async () => {
  if (!validate()) {
    result.value = null
    console.log('Форма не заполнена')

    return
  }

  const { requiredDensity, mortarVolume, mortarDensity, weightingAgentSpecificGravity } = getData()
  result.value = await calculateMortarWeightning(
    requiredDensity,
    mortarVolume,
    mortarDensity,
    weightingAgentSpecificGravity,
  )
}
</script>
