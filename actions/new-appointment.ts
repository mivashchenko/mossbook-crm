'use server'

import * as z from 'zod'
import { NewAppointmentSchema } from '@/schemas'
import { db } from '@/lib/db'

export const newAppointment = async (
  values: z.infer<typeof NewAppointmentSchema>
) => {
  const validatedFields = NewAppointmentSchema.safeParse(values)

  if (!validatedFields.success) {
    return { error: 'Invalid fields!' }
  }

  const { start, end, customerId, employeeId, services } = validatedFields.data

  await db.appointment.create({
    data: {
      start,
      end,
      customerId,
      employeeId,
      status: 'PENDING',
      services: {
        connect: services.map((id) => ({
          id,
        })),
      },
    },
  })

  return { success: 'Appointment created!' }
}
