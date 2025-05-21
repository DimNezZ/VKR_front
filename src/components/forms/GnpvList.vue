<template>
  <FormWrapper @submit="handleSubmit">
    <InputGroup title="Глубина" variant="bordered">
      <CustomInput name="Depth" label="Глубина бурения (м)" placeholder="0.0" />
      <CustomInput
        name="ShoeCasingDepth"
        label="Глубина башмака последней обсадной колонны (м)"
        placeholder="0.0"
      />
    </InputGroup>
    <InputGroup>
      <CustomInput name="Time" label="Время после закрытия превентора (с)" placeholder="0.0" />
      <CustomInput
        name="OpenBarrelDiameter"
        label="Диаметр открытого ствола (мм)"
        placeholder="0.0"
      />
      <CustomInput
        name="ReleasedFluidVolume"
        label="Объём вышедшего флюида (м³)"
        placeholder="0.0"
      />
    </InputGroup>
    <InputGroup title="Давление" variant="bordered">
      <CustomInput name="PipePressure" label="Давление в трубе (МПа)" placeholder="0.0" />
      <CustomInput name="AnnularPressure" label="Затрубное давление (МПа)" placeholder="0.0" />
    </InputGroup>
    <InputGroup title="Параметры колонны" variant="bordered">
      <CustomInput
        name="OuterPipeDiameter"
        label="Наружный диаметр обсадной колонны (мм)"
        placeholder="0.0"
      />
      <CustomInput
        name="PipeWallThickness"
        label="Толщина стенки обсадной колонны (мм)"
        placeholder="0.0"
      />
      <CustomInput
        name="ExcessReservoirPressure"
        label="Превышение пластового давления (%)"
        placeholder="0"
      />
      <CustomInput name="PumpSpeed" label="Подача насоса (л/с)" placeholder="0.0" />
      <CustomInput
        name="PumpingPerTurn"
        label="Прокачивание литров за один ход для трубного, затрубного и полного объема (л/ход)"
        placeholder="0.0"
      />
    </InputGroup>
    <InputGroup title="Параметры СБТ" variant="bordered">
      <CustomInput name="SDPOuterDiameter" label="Внешний диаметр СБТ (мм)" placeholder="0.0" />
      <CustomInput name="SDPInnerDiameter" label="Внутренний диаметр СБТ (мм)" placeholder="0.0" />
      <CustomInput name="SDPLength" label="Длина СБТ (м)" placeholder="0.0" />
    </InputGroup>
    <InputGroup title="Параметры УДП" variant="bordered">
      <CustomInput name="WDPOuterDiameter" label="Внешний диаметр УДП (мм)" placeholder="0.0" />
      <CustomInput name="WDPInnerDiameter" label="Внутренний диаметр УДП (мм)" placeholder="0.0" />
      <CustomInput name="WDPLength" label="Длина УДП (м)" placeholder="0.0" />
    </InputGroup>
    <InputGroup>
      <CustomInput name="MortarDensity" label="Плотность раствора (г/см³)" placeholder="0.0" />
      <CustomInput
        name="HydraulicFracturingGradient"
        label="Градиент гидроразрыва (МПа/м)"
        placeholder="0.0"
      />
    </InputGroup>
  </FormWrapper>
</template>

<script setup>
import FormWrapper from '@/components/FormWrapper.vue'
import InputGroup from '@/components/InputGroup.vue'
import CustomInput from '@/components/CustomInput.vue'
import { getFormNumber } from '@/utils/getFormNumber.js'
import { calculateGnpv } from '@/api/gnpv.js'

/** @param {FormData} form */
const handleSubmit = async (form) => {
  const Depth = getFormNumber(form.get('Depth'))
  const ShoeCasingDepth = getFormNumber(form.get('ShoeCasingDepth'))
  const Time = getFormNumber(form.get('Time'))
  const PipePressure = getFormNumber(form.get('PipePressure'))
  const AnnularPressure = getFormNumber(form.get('AnnularPressure'))
  const ReleasedFluidVolume = getFormNumber(form.get('ReleasedFluidVolume'))
  const OuterPipeDiameter = getFormNumber(form.get('OuterPipeDiameter'))
  const PipeWallThickness = getFormNumber(form.get('PipeWallThickness'))
  const ExcessReservoirPressure = getFormNumber(form.get('ExcessReservoirPressure'))
  const PumpSpeed = getFormNumber(form.get('PumpSpeed'))
  const PumpingPerTurn = getFormNumber(form.get('PumpingPerTurn'))
  const OpenBarrelDiameter = getFormNumber(form.get('OpenBarrelDiameter'))
  const SDPOuterDiameter = getFormNumber(form.get('SDPOuterDiameter'))
  const SDPInnerDiameter = getFormNumber(form.get('SDPInnerDiameter'))
  const SDPLength = getFormNumber(form.get('SDPLength'))
  const WDPOuterDiameter = getFormNumber(form.get('WDPOuterDiameter'))
  const WDPInnerDiameter = getFormNumber(form.get('WDPInnerDiameter'))
  const WDPLength = getFormNumber(form.get('WDPLength'))
  const MortarDensity = getFormNumber(form.get('MortarDensity'))
  const HydraulicFracturingGradient = getFormNumber(form.get('HydraulicFracturingGradient'))

  if (
    Depth !== undefined &&
    ShoeCasingDepth !== undefined &&
    Time !== undefined &&
    PipePressure !== undefined &&
    AnnularPressure !== undefined &&
    ReleasedFluidVolume !== undefined &&
    OuterPipeDiameter !== undefined &&
    PipeWallThickness !== undefined &&
    ExcessReservoirPressure !== undefined &&
    PumpSpeed !== undefined &&
    PumpingPerTurn !== undefined &&
    OpenBarrelDiameter !== undefined &&
    SDPOuterDiameter !== undefined &&
    SDPInnerDiameter !== undefined &&
    SDPLength !== undefined &&
    WDPOuterDiameter !== undefined &&
    WDPInnerDiameter !== undefined &&
    WDPLength !== undefined &&
    MortarDensity !== undefined &&
    HydraulicFracturingGradient !== undefined
  ) {
    const response = await calculateGnpv(
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
    console.log(response)
  } else {
    console.log('Форма не заполнена')
  }
}
</script>
