<template>
  <LoaderWrapper>
    <FormWrapper @submit="handleSubmit">
      <InputGroup>
        <CustomInput
          name="drillPipeLength"
          label="Длина бурильных труб или насосно-компрессорных труб (м)"
          placeholder="0.0"
          v-model="form.drillPipeLength"
          :error="errors.drillPipeLength"
        />
        <CustomInput
          name="cementBridgeHeight"
          label="Длина цементного моста (м)"
          placeholder="0.0"
          v-model="form.cementBridgeHeight"
          :error="errors.cementBridgeHeight"
        />
      </InputGroup>
      <InputGroup>
        <CustomInput
          name="runningVolumeCasingString"
          label="Погонный объём открытого ствола или обсадной колонны (м³/м)"
          placeholder="0.0"
          v-model="form.runningVolumeCasingString"
          :error="errors.runningVolumeCasingString"
        />
        <CustomInput
          name="runningVolumeInnerPipe"
          label="Погонный объём внутренней полости трубы (м³/м)"
          placeholder="0.0"
          v-model="form.runningVolumeInnerPipe"
          :error="errors.runningVolumeInnerPipe"
        />
        <CustomInput
          name="runningCapacityRing"
          label="Погонная вместимость кольца между скважиной и колонной (м³/м)"
          placeholder="0.0"
          v-model="form.runningCapacityRing"
          :error="errors.runningCapacityRing"
        />
      </InputGroup>
      <InputGroup>
        <CustomInput
          name="excessVolume"
          label="Избыточный объём для работы по цементированию (%)"
          placeholder="0"
          v-model="form.excessVolume"
          :error="errors.excessVolume"
        />
        <CustomInput
          name="buffer1Volume"
          label="Объём буфера, закачиваемый перед цементным мостом (м³)"
          placeholder="0.0"
          v-model="form.buffer1Volume"
          :error="errors.buffer1Volume"
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
import { calculateCementBridgeInstallationOnBalance } from '@/api/cementBridgeInstallationOnBalance.js'
import { reactive, ref } from 'vue'
import { numberString } from '@/utils/zodParse.js'
import { z } from 'zod'

const result = ref()
const form = reactive({
  cementBridgeHeight: '',
  runningVolumeCasingString: '',
  excessVolume: '',
  buffer1Volume: '',
  runningCapacityRing: '',
  runningVolumeInnerPipe: '',
  drillPipeLength: '',
})
const errors = reactive({
  cementBridgeHeight: '',
  runningVolumeCasingString: '',
  excessVolume: '',
  buffer1Volume: '',
  runningCapacityRing: '',
  runningVolumeInnerPipe: '',
  drillPipeLength: '',
})

const schema = z.object({
  cementBridgeHeight: numberString(),
  runningVolumeCasingString: numberString(),
  excessVolume: numberString(),
  buffer1Volume: numberString(),
  runningCapacityRing: numberString(),
  runningVolumeInnerPipe: numberString(),
  drillPipeLength: numberString(),
})

/** @param {FormData} form */
const handleSubmit = async (form) => {
  errors.cementBridgeHeight = ''
  errors.runningVolumeCasingString = ''
  errors.excessVolume = ''
  errors.buffer1Volume = ''
  errors.runningCapacityRing = ''
  errors.runningVolumeInnerPipe = ''
  errors.drillPipeLength = ''
  const formDataObj = Object.fromEntries(form.entries())
  const parsed = schema.safeParse(formDataObj)

  if (!parsed.success) {
    for (const issue of parsed.error.issues) {
      errors[issue.path[0]] = issue.message
    }
    result.value = null
    return
  }

  const {
    cementBridgeHeight,
    runningVolumeCasingString,
    excessVolume,
    buffer1Volume,
    runningCapacityRing,
    runningVolumeInnerPipe,
    drillPipeLength,
  } = parsed.data

  result.value = await calculateCementBridgeInstallationOnBalance(
    cementBridgeHeight,
    runningVolumeCasingString,
    excessVolume,
    buffer1Volume,
    runningCapacityRing,
    runningVolumeInnerPipe,
    drillPipeLength,
  )
}
</script>
