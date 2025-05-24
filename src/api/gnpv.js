import { api } from './core.js'

/**
 * @typedef {Object} GnpvResult
 * @property {number} pipeVolume Объём трубного пространства (м3)
 * @property {number} annularVolume Объём затрубного пространства (м3)
 * @property {number} totalVolume Общий объём скважины (м3)
 * @property {number} maxPressure Максимальное давление в затрубном пространстве (МПа)
 * @property {number} maxMortarDensity Максимальная плотность раствора (г/см3)
 * @property {number} reservoirPressure Пластовое давление (МПа)
 * @property {number} jammingMortarDensity Плотность раствора для глушения (г/см3)
 * @property {number} totalTime Общее время заполнения (мин)
 * @property {number} totalNumberTurns Общее число ходов насоса
 * @property {number} pressureDrop Падение давления на каждые 100 ходов (МПа)
 */

/**
 * Расчёт параметров для листа глушения при газонефтеводопроявлении (ГНПВ)
 * @param {number} Depth Глубина бурения (м)
 * @param {number} ShoeCasingDepth Глубина башмака последней обсадной колонны (м)
 * @param {number} Time Время после закрытия превентора (с)
 * @param {number} PipePressure Давление в трубе (МПа)
 * @param {number} AnnularPressure Затрубное давление (МПа)
 * @param {number} ReleasedFluidVolume Объём вышедшего флюида (м3)
 * @param {number} OuterPipeDiameter Наружный диаметр обсадной колонны (мм)
 * @param {number} PipeWallThickness Толщина стенки обсадной колонны (мм)
 * @param {number} ExcessReservoirPressure Превышение пластового давления (%)
 * @param {number} PumpSpeed Подача насоса (л/с)
 * @param {number} PumpingPerTurn Прокачивание литров за один ход для трубного, затрубного и полного объема (л/ход)
 * @param {number} OpenBarrelDiameter Диаметр открытого ствола (мм)
 * @param {number} SDPOuterDiameter Внешний диаметр СБТ (мм)
 * @param {number} SDPInnerDiameter Внутренний диаметр СБТ (мм)
 * @param {number} SDPLength Длина СБТ (м)
 * @param {number} WDPOuterDiameter Внешний диаметр УДП (мм)
 * @param {number} WDPInnerDiameter Внутренний диаметр УДП
 * @param {number} WDPLength Длина УДП (м)
 * @param {number} MortarDensity Плотность раствора (г/см3)
 * @param {number} HydraulicFracturingGradient Градиент гидроразрыва (МПа/м)
 * @returns {Promise<GnpvResult>}
 */
export const calculateGnpv = (
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
) => {
  return api
    .post('gnpv', {
      json: {
        Depth,
        ShoeCasingDepth,
        Time,
        PipePressure,
        AnnularPressure,
        ReleasedFluidVolume,
        CasingDiameter: {
          OuterPipeDiameter,
          PipeWallThickness,
          ExcessReservoirPressure,
          PumpSpeed,
          PumpingPerTurn,
        },

        OpenBarrelDiameter,
        SDPDiameter: {
          SDPOuterDiameter,
          SDPInnerDiameter,
        },
        SDPLength,
        WDPDiameter: {
          WDPOuterDiameter,
          WDPInnerDiameter,
        },
        WDPLength,
        MortarDensity,
        HydraulicFracturingGradient,
      },
    })
    .json()
}
