import { parseNumber } from './parseNumber.js'

/**
 * @param {FormDataEntryValue | null} value
 * @returns {number | undefined}
 */
export const getFormNumber = (value) => {
  if (value instanceof File) {
    return undefined
  }
  return parseNumber(value)
}
