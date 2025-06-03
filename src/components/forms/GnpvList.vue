<template>
  <LoaderWrapper>
    <FormWrapper @submit="handleSubmit">
      <InputGroup title="Глубина" variant="bordered">
        <CustomInput
          name="Depth"
          label="Глубина бурения (м)"
          placeholder="0.0"
          v-model="form.Depth"
          :error="errors.Depth"
        />
        <CustomInput
          name="ShoeCasingDepth"
          label="Глубина башмака последней обсадной колонны (м)"
          placeholder="0.0"
          v-model="form.ShoeCasingDepth"
          :error="errors.ShoeCasingDepth"
        />
      </InputGroup>
      <InputGroup>
        <CustomInput
          name="Time"
          label="Время после закрытия превентора (с)"
          placeholder="0.0"
          v-model="form.Time"
          :error="errors.Time"
        />
        <CustomInput
          name="OpenBarrelDiameter"
          label="Диаметр открытого ствола (мм)"
          placeholder="0.0"
          v-model="form.OpenBarrelDiameter"
          :error="errors.OpenBarrelDiameter"
        />
        <CustomInput
          name="ReleasedFluidVolume"
          label="Объём вышедшего флюида (м³)"
          placeholder="0.0"
          v-model="form.ReleasedFluidVolume"
          :error="errors.ReleasedFluidVolume"
        />
      </InputGroup>
      <InputGroup title="Давление" variant="bordered">
        <CustomInput
          name="PipePressure"
          label="Давление в трубе (МПа)"
          placeholder="0.0"
          v-model="form.PipePressure"
          :error="errors.PipePressure"
        />
        <CustomInput
          name="AnnularPressure"
          label="Затрубное давление (МПа)"
          placeholder="0.0"
          v-model="form.AnnularPressure"
          :error="errors.AnnularPressure"
        />
      </InputGroup>
      <InputGroup title="Параметры колонны" variant="bordered">
        <CustomInput
          name="OuterPipeDiameter"
          label="Наружный диаметр обсадной колонны (мм)"
          placeholder="0.0"
          v-model="form.OuterPipeDiameter"
          :error="errors.OuterPipeDiameter"
        />
        <CustomInput
          name="PipeWallThickness"
          label="Толщина стенки обсадной колонны (мм)"
          placeholder="0.0"
          v-model="form.PipeWallThickness"
          :error="errors.PipeWallThickness"
        />
        <CustomInput
          name="ExcessReservoirPressure"
          label="Превышение пластового давления (%)"
          placeholder="0"
          v-model="form.ExcessReservoirPressure"
          :error="errors.ExcessReservoirPressure"
        />
        <CustomInput
          name="PumpSpeed"
          label="Подача насоса (л/с)"
          placeholder="0.0"
          v-model="form.PumpSpeed"
          :error="errors.PumpSpeed"
        />
        <CustomInput
          name="PumpingPerTurn"
          label="Прокачивание литров за один ход для трубного, затрубного и полного объема (л/ход)"
          placeholder="0.0"
          v-model="form.PumpingPerTurn"
          :error="errors.PumpingPerTurn"
        />
      </InputGroup>
      <InputGroup title="Параметры СБТ" variant="bordered">
        <CustomInput
          name="SDPOuterDiameter"
          label="Внешний диаметр СБТ (мм)"
          placeholder="0.0"
          v-model="form.SDPOuterDiameter"
          :error="errors.SDPOuterDiameter"
        />
        <CustomInput
          name="SDPInnerDiameter"
          label="Внутренний диаметр СБТ (мм)"
          placeholder="0.0"
          v-model="form.SDPInnerDiameter"
          :error="errors.SDPInnerDiameter"
        />
        <CustomInput
          name="SDPLength"
          label="Длина СБТ (м)"
          placeholder="0.0"
          v-model="form.SDPLength"
          :error="errors.SDPLength"
        />
      </InputGroup>
      <InputGroup title="Параметры УДП" variant="bordered">
        <CustomInput
          name="WDPOuterDiameter"
          label="Внешний диаметр УДП (мм)"
          placeholder="0.0"
          v-model="form.WDPOuterDiameter"
          :error="errors.WDPOuterDiameter"
        />
        <CustomInput
          name="WDPInnerDiameter"
          label="Внутренний диаметр УДП (мм)"
          placeholder="0.0"
          v-model="form.WDPInnerDiameter"
          :error="errors.WDPInnerDiameter"
        />
        <CustomInput
          name="WDPLength"
          label="Длина УДП (м)"
          placeholder="0.0"
          v-model="form.WDPLength"
          :error="errors.WDPLength"
        />
      </InputGroup>
      <InputGroup>
        <CustomInput
          name="MortarDensity"
          label="Плотность раствора (г/см³)"
          placeholder="0.0"
          v-model="form.MortarDensity"
          :error="errors.MortarDensity"
        />
        <CustomInput
          name="HydraulicFracturingGradient"
          label="Градиент гидроразрыва (МПа/м)"
          placeholder="0.0"
          v-model="form.HydraulicFracturingGradient"
          :error="errors.HydraulicFracturingGradient"
        />
      </InputGroup>
    </FormWrapper>
  </LoaderWrapper>

  <ResultWrapper v-if="result">
    <InputGroup title="Объём:" variant="bordered">
      <TextField caption="трубного пространства:" unit="м³"> {{ result.pipeVolume }}</TextField>
      <TextField caption="затрубного пространства:" unit="м³">
        {{ result.annularVolume }}</TextField
      >
      <TextField caption="Общий объём скважины:" unit="м³"> {{ result.totalVolume }}</TextField>
    </InputGroup>
    <InputGroup>
      <TextField caption="Максимальное давление в затрубном пространстве:" unit="МПа">
        {{ result.maxPressure }}</TextField
      >
      <TextField caption="Максимальная плотность раствора:" unit="г/см³">
        {{ result.maxMortarDensity }}</TextField
      >
    </InputGroup>
    <InputGroup>
      <TextField caption="Максимальное давление в затрубном пространстве:" unit="МПа">
        {{ result.reservoirPressure }}</TextField
      >
      <TextField caption="Падение давления на каждые 100 ходов:" unit="МПа">
        {{ result.pressureDrop }}</TextField
      >
    </InputGroup>
    <InputGroup>
      <TextField caption="Плотность раствора для глушения:" unit="г/см³">
        {{ result.jammingMortarDensity }}</TextField
      >
    </InputGroup>
    <InputGroup>
      <TextField caption="Общее время заполнения:" unit="мин"> {{ result.totalTime }}</TextField>
      <TextField caption="Общее число ходов насоса:"> {{ result.totalNumberTurns }}</TextField>
    </InputGroup>
  </ResultWrapper>
