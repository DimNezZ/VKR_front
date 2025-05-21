import { api } from './core.js'

/**
 * @typedef {Object} MortarWeightningResult
 * @property {number} weightingAgentWeight Необходимое количество утяжелителя (кг)
 * @property {number} finalMortarVolume Конечный объём раствора (м3)
 */

/**
 * Утяжеление раствора
 * @param {number} _requiredDensity Необходимая плотность при утяжелении раствора (г/см3)
 * @param {number} _mortarVolume Исходный объём раствора (м3)
 * @param {number} _mortarDensity Плотность исходного раствора (г/см3)
 * @param {number} _weightingAgentSpecificGravity Удельный вес утяжелителя (г/см3)
 * @returns {Promise<MortarWeightningResult>}
 */
export const calculateMortarWeightning = (
  _requiredDensity,
  _mortarVolume,
  _mortarDensity,
  _weightingAgentSpecificGravity,
) => {
  return api
    .post('mortar-weightning', {
      json: { _requiredDensity, _mortarVolume, _mortarDensity, _weightingAgentSpecificGravity },
    })
    .json()
}
