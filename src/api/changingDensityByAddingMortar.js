import { api } from './core.js'

/**
 * @typedef {Object} ChangingDensityByAddingMortarResult
 * @property {number} finalMortarVolume Конечная плотность раствора (г/см3)
 * @property {number} finalMortarDensity Конечный объём раствора (м3)
 */

/**
 * Изменение плотности при добавлении раствора
 * @param {number} densityChange Изменение плотности при добавлении раствора (м3)
 * @param {number} mortarToAddedDensity Плотность добавляемого раствора (г/см3)
 * @param {number} mortarVolume Исходный объём раствора (м3)
 * @param {number} mortarDensity Плотность исходного раствора (г/см3)
 * @returns {Promise<ChangingDensityByAddingMortarResult>}
 */
export const calculateChangingDensityByAddingMortar = (
  densityChange,
  mortarToAddedDensity,
  mortarVolume,
  mortarDensity,
) => {
  return api
    .post('changing-density-by-adding-mortar', {
      json: { densityChange, mortarToAddedDensity, mortarVolume, mortarDensity },
    })
    .json()
}
