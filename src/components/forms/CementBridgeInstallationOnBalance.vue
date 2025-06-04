<template>
  <LoaderWrapper>
    <FormWrapper v-model="model" @submit="handleSubmit">
      <InputGroup>
        <CustomInput
          name="drillPipeLength"
          label="Длина бурильных труб или насосно-компрессорных труб (м)"
          placeholder="0.0"
          v-model="model.drillPipeLength"
          :error="errors.drillPipeLength"
        />
        <CustomInput
          name="cementBridgeHeight"
          label="Длина цементного моста (м)"
          placeholder="0.0"
          v-model="model.cementBridgeHeight"
          :error="errors.cementBridgeHeight"
        />
      </InputGroup>
      <InputGroup>
        <CustomInput
          name="runningVolumeCasingString"
          label="Погонный объём открытого ствола или обсадной колонны (м³/м)"
          placeholder="0.0"
          v-model="model.runningVolumeCasingString"
          :error="errors.runningVolumeCasingString"
        />
        <CustomInput
          name="runningVolumeInnerPipe"
          label="Погонный объём внутренней полости трубы (м³/м)"
          placeholder="0.0"
          v-model="model.runningVolumeInnerPipe"
          :error="errors.runningVolumeInnerPipe"
        />
        <CustomInput
          name="runningCapacityRing"
          label="Погонная вместимость кольца между скважиной и колонной (м³/м)"
          placeholder="0.0"
          v-model="model.runningCapacityRing"
          :error="errors.runningCapacityRing"
        />
      </InputGroup>
      <InputGroup>
        <CustomInput
          name="excessVolume"
          label="Избыточный объём для работы по цементированию (%)"
          placeholder="0"
          v-model="model.excessVolume"
          :error="errors.excessVolume"
        />
        <CustomInput
          name="buffer1Volume"
          label="Объём буфера, закачиваемый перед цементным мостом (м³)"
          placeholder="0.0"
          v-model="model.buffer1Volume"
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
import { ref } from 'vue'
import { z } from 'zod/v4'
import { useValidation } from '@/utils/useValidation.js'

const result = ref()

const model = ref({
  cementBridgeHeight: '',
  runningVolumeCasingString: '',
  excessVolume: '',
  buffer1Volume: '',
  runningCapacityRing: '',
  runningVolumeInnerPipe: '',
  drillPipeLength: '',
})
const schema = z.object({
  cementBridgeHeight: z.coerce.number().positive('Обязательное поле'),
  runningVolumeCasingString: z.coerce.number().positive('Обязательное поле'),
  excessVolume: z.coerce.number().positive('Обязательное поле'),
  buffer1Volume: z.coerce.number().positive('Обязательное поле'),
  runningCapacityRing: z.coerce.number().positive('Обязательное поле'),
  runningVolumeInnerPipe: z.coerce.number().positive('Обязательное поле'),
  drillPipeLength: z.coerce.number().positive('Обязательное поле'),
})

const { errors, getData, validate } = useValidation(schema, model)

const handleSubmit = async () => {
  if (!validate()) {
    result.value = null
    console.log('Форма не заполнена')

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
  } = getData()
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
