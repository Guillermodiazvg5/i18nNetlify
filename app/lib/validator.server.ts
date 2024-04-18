import { z } from 'zod';

export const tripSchema = z.object({
  cityFrom: z.string().nonempty(),
  cityTo: z.string().nonempty(),
  date: z.string().refine((val) => Number(val) >= new Date().getTime(), {
    message: 'La fecha debe ser mayor a hoy',
  }),
  seats: z
    .string()
    .transform((val) => Number(val))
    .refine((val) => val > 0, {
      message: 'Debes seleccionar al menos un cupo',
    })
    .refine((val) => val < 5, {
      message: 'Debes seleccionar maximo 4 cupos',
    }),
});
