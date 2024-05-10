import { db } from '@/lib/db'

export const getAppointments = async () => {
  try {
    const data = await db.appointment.findMany({
      include: {
        services: true,
      },
    })
    const count = await db.appointment.count()
    return { data, count }
  } catch (error) {
    return null
  }
}
