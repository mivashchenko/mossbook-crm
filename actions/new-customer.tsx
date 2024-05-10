'use server'

import * as z from 'zod'
import { NewCustomerSchema } from '@/schemas'
import { db } from '@/lib/db'

export const newCustomer = async (
  values: z.infer<typeof NewCustomerSchema>
) => {
  const validatedFields = NewCustomerSchema.safeParse(values)

  if (!validatedFields.success) {
    return { error: 'Invalid fields!' }
  }

  const { email, name, phone } = validatedFields.data

  const newCustomer = await db.customer.create({
    data: {
      name,
      email,
      phone,
    },
  })

  return { success: 'Thank you!', customer: newCustomer }
}
