'use client'

import { Salon } from '@/app/booking/_components/salon'

export const BookingSelectServices = () => {
  return (
    <div>
      <Salon className={'mb-4'} backUrl={'/booking'} />
      <h1>Booking Select services</h1>
    </div>
  )
}
