<template>
  <LoaderWrapper>
    <FormWrapper v-model="model" @submit="handleSubmit">
      <InputGroup>
        <CustomInput
          name="OD"
          label="Наружный диаметр обсадной колонны или диаметр открытого ствола (мм)"
          placeholder="0.0"
          v-model="model.OD"
          :error="errors.OD"
        />
        <CustomInput
          name="ID"
          label="Внутренний диаметр бурильной колонны (мм)"
          placeholder="0.0"
          v-model="model.ID"
          :error="errors.ID"
        />
      </InputGroup>
      <InputGroup>
        <CustomInput
          name="Lsec"
          label="Длина секции (м)"
          placeholder="0.0"
          v-model="model.Lsec"
          :error="errors.Lsec"
        />
      </InputGroup>
    </FormWrapper>
  </LoaderWrapper>

  <ResultWrapper v-if="result">
    <InputGroup>
      <TextField caption="Вместимость:" unit="л/м"> {{ result.capacity.liters }}</TextField>
      <TextField caption="Вместимость:" unit="м³/м"> {{ result.capacity.meters }}</TextField>
    </InputGroup>
    <InputGroup>
      <TextField caption="Объём секции:" unit="м³"> {{ result.volumeSec }}</TextField>
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
import { calculateWellVolume } from '@/api/wellVolume.js'
import { ref } from 'vue'
import { z } from 'zod/v4'
import { useValidation } from '@/utils/useValidation.js'

const result = ref(null)
const model = ref({
  OD: '',
  ID: '',
  Lsec: '',
})
const schema = z.object({
  OD: z.coerce.number().positive('Обязательное поле'),
  ID: z.coerce.number().positive('Обязательное поле'),
  Lsec: z.coerce.number().positive('Обязательное поле'),
})

const { errors, getData, validate } = useValidation(schema, model)

//Почему есть необязательное поле и что в нем должно быть
const handleSubmit = async () => {
  if (!validate()) {
    result.value = null
    console.log('Форма не заполнена')

    return
  }

  const { OD, ID, Lsec } = getData()
  result.value = await calculateWellVolume(OD, ID, Lsec)
}
</script>
