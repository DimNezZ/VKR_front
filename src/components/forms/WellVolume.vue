<template>
  <LoaderWrapper>
    <FormWrapper @submit="handleSubmit">
      <InputGroup>
        <CustomInput
          name="OD"
          label="Наружный диаметр обсадной колонны или диаметр открытого ствола (мм)"
          placeholder="0.0"
          v-model="form.OD"
          :error="errors.OD"
        />
        <CustomInput
          name="ID"
          label="Внутренний диаметр бурильной колонны (мм)"
          placeholder="0.0"
          v-model="form.ID"
          :error="errors.ID"
        />
      </InputGroup>
      <InputGroup>
        <CustomInput
          name="Lsec"
          label="Длина секции (м)"
          placeholder="0.0"
          v-model="form.Lsec"
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
import { reactive, ref } from 'vue'
import { numberString } from '@/utils/zodParse.js'
import { z } from 'zod'

const result = ref(null)
const form = reactive({
  OD: '',
  ID: '',
  Lsec: '',
})
const errors = reactive({
  OD: '',
  ID: '',
  Lsec: '',
})

const schema = z.object({
  OD: numberString(),
  ID: numberString(),
  Lsec: numberString(),
})

//Почему есть необязательное поле и что в нем должно быть
/** @param {FormData} form */
const handleSubmit = async (form) => {
  errors.OD = ''
  errors.ID = ''
  errors.Lsec = ''
  const formDataObj = Object.fromEntries(form.entries())
  const parsed = schema.safeParse(formDataObj)

  if (!parsed.success) {
    for (const issue of parsed.error.issues) {
      errors[issue.path[0]] = issue.message
    }
    result.value = null
    return
  }

  const { OD, ID, Lsec } = parsed.data

  if (ID !== undefined && Lsec !== undefined) {
    result.value = await calculateWellVolume(OD, ID, Lsec)
  } else {
    result.value = null
    console.log('Форма не заполнена')
  }
}
</script>
