<template>
  <LoaderWrapper>
    <FormWrapper @submit="handleSubmit">
      <InputGroup>
        <CustomInput
          name="OD"
          label="Наружный диаметр обсадной колонны или диаметр открытого ствола (мм)"
          placeholder="0.0"
        />
        <CustomInput
          name="ID"
          label="Внутренний диаметр бурильной колонны (мм)"
          placeholder="0.0"
        />
      </InputGroup>
      <InputGroup>
        <CustomInput name="Lsec" label="Длина секции (м)" placeholder="0.0" />
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
import { getFormNumber } from '@/utils/getFormNumber.js'
import { calculateWellVolume } from '@/api/wellVolume.js'
import { ref } from 'vue'

const result = ref(null)

//Почему есть необязательное поле и что в нем должно быть
/** @param {FormData} form */
const handleSubmit = async (form) => {
  const OD = getFormNumber(form.get('OD'))
  const ID = getFormNumber(form.get('ID'))
  const Lsec = getFormNumber(form.get('Lsec'))

  if (ID !== undefined && Lsec !== undefined) {
    result.value = await calculateWellVolume(OD, ID, Lsec)
  } else {
    result.value = null
    console.log('Форма не заполнена')
  }
}
</script>
