'use client'

import { Employee } from '@/types'
import Image from 'next/image'
import { Rating } from '@/components/rating'
import { TimeSlotsList } from '@/components/time-slot-list'
import { setHours, startOfDay } from 'date-fns'
import { generateTimeSlots } from '@/utils'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { newBookingActions } from '@/lib/features/new-booking/new-booking.slice'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'

interface SelectSpecialistCardProps {
  specialist: Employee
  onSelect: () => void
  onTimeSlotClick: (date: Date | null) => void
  selectedTimeSlot?: Date | null
}

export const SelectSpecialistCard = ({
  specialist,
  onSelect,
  onTimeSlotClick,
  selectedTimeSlot,
}: SelectSpecialistCardProps) => {
  const {
    specialist: selectedSpecialist,
    date,
    services,
  } = useAppSelector((state) => state.newBooking)
  const dispatch = useAppDispatch()
  const startDate = setHours(startOfDay(new Date()), 9)
  const endDate = setHours(startDate, 18)
  const interval = 60

  const timeSlots = generateTimeSlots(startDate, endDate, interval)

  const handleTimeSlotClicked = (date: Date | null) => {
    dispatch(newBookingActions.setSpecialist(specialist))
    onTimeSlotClick(date)
  }

  return (
    <Card className='m-3 mx-auto max-w-md  md:max-w-2xl'>
      <div className='md:flex'>
        <div className='md:w-[30%]'>
          <Image
            width={192}
            height={192}
            className='h-48 w-full object-cover md:w-48'
            src='https://randomuser.me/api/portraits/men/75.jpg'
            alt="Doctor's image"
          />
        </div>
        <div className='flex flex-col p-8 md:w-[70%]'>
          <div className='text-sm font-semibold uppercase tracking-wide'>
            {specialist.name}
          </div>
          <p className='mt-1 block text-lg font-medium leading-tight text-black'>
            Specialty: Barber
          </p>
          <div className='flex items-center p-1'>
            <Rating />
            <span className='mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400'></span>
            <a
              href='#'
              className='text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white'
            >
              73 reviews
            </a>
          </div>
          <p className='mt-2 text-gray-500'>
            Available time slots{' '}
            <span className={'text-sky-500'}>tomorrow</span>:
          </p>
          <div>
            <TimeSlotsList
              selectedTimeSlot={
                selectedSpecialist?.id === specialist.id
                  ? selectedTimeSlot
                  : null
              }
              slots={timeSlots}
              onTimeSlotClick={handleTimeSlotClicked}
            />
          </div>
          <div>
            <Button onClick={onSelect} className={'mt-6'}>
              Book Appointment
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}
