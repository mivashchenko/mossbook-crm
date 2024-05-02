'use server'

import * as z from 'zod'
import { NewEmployeeSchema } from '@/schemas'
import { db } from '@/lib/db'

export const newEmployee = async (
  values: z.infer<typeof NewEmployeeSchema>
) => {
  const validatedFields = NewEmployeeSchema.safeParse(values)

  if (!validatedFields.success) {
    return { error: 'Invalid fields!' }
  }

  const { email, name, phone, role } = validatedFields.data

  await db.employee.create({
    data: {
      name,
      email,
      phone,
      role,
    },
  })

  return { success: 'New employee created!' }
}
