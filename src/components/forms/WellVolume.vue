<template>
  <FormWrapper @submit="handleSubmit">
    <InputGroup>
      <CustomInput
        name="OD"
        label="Наружный диаметр обсадной колонны или диаметр открытого ствола (мм)"
        placeholder="0.0"
      />
      <CustomInput name="ID" label="Внутренний диаметр бурильной колонны (мм)" placeholder="0.0" />
    </InputGroup>
    <InputGroup>
      <CustomInput name="Lsec" label="Длина секции (м)" placeholder="0.0" />
    </InputGroup>
  </FormWrapper>
</template>

<script setup>
import FormWrapper from '@/components/FormWrapper.vue'
import InputGroup from '@/components/InputGroup.vue'
import CustomInput from '@/components/CustomInput.vue'
import { getFormNumber } from '@/utils/getFormNumber.js'
import { calculateWellVolume } from '@/api/wellVolume.js'

//Почему есть необязательное поле и что в нем должно быть
/** @param {FormData} form */
const handleSubmit = async (form) => {
  const OD = getFormNumber(form.get('OD'))
  const ID = getFormNumber(form.get('ID'))
  const Lsec = getFormNumber(form.get('Lsec'))

  if (ID !== undefined && Lsec !== undefined) {
    const response = await calculateWellVolume(OD, ID, Lsec)
    console.log(response)
  } else {
    console.log('Форма не заполнена')
  }
}
</script>