</template>

<script setup>
import FormWrapper from '@/components/FormWrapper.vue'
import InputGroup from '@/components/InputGroup.vue'
import CustomInput from '@/components/CustomInput.vue'
import { calculateGnpv } from '@/api/gnpv.js'
import LoaderWrapper from '../LoaderWrapper.vue'
import ResultWrapper from '../ResultWrapper.vue'
import TextField from '../TextField.vue'
import { reactive, ref } from 'vue'
import { numberString } from '@/utils/zodParse.js'
import { z } from 'zod'

const result = ref(null)
const form = reactive({
  Depth: '',
  ShoeCasingDepth: '',
  Time: '',
  PipePressure: '',
  AnnularPressure: '',
  ReleasedFluidVolume: '',
  OuterPipeDiameter: '',
  PipeWallThickness: '',
  ExcessReservoirPressure: '',
  PumpSpeed: '',
  PumpingPerTurn: '',
  OpenBarrelDiameter: '',
  SDPOuterDiameter: '',
  SDPInnerDiameter: '',
  SDPLength: '',
  WDPOuterDiameter: '',
  WDPInnerDiameter: '',
  WDPLength: '',
  MortarDensity: '',
  HydraulicFracturingGradient: '',
})
const errors = reactive({
  Depth: '',
  ShoeCasingDepth: '',
  Time: '',
  PipePressure: '',
  AnnularPressure: '',
  ReleasedFluidVolume: '',
  OuterPipeDiameter: '',
  PipeWallThickness: '',
  ExcessReservoirPressure: '',
  PumpSpeed: '',
  PumpingPerTurn: '',
  OpenBarrelDiameter: '',
  SDPOuterDiameter: '',
  SDPInnerDiameter: '',
  SDPLength: '',
  WDPOuterDiameter: '',
  WDPInnerDiameter: '',
  WDPLength: '',
  MortarDensity: '',
  HydraulicFracturingGradient: '',
})

