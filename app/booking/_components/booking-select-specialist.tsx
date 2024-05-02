'use client'

import { Employee } from '@/types'
import { useCallback, useState } from 'react'
import { Salon } from '@/app/booking/_components/salon'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { newBookingActions } from '@/lib/features/new-booking/new-booking.slice'
import { SelectSpecialistCard } from '@/app/booking/_components/select-specialist-card'
import { useRouter } from 'next/navigation'

interface BookingSelectSpecialistProps {
  specialists: Employee[]
}

export const BookingSelectSpecialist = ({
  specialists,
}: BookingSelectSpecialistProps) => {
  const router = useRouter()
  const dispatch = useAppDispatch()

  const handleSelect = useCallback(
    (specialist: Employee) => () => {
      dispatch(newBookingActions.setSpecialist(specialist))
      router.push('/booking/select-services')
    },
    [dispatch, router]
  )
  return (
    <div>
      <Salon className={'mb-4'} backUrl={'/booking'} />

      <h3 className='mb-2 scroll-m-20 text-xl font-semibold tracking-tight'>
        Select specialist
      </h3>
      {specialists.map((specialist) => {
        return (
          <SelectSpecialistCard
            key={specialist.id}
            specialist={specialist}
            onSelect={handleSelect(specialist)}
          />
        )
      })}
    </div>
  )
}