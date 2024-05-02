import { db } from '@/lib/db'

export const getEmployees = async () => {
  const data = await db.employee.findMany()
  const count = await db.employee.count()
  return { data, count }
}
