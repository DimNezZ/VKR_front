<template>
  <LoaderWrapper>
    <FormWrapper v-model="model" @submit="handleSubmit">
      <InputGroup>
        <CustomInput
          name="requiredDensity"
          label="Необходимая плотность при смешивании растворов (г/см³)"
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
          name="mortarToAddedDensity"
          label="Плотность добавляемого раствора (г/см³)"
          placeholder="0.0"
          v-model="model.mortarToAddedDensity"
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
import { z } from 'zod/v4'
import { useValidation } from '@/utils/useValidation.js'
import { ref } from 'vue'

const result = ref(null)

const model = ref({
  requiredDensity: '',
  mortarVolume: '',
  mortarDensity: '',
  mortarToAddedDensity: '',
})
const schema = z.object({
  requiredDensity: z.coerce.number().positive('Обязательное поле'),
  mortarVolume: z.coerce.number().positive('Обязательное поле'),
  mortarDensity: z.coerce.number().positive('Обязательное поле'),
  mortarToAddedDensity: z.coerce.number().positive('Обязательное поле'),
})

const { errors, getData, validate } = useValidation(schema, model)

const handleSubmit = async () => {
  if (!validate()) {
    result.value = null
    console.log('Форма не заполнена')

    return
  }

  const { requiredDensity, mortarVolume, mortarDensity, mortarToAddedDensity } = getData()
  result.value = await calculateMixingMortars(
    requiredDensity,
    mortarVolume,
    mortarDensity,
    mortarToAddedDensity,
  )
}
</script>
