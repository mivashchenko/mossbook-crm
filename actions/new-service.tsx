'use server'

import * as z from 'zod'
import { NewServiceSchema } from '@/schemas'
import { db } from '@/lib/db'

export const newService = async (values: z.infer<typeof NewServiceSchema>) => {
  const validatedFields = NewServiceSchema.safeParse(values)

  if (!validatedFields.success) {
    return { error: 'Invalid fields!' }
  }

  const { name, description, price, duration, category } = validatedFields.data

  await db.service.create({
    data: {
      name,
      description,
      price: Number(price),
      duration: Number(duration),
      category,
    },
  })

  return { success: 'New service created!' }
}
