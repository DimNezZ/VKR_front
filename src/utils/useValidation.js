import { reactive } from 'vue'
// eslint-disable-next-line no-unused-vars
import { z } from 'zod/v4'

/**
 * @param {z.ZodObject<T, z.core.$strip>} schema
 * @param {import('vue').Ref<any>} model
 * @template {Readonly<{ [k: string]: z.core.$ZodType<unknown, unknown>; }>} T
 */
export const useValidation = (schema, model) => {
  /** @type {Partial<Record<keyof T, string>>}  */
  const errors = reactive({})

  const getData = () => {
    const parsed = schema.safeParse(model.value)

    if (parsed.success) {
      return parsed.data
    }

    return undefined
  }

  const validate = () => {
    Object.keys(errors).forEach((key) => {
      delete errors[key]
    })

    const parsed = schema.safeParse(model.value)

    if (!parsed.success) {
      for (const issue of parsed.error.issues) {
        // @ts-ignore
        errors[issue.path[0]] = issue.message
      }

      return false
    }

    return true
  }

  return { errors, getData, validate }
}
