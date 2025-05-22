<template>
  <LoaderWrapper>
    <FormWrapper @submit="handleSubmit">
      <InputGroup>
        <CustomInput
          name="drillPipeLength"
          label="Длина бурильных труб или насосно-компрессорных труб (м)"
          placeholder="0.0"
        />
        <CustomInput
          name="cementBridgeHeight"
          label="Длина цементного моста (м)"
          placeholder="0.0"
        />
      </InputGroup>
      <InputGroup>
        <CustomInput
          name="runningVolumeCasingString"
          label="Погонный объём открытого ствола или обсадной колонны (м³/м)"
          placeholder="0.0"
        />
        <CustomInput
          name="runningVolumeInnerPipe"
          label="Погонный объём внутренней полости трубы (м³/м)"
          placeholder="0.0"
        />
        <CustomInput
          name="runningCapacityRing"
          label="Погонная вместимость кольца между скважиной и колонной (м³/м)"
          placeholder="0.0"
        />
      </InputGroup>
      <InputGroup>
        <CustomInput
          name="excessVolume"
          label="Избыточный объём для работы по цементированию (%)"
          placeholder="0"
        />
        <CustomInput
          name="buffer1Volume"
          label="Объём буфера, закачиваемый перед цементным мостом (м³)"
          placeholder="0.0"
        />
      </InputGroup>
    </FormWrapper>
  </LoaderWrapper>

  <ResultWrapper v-if="result">
    <InputGroup>
      <TextField
        caption="Количество цемента, требующееся для заданной длины цементного моста:"
        unit="м³"
      >
        {{ result.requiredCementCount }}</TextField
      >
      <TextField caption="Объём буфера, закачиваемый после цементного моста:" unit="м³">
        {{ result.buffer2Volume }}</TextField
      >
      <TextField caption="Объём продавки, требующийся для размещения моста:" unit="бар">
        {{ result.salesVolume }}</TextField
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
import { getFormNumber } from '@/utils/getFormNumber.js'
import { calculateCementBridgeInstallationOnBalance } from '@/api/cementBridgeInstallationOnBalance.js'
import { ref } from 'vue'

const result = ref()

/** @param {FormData} form */
const handleSubmit = async (form) => {
  const cementBridgeHeight = getFormNumber(form.get('cementBridgeHeight'))
  const runningVolumeCasingString = getFormNumber(form.get('runningVolumeCasingString'))
  const excessVolume = getFormNumber(form.get('excessVolume'))
  const buffer1Volume = getFormNumber(form.get('buffer1Volume'))
  const runningCapacityRing = getFormNumber(form.get('runningCapacityRing'))
  const runningVolumeInnerPipe = getFormNumber(form.get('runningVolumeInnerPipe'))
  const drillPipeLength = getFormNumber(form.get('drillPipeLength'))

  if (
    cementBridgeHeight !== undefined &&
    runningVolumeCasingString !== undefined &&
    excessVolume !== undefined &&
    buffer1Volume !== undefined &&
    runningCapacityRing !== undefined &&
    runningVolumeInnerPipe !== undefined &&
    drillPipeLength !== undefined
  ) {
    result.value = await calculateCementBridgeInstallationOnBalance(
      cementBridgeHeight,
      runningVolumeCasingString,
      excessVolume,
      buffer1Volume,
      runningCapacityRing,
      runningVolumeInnerPipe,
      drillPipeLength,
    )
  } else {
    result.value = null
    console.log('Форма не заполнена')
  }
}
</script>
