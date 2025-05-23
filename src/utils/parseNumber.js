/**
 * @param {number | string | null | undefined} value
 * @returns {number | undefined}
 */
export const parseNumber = (value) => {
  if (value === null || value === undefined || Number.isNaN(value)) {
    return undefined
  }

  if (typeof value === 'number') {
    return value
  }

  const parsedValue = parseFloat(value)
  if (Number.isNaN(parsedValue)) {
    return undefined
  }

  return parsedValue
}
