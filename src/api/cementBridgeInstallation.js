import { api } from './core.js'

/**
 * @typedef {Object} CementBridgeInstallationResult
 * @property {number} PluggingVolume Объём тампонажного раствора (м3)
 * @property {number} BufferFluidVolume1 Объём буферной жидкости перед тампонажным раствором (м3)
 * @property {number} BufferFluidVolume2 Объём буферной жидкости после тампонажного раствора (м3)
 * @property {number} ChaserVolume Объём продавочной жидкости (м3)
 */

/**
 * Расчёт объёмов жидкостей для установки цементного моста
 * @param {number} BufferFluid Буферная жидкость (0 - отсутствует, 1 - вода)
 * @param {number} PipeType Тип трубы (0 - Трубы с внутрь высаженными концами, 1 - Гладкопроходные трубы)
 * @param {number} CrossSectionArea Поперечное сечение скважины на участке установки цементного моста (м2)
 * @param {number} RingSpaceArea Кольцевое пространство между стенками скважины и колонной труб (м2)
 * @param {number} InternalPassageChannelArea Внутренний проходной канал колонны труб (м2)
 * @param {number} BridgeHeight Высота цементного моста (м)
 * @param {number} InternalPipeColumnVolume Внутренний объём колонны труб (м3)
 * @returns {Promise<CementBridgeInstallationResult>}
 */
export const calculateCementBridgeInstallation = (
  BufferFluid,
  PipeType,
  CrossSectionArea,
  RingSpaceArea,
  InternalPassageChannelArea,
  BridgeHeight,
  InternalPipeColumnVolume,
) => {
  return api
    .post('cement-bridge-installation', {
      json: {
        BufferFluid,
        PipeType,
        CrossSectionArea,
        RingSpaceArea,
        InternalPassageChannelArea,
        BridgeHeight,
        InternalPipeColumnVolume,
      },
    })
    .json()
}
