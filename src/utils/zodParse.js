import { z } from 'zod'

export const numberString = () =>
  z
    .string()
    .nonempty('Обязательное поле')
    .refine((val) => !isNaN(+val), {
      message: 'Обязательное поле',
    })
    .transform((val) => +val)
