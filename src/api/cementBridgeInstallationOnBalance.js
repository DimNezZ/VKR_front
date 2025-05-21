import { api } from './core.js'

/**
 * @typedef {Object} CementBridgeInstallationOnBalanceResult
 * @property {number} requiredCementCount Количество цемента, требующееся для заданной длины цементного моста (м3)
 * @property {number} buffer2Volume Объём буфера, закачиваемый после цементного моста (м3)
 * @property {number} salesVolume Объём продавки, требующийся для размещения моста (бар)
 */

/**
 * Рассчёт количество цемента, объёмы буферов и продавки для установки цементного моста.
 * @param {number} cementBridgeHeight Длина цементного моста (м)
 * @param {number} runningVolumeCasingString Погонный объём открытого ствола или обсадной колонны (м3/м)
 * @param {number} excessVolume Избыточный объём для работы по цементированию (%)
 * @param {number} buffer1Volume Объём буфера, закачиваемый перед цементным мостом (м3)
 * @param {number} runningCapacityRing Погонная вместимость кольца между скважиной и колонной (м3/м)
 * @param {number} runningVolumeInnerPipe Погонный объём внутренней полости трубы (м3/м)
 * @param {number} drillPipeLength Длина бурильных труб или НКТ - насосно-компрессорные трубы (м)
 * @returns {Promise<CementBridgeInstallationOnBalanceResult>}
 */
export const calculateCementBridgeInstallationOnBalance = (
  cementBridgeHeight,
  runningVolumeCasingString,
  excessVolume,
  buffer1Volume,
  runningCapacityRing,
  runningVolumeInnerPipe,
  drillPipeLength,
) => {
  return api
    .post('cement-bridge-installation-on-balance', {
      json: {
        cementBridgeHeight,
        runningVolumeCasingString,
        excessVolume,
        buffer1Volume,
        runningCapacityRing,
        runningVolumeInnerPipe,
        drillPipeLength,
      },
    })
    .json()
}
