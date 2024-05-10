import { BigCalendar } from '@/app/(protected)/_components/big-calendar'
import { getAppointments } from '@/data/appointments'
import { getEmployees } from '@/data/employees'

const CalendarPage = async () => {
  const appointments = await getAppointments()
  const employees = await getEmployees()
  return <BigCalendar appointments={appointments} employees={employees} />
}

export default CalendarPage
