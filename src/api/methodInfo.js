import { api } from './core.js'

/**
 * @typedef {Object} getMethodInfoResult
 * @property {string} name Название метода
 * @property {string} information Краткое описание метода
 * @property {string} latex Формулы в формате LaTeX
 */

/**
 * Получение информации о методе по названию
 * @param {string} methodName Наружный диаметр обсадной колонны или диаметр открытого ствола (мм)
 * @returns {Promise<getMethodInfoResult>}
 */
export const getMethodInfo = async (methodName) => {
  return api.get(`frontend-method/%2F${methodName}`).json()
}
