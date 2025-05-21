import { api } from './core.js'

/**
 * @typedef {Object} WaterQuantityToDecreaseMortarDensityResult
 * @property {number} waterVolume Объём воды (м3)
 * @property {number} finalMortarVolume Конечный объём раствора (м3)
 */

/**
 * Количество добавляемой воды для уменьшения плотности раствора
 * @param {number} requiredDensity Необходимая плотность при добавлении раствора (г/см3)
 * @param {number} wellMortarVolume Объём раствора в скважине (50 м3)
 * @param {number} mortarDensity Плотность исходного раствора (г/см3)
 * @returns {Promise<WaterQuantityToDecreaseMortarDensityResult>}
 */
export const calculateWaterQuantityToDecreaseMortarDensity = (
  requiredDensity,
  wellMortarVolume,
  mortarDensity,
) => {
  return api
    .post('water-quantity-to-decrease-mortar-density', {
      json: { requiredDensity, wellMortarVolume, mortarDensity },
    })
    .json()
}
