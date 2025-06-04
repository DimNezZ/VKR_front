<template>
  <LoaderWrapper>
    <FormWrapper v-model="model" @submit="handleSubmit">
      <InputGroup>
        <CustomInput
          name="densityChange"
          label="Изменение плотности при добавлении раствора (м³)"
          placeholder="0.0"
          v-model="model.densityChange"
          :error="errors.densityChange"
        />
        <CustomInput
          name="mortarToAddedDensity"
          label="Плотность добавляемого раствора (г/см³)"
          placeholder="0.0"
          v-model="model.mortarToAddedDensity"
          :error="errors.mortarToAddedDensity"
        />
      </InputGroup>
      <InputGroup>
        <CustomInput
          name="mortarVolume"
          label="Исходный объём раствора (м³)"
          placeholder="0"
          v-model="model.mortarVolume"
          :error="errors.mortarVolume"
        />
        <CustomInput
          name="mortarDensity"
          label="Плотность исходного раствора (г/см³)"
          placeholder="0.0"
          v-model="model.mortarDensity"
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
import { ref } from 'vue'
import { z } from 'zod/v4'
import { useValidation } from '@/utils/useValidation.js'

const result = ref(null)

const model = ref({
  densityChange: '',
  mortarToAddedDensity: '',
  mortarVolume: '',
  mortarDensity: '',
})
const schema = z.object({
  densityChange: z.coerce.number().positive('Обязательное поле'),
  mortarToAddedDensity: z.coerce.number().positive('Обязательное поле'),
  mortarVolume: z.coerce.number().positive('Обязательное поле'),
  mortarDensity: z.coerce.number().positive('Обязательное поле'),
})

const { errors, getData, validate } = useValidation(schema, model)

const handleSubmit = async () => {
  if (!validate()) {
    result.value = null
    console.log('Форма не заполнена')

    return
  }

  const { densityChange, mortarToAddedDensity, mortarVolume, mortarDensity } = getData()
  result.value = await calculateChangingDensityByAddingMortar(
    densityChange,
    mortarToAddedDensity,
    mortarVolume,
    mortarDensity,
  )
}
</script>
densityChange, mortarToAddedDensity, mortarVolume, mortarDensity,
