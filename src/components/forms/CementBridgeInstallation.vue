<template>
  <FormWrapper @submit="handleSubmit">
    <InputGroup title="Тип трубы" variant="bordered">
      <RadioGroup v-model="pipeType" value="1" name="PipeType" label="Гладкопроходные трубы" />
      <RadioGroup
        v-model="pipeType"
        value="0"
        name="PipeType"
        label="Трубы с внутрь высаженными концами"
      />
    </InputGroup>
    <InputGroup>
      <RadioGroup
        v-model="bufferFluid"
        type="checkbox"
        value="1"
        name="BufferFluid"
        label="Присутствие буферной жидкости"
      />
    </InputGroup>
    <InputGroup>
      <CustomInput
        name="InternalPassageChannelArea"
        label="Внутренний проходной канал колонны труб (м²)"
        placeholder="0.0"
      />
      <CustomInput name="BridgeHeight" label="Высота цементного моста (м)" placeholder="0.0" />
      <CustomInput
        name="InternalPipeColumnVolume"
        label="Внутренний объём колонны труб (м³)"
        placeholder="0.0"
      />
    </InputGroup>
    <InputGroup>
      <CustomInput
        name="CrossSectionArea"
        label="Поперечное сечение скважины на участке установки цементного моста (м²)"
        placeholder="0"
      />
      <CustomInput
        name="RingSpaceArea"
        label="Кольцевое пространство между стенками скважины и колонной труб (м²)"
        placeholder="0.0"
      />
    </InputGroup>
  </FormWrapper>
</template>

<script setup>
import FormWrapper from '@/components/FormWrapper.vue'
import InputGroup from '@/components/InputGroup.vue'
import CustomInput from '@/components/CustomInput.vue'
import RadioGroup from '../RadioGroup.vue'
import { getFormNumber } from '@/utils/getFormNumber.js'
import { calculateCementBridgeInstallation } from '@/api/cementBridgeInstallation.js'

import { ref } from 'vue'
const bufferFluid = ref('0')
const pipeType = ref('')

/** @param {FormData} form */
const handleSubmit = async (form) => {
  const BufferFluid = getFormNumber(form.get('BufferFluid')) ?? 0
  const PipeType = getFormNumber(form.get('PipeType'))
  const CrossSectionArea = getFormNumber(form.get('CrossSectionArea'))
  const RingSpaceArea = getFormNumber(form.get('RingSpaceArea'))
  const InternalPassageChannelArea = getFormNumber(form.get('InternalPassageChannelArea'))
  const BridgeHeight = getFormNumber(form.get('BridgeHeight'))
  const InternalPipeColumnVolume = getFormNumber(form.get('InternalPipeColumnVolume'))

  if (
    BufferFluid !== undefined &&
    PipeType !== undefined &&
    CrossSectionArea !== undefined &&
    RingSpaceArea !== undefined &&
    InternalPassageChannelArea !== undefined &&
    BridgeHeight !== undefined &&
    InternalPipeColumnVolume !== undefined
  ) {
    const response = await calculateCementBridgeInstallation(
      BufferFluid,
      PipeType,
      CrossSectionArea,
      RingSpaceArea,
      InternalPassageChannelArea,
      BridgeHeight,
      InternalPipeColumnVolume,
    )
    console.log(response)
  } else {
    console.log('Форма не заполнена')
  }
}
</script>
