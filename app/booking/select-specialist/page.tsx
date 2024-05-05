import { BookingSelectSpecialist } from '@/app/booking/_components/booking-select-specialist'
import { getEmployees } from '@/data/employees'

const BookingSpecialistPage = async () => {
  const response = await getEmployees()
  return <BookingSelectSpecialist specialists={response.data} />
}

export default BookingSpecialistPage
