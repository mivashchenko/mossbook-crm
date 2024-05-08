'use client'
import { addDays, getTime, setHours, startOfDay } from 'date-fns'

import { Calendar } from '@/components/ui/calendar'
import { useCallback, useState } from 'react'
import { generateTimeSlots } from '@/utils'
import { format } from 'date-fns'
import { TimeSlotsList } from '@/components/time-slot-list'
import { Button } from '@/components/ui/button'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { Employee } from '@/types'
import { newBookingActions } from '@/lib/features/new-booking/new-booking.slice'
import { useRouter } from 'next/navigation'
import { BookingRedirectButtons } from '@/app/booking/_components/booking-redirect-buttons'

export const BookingSelectDateTime = () => {
  const router = useRouter()
  const [date, setDate] = useState<Date | undefined>(new Date())
  const selectedDate = useAppSelector((state) => state.newBooking.date)
  const dispatch = useAppDispatch()

  const startDate = startOfDay(setHours(date || new Date(), 9))
  const endDate = setHours(startDate, 18)
  const interval = 60

  const timeSlots = generateTimeSlots(startDate, endDate, interval)

  const isTimeSlotSelected = (timeSlot: Date) =>
    selectedDate && getTime(selectedDate) === getTime(timeSlot)
  return (
    <div className={'flex flex-col items-center justify-center'}>
      <Calendar
        mode='single'
        selected={date}
        onSelect={setDate}
        className='rounded-md border shadow'
      />
      <div className={'mt-4'}>
        <div
          className={
            'border-1 flex flex-wrap justify-center gap-2 rounded-lg border border-accent bg-gray-100 p-4'
          }
        >
          {timeSlots.map((slot, index) => (
            <Button
              className={'w-[100px]'}
              variant={isTimeSlotSelected(slot) ? 'default' : 'outline'}
              key={index}
              onClick={() => {
                dispatch(newBookingActions.setDate(slot.toISOString()))
              }}
            >
              {format(slot, 'p')}
            </Button>
          ))}
        </div>
      </div>
      <div className={'mt-8'}>
        <BookingRedirectButtons />
      </div>
    </div>
  )
}