const schema = z.object({
  Depth: numberString(),
  ShoeCasingDepth: numberString(),
  Time: numberString(),
  PipePressure: numberString(),
  AnnularPressure: numberString(),
  ReleasedFluidVolume: numberString(),
  OuterPipeDiameter: numberString(),
  PipeWallThickness: numberString(),
  ExcessReservoirPressure: numberString(),
  PumpSpeed: numberString(),
  PumpingPerTurn: numberString(),
  OpenBarrelDiameter: numberString(),
  SDPOuterDiameter: numberString(),
  SDPInnerDiameter: numberString(),
  SDPLength: numberString(),
  WDPOuterDiameter: numberString(),
  WDPInnerDiameter: numberString(),
  WDPLength: numberString(),
  MortarDensity: numberString(),
  HydraulicFracturingGradient: numberString(),
})

/** @param {FormData} form */
const handleSubmit = async (form) => {
  errors.Depth = ''
  errors.ShoeCasingDepth = ''
  errors.Time = ''
  errors.PipePressure = ''
  errors.AnnularPressure = ''
  errors.ReleasedFluidVolume = ''
  errors.OuterPipeDiameter = ''
  errors.PipeWallThickness = ''
  errors.ExcessReservoirPressure = ''
  errors.PumpSpeed = ''
  errors.PumpingPerTurn = ''
  errors.OpenBarrelDiameter = ''
  errors.SDPOuterDiameter = ''
  errors.SDPInnerDiameter = ''
  errors.SDPLength = ''
  errors.WDPOuterDiameter = ''
  errors.WDPInnerDiameter = ''
  errors.WDPLength = ''
  errors.MortarDensity = ''
  errors.HydraulicFracturingGradient = ''
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
    Depth,
    ShoeCasingDepth,
    Time,
    PipePressure,
    AnnularPressure,
    ReleasedFluidVolume,
    OuterPipeDiameter,
    PipeWallThickness,
    ExcessReservoirPressure,
    PumpSpeed,
    PumpingPerTurn,
    OpenBarrelDiameter,
    SDPOuterDiameter,
    SDPInnerDiameter,
    SDPLength,
    WDPOuterDiameter,
    WDPInnerDiameter,
    WDPLength,
    MortarDensity,
    HydraulicFracturingGradient,
  } = parsed.data

  result.value = await calculateGnpv(
    Depth,
    ShoeCasingDepth,
    Time,
    PipePressure,
    AnnularPressure,
    ReleasedFluidVolume,
    OuterPipeDiameter,
    PipeWallThickness,
    ExcessReservoirPressure,
    PumpSpeed,
    PumpingPerTurn,
    OpenBarrelDiameter,
    SDPOuterDiameter,
    SDPInnerDiameter,
    SDPLength,
    WDPOuterDiameter,
    WDPInnerDiameter,
    WDPLength,
    MortarDensity,
    HydraulicFracturingGradient,
  )
}
</script>
