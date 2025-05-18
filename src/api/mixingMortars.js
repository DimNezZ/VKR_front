import { api } from './core.js'

/**
 * @typedef {Object} MixingMortarsResult
 * @property {number} mortarToAdd Необходимо добавить раствора (м3)
 * @property {number} finalMortarVolume Конечный объём раствора (м3)
 */

/**
 * Смешивание растворов
 * @param {number} requiredDensity Необходимая плотность при смешивании растворов (г/см3)
 * @param {number} mortarVolume Исходный объём раствора (м3)
 * @param {number} mortarDensity Плотность исходного раствора (г/см3)
 * @param {number} mortarToAddedDensity Плотность добавляемого раствора (г/см3)
 * @returns {Promise<MixingMortarsResult>}
 */
export const calculateMixingMortars = (
  requiredDensity,
  mortarVolume,
  mortarDensity,
  mortarToAddedDensity,
) => {
  return api
    .post('mixing-mortars', {
      json: { requiredDensity, mortarVolume, mortarDensity, mortarToAddedDensity },
    })
    .json()
}
