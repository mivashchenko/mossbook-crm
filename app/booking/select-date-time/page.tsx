import { BookingSelectDateTime } from '@/app/booking/_components/booking-select-date-time'
import { Salon } from '@/app/booking/_components/salon'

const BookingSelectDAteTimePage = () => {
  return (
    <div>
      <Salon className={'mb-4'} backUrl={'/booking'} />
      <BookingSelectDateTime />
    </div>
  )
}

export default BookingSelectDAteTimePage
