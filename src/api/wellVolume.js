import { api } from './core.js'

/**
 * @typedef {Object} WellVolumeResult
 * @property {number} liters Вместимость (л/м)
 * @property {number} meters Вместимость (м3/м)
 * @property {number} volumeSec Объём секции (м3)
 */

/**
 * Объем скважины
 * @param {number} _OD Наружный диаметр обсадной колонны или диаметр открытого ствола (мм)
 * @param {number} _ID Внутренний диаметр бурильной колонны (мм)
 * @param {number} _Lsec Длина секции (м)
 * @returns {Promise<WellVolumeResult>}
 */
export const calculateWellVolume = (_OD, _ID, _Lsec) => {
  return api
    .post('well-volume', {
      json: { _OD, _ID, _Lsec },
    })
    .json()
}
