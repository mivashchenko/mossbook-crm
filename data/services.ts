import { db } from '@/lib/db'

export const getServices = async () => {
  const data = await db.service.findMany()
  const count = await db.service.count()
  return { data, count }
}
