<template>
  <LoaderWrapper>
    <FormWrapper @submit="handleSubmit">
      <InputGroup title="Тип трубы" variant="bordered">
        <CustomRadio
          v-model="pipeType"
          value="1"
          name="pipeType"
          label="Гладкопроходные трубы"
          id="1"
        />
        <CustomRadio
          v-model="pipeType"
          value="0"
          name="pipeType"
          label="Трубы с внутрь высаженными концами"
          id="2"
        />
      </InputGroup>
      <InputGroup>
        <CustomCheckbox
          v-model="bufferFluid"
          value="1"
          name="bufferFluid"
          label="Присутствие буферной жидкости"
          id="3"
        />
      </InputGroup>
      <InputGroup>
        <CustomInput
          name="internalPassageChannelArea"
          label="Внутренний проходной канал колонны труб (м²)"
          placeholder="0.0"
          v-model="form.internalPassageChannelArea"
          :error="errors.internalPassageChannelArea"
        />
        <CustomInput
          name="bridgeHeight"
          label="Высота цементного моста (м)"
          placeholder="0.0"
          v-model="form.bridgeHeight"
          :error="errors.bridgeHeight"
        />
        <CustomInput
          name="internalPipeColumnVolume"
          label="Внутренний объём колонны труб (м³)"
          placeholder="0.0"
          v-model="form.internalPipeColumnVolume"
          :error="errors.internalPipeColumnVolume"
        />
      </InputGroup>
      <InputGroup>
        <CustomInput
          name="crossSectionArea"
          label="Поперечное сечение скважины на участке установки цементного моста (м²)"
          placeholder="0"
          v-model="form.crossSectionArea"
          :error="errors.crossSectionArea"
        />
        <CustomInput
          name="ringSpaceArea"
          label="Кольцевое пространство между стенками скважины и колонной труб (м²)"
          placeholder="0.0"
          v-model="form.ringSpaceArea"
          :error="errors.ringSpaceArea"
        />
      </InputGroup>
    </FormWrapper>
  </LoaderWrapper>

  <ResultWrapper v-if="result">
    <InputGroup>
      <TextField caption="Объём тампонажного раствора:" unit="м³">
        {{ result.PluggingVolume }}</TextField
      >
      <TextField caption="Объём продавочной жидкости:" unit="м³">
        {{ result.ChaserVolume }}</TextField
      >
    </InputGroup>
    <InputGroup title="Объём буферной жидкости:" variant="bordered">
      <TextField caption="перед тампонажным раствором:" unit="м³">
        {{ result.BufferFluidVolume1 }}</TextField
      >
      <TextField caption="после тампонажного раствора:" unit="м³">
        {{ result.BufferFluidVolume2 }}</TextField
      >
    </InputGroup>
  </ResultWrapper>
</template>

<script setup>
import FormWrapper from '@/components/FormWrapper.vue'
import InputGroup from '@/components/InputGroup.vue'
import CustomInput from '@/components/CustomInput.vue'
import CustomRadio from '../CustomRadio.vue'
import CustomCheckbox from '../CustomCheckbox.vue'
import LoaderWrapper from '../LoaderWrapper.vue'
import ResultWrapper from '../ResultWrapper.vue'
import TextField from '../TextField.vue'
import { calculateCementBridgeInstallation } from '@/api/cementBridgeInstallation.js'
import { reactive, ref } from 'vue'
import { z } from 'zod'
import { numberString } from '@/utils/zodParse.js'

const bufferFluid = ref('0')
const pipeType = ref('')
const result = ref(null)
const form = reactive({
  bufferFluid: '',
  pipeType: '',
  crossSectionArea: '',
  ringSpaceArea: '',
  internalPassageChannelArea: '',
  bridgeHeight: '',
  internalPipeColumnVolume: '',
})
const errors = reactive({
  crossSectionArea: '',
  ringSpaceArea: '',
  internalPassageChannelArea: '',
  bridgeHeight: '',
  internalPipeColumnVolume: '',
})

const schema = z.object({
  crossSectionArea: numberString(),
  ringSpaceArea: numberString(),
  internalPassageChannelArea: numberString(),
  bridgeHeight: numberString(),
  internalPipeColumnVolume: numberString(),
})

/** @param {FormData} form */
const handleSubmit = async (form) => {
  errors.crossSectionArea = ''
  errors.ringSpaceArea = ''
  errors.internalPassageChannelArea = ''
  errors.bridgeHeight = ''
  errors.internalPipeColumnVolume = ''
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
    crossSectionArea,
    ringSpaceArea,
    internalPassageChannelArea,
    bridgeHeight,
    internalPipeColumnVolume,
  } = parsed.data

  result.value = await calculateCementBridgeInstallation(
    +bufferFluid.value,
    +pipeType.value,
    crossSectionArea,
    ringSpaceArea,
    internalPassageChannelArea,
    bridgeHeight,
    internalPipeColumnVolume,
  )
}
</script>
<!-- const BufferFluid = getFormNumber(form.get('BufferFluid')) ?? 0 -->
