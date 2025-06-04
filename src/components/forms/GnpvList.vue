<template>
  <LoaderWrapper>
    <FormWrapper v-model="model" @submit="handleSubmit">
      <InputGroup title="Глубина" variant="bordered">
        <CustomInput
          name="Depth"
          label="Глубина бурения (м)"
          placeholder="0.0"
          v-model="model.Depth"
          :error="errors.Depth"
        />
        <CustomInput
          name="ShoeCasingDepth"
          label="Глубина башмака последней обсадной колонны (м)"
          placeholder="0.0"
          v-model="model.ShoeCasingDepth"
          :error="errors.ShoeCasingDepth"
        />
      </InputGroup>
      <InputGroup>
        <CustomInput
          name="Time"
          label="Время после закрытия превентора (с)"
          placeholder="0.0"
          v-model="model.Time"
          :error="errors.Time"
        />
        <CustomInput
          name="OpenBarrelDiameter"
          label="Диаметр открытого ствола (мм)"
          placeholder="0.0"
          v-model="model.OpenBarrelDiameter"
          :error="errors.OpenBarrelDiameter"
        />
        <CustomInput
          name="ReleasedFluidVolume"
          label="Объём вышедшего флюида (м³)"
          placeholder="0.0"
          v-model="model.ReleasedFluidVolume"
          :error="errors.ReleasedFluidVolume"
        />
      </InputGroup>
      <InputGroup title="Давление" variant="bordered">
        <CustomInput
          name="PipePressure"
          label="Давление в трубе (МПа)"
          placeholder="0.0"
          v-model="model.PipePressure"
          :error="errors.PipePressure"
        />
        <CustomInput
          name="AnnularPressure"
          label="Затрубное давление (МПа)"
          placeholder="0.0"
          v-model="model.AnnularPressure"
          :error="errors.AnnularPressure"
        />
      </InputGroup>
      <InputGroup title="Параметры колонны" variant="bordered">
        <CustomInput
          name="OuterPipeDiameter"
          label="Наружный диаметр обсадной колонны (мм)"
          placeholder="0.0"
          v-model="model.OuterPipeDiameter"
          :error="errors.OuterPipeDiameter"
        />
        <CustomInput
          name="PipeWallThickness"
          label="Толщина стенки обсадной колонны (мм)"
          placeholder="0.0"
          v-model="model.PipeWallThickness"
          :error="errors.PipeWallThickness"
        />
        <CustomInput
          name="ExcessReservoirPressure"
          label="Превышение пластового давления (%)"
          placeholder="0"
          v-model="model.ExcessReservoirPressure"
          :error="errors.ExcessReservoirPressure"
        />
        <CustomInput
          name="PumpSpeed"
          label="Подача насоса (л/с)"
          placeholder="0.0"
          v-model="model.PumpSpeed"
          :error="errors.PumpSpeed"
        />
        <CustomInput
          name="PumpingPerTurn"
          label="Прокачивание литров за один ход для трубного, затрубного и полного объема (л/ход)"
          placeholder="0.0"
          v-model="model.PumpingPerTurn"
          :error="errors.PumpingPerTurn"
        />
      </InputGroup>
      <InputGroup title="Параметры СБТ" variant="bordered">
        <CustomInput
          name="SDPOuterDiameter"
          label="Внешний диаметр СБТ (мм)"
          placeholder="0.0"
          v-model="model.SDPOuterDiameter"
          :error="errors.SDPOuterDiameter"
        />
        <CustomInput
          name="SDPInnerDiameter"
          label="Внутренний диаметр СБТ (мм)"
          placeholder="0.0"
          v-model="model.SDPInnerDiameter"
          :error="errors.SDPInnerDiameter"
        />
        <CustomInput
          name="SDPLength"
          label="Длина СБТ (м)"
          placeholder="0.0"
          v-model="model.SDPLength"
          :error="errors.SDPLength"
        />
      </InputGroup>
      <InputGroup title="Параметры УДП" variant="bordered">
        <CustomInput
          name="WDPOuterDiameter"
          label="Внешний диаметр УДП (мм)"
          placeholder="0.0"
          v-model="model.WDPOuterDiameter"
          :error="errors.WDPOuterDiameter"
        />
        <CustomInput
          name="WDPInnerDiameter"
          label="Внутренний диаметр УДП (мм)"
          placeholder="0.0"
          v-model="model.WDPInnerDiameter"
          :error="errors.WDPInnerDiameter"
        />
        <CustomInput
          name="WDPLength"
          label="Длина УДП (м)"
          placeholder="0.0"
          v-model="model.WDPLength"
          :error="errors.WDPLength"
        />
      </InputGroup>
      <InputGroup>
        <CustomInput
          name="MortarDensity"
          label="Плотность раствора (г/см³)"
          placeholder="0.0"
          v-model="model.MortarDensity"
          :error="errors.MortarDensity"
        />
        <CustomInput
          name="HydraulicFracturingGradient"
          label="Градиент гидроразрыва (МПа/м)"
          placeholder="0.0"
          v-model="model.HydraulicFracturingGradient"
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
import { ref } from 'vue'
import { z } from 'zod/v4'
import { useValidation } from '@/utils/useValidation.js'

const result = ref(null)

const model = ref({
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
  Depth: z.coerce.number().positive('Обязательное поле'),
  ShoeCasingDepth: z.coerce.number().positive('Обязательное поле'),
  Time: z.coerce.number().positive('Обязательное поле'),
  PipePressure: z.coerce.number().positive('Обязательное поле'),
  AnnularPressure: z.coerce.number().positive('Обязательное поле'),
  ReleasedFluidVolume: z.coerce.number().positive('Обязательное поле'),
  OuterPipeDiameter: z.coerce.number().positive('Обязательное поле'),
  PipeWallThickness: z.coerce.number().positive('Обязательное поле'),
  ExcessReservoirPressure: z.coerce.number().positive('Обязательное поле'),
  PumpSpeed: z.coerce.number().positive('Обязательное поле'),
  PumpingPerTurn: z.coerce.number().positive('Обязательное поле'),
  OpenBarrelDiameter: z.coerce.number().positive('Обязательное поле'),
  SDPOuterDiameter: z.coerce.number().positive('Обязательное поле'),
  SDPInnerDiameter: z.coerce.number().positive('Обязательное поле'),
  SDPLength: z.coerce.number().positive('Обязательное поле'),
  WDPOuterDiameter: z.coerce.number().positive('Обязательное поле'),
  WDPInnerDiameter: z.coerce.number().positive('Обязательное поле'),
  WDPLength: z.coerce.number().positive('Обязательное поле'),
  MortarDensity: z.coerce.number().positive('Обязательное поле'),
  HydraulicFracturingGradient: z.coerce.number().positive('Обязательное поле'),
})

const { errors, getData, validate } = useValidation(schema, model)

const handleSubmit = async () => {
  if (!validate()) {
    result.value = null
    console.log('Форма не заполнена')

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
  } = getData()
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

Depth, ShoeCasingDepth, Time, PipePressure, AnnularPressure, ReleasedFluidVolume, OuterPipeDiameter,
PipeWallThickness, ExcessReservoirPressure, PumpSpeed, PumpingPerTurn, OpenBarrelDiameter,
SDPOuterDiameter, SDPInnerDiameter, SDPLength, WDPOuterDiameter, WDPInnerDiameter, WDPLength,
MortarDensity, HydraulicFracturingGradient,
