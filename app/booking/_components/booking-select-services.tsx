'use client'

import { Salon } from '@/app/booking/_components/salon'
import { Service } from '@prisma/client'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { LuCheck, LuPlus } from 'react-icons/lu'
import { useCallback } from 'react'
import { newBookingActions } from '@/lib/features/new-booking/new-booking.slice'
import { useRouter } from 'next/navigation'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { BookingRedirectButtons } from '@/app/booking/_components/booking-redirect-buttons'

export const BookingSelectServices = ({
  services,
  count,
}: {
  services: Service[]
  count: number
}) => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const selectedServices = useAppSelector((state) => state.newBooking.services)

  const toggleSelect = useCallback(
    (service: Service) => () => {
      dispatch(newBookingActions.toggleSelectService(service))
    },
    [dispatch]
  )

  return (
    <div>
      <Salon className={'mb-4'} backUrl={'/booking'} />
      <h3 className='mb-2 mt-8 scroll-m-20 text-2xl font-semibold tracking-tight'>
        Booking Select services
      </h3>
      {services.map((service) => {
        const selected = selectedServices.some((s) => s.id === service.id)
        return (
          <Card className={'mb-2 p-4'}>
            <div>
              <div className={'flex items-center justify-between'}>
                <div className={'flex items-center'}>
                  <div className={'ml-2 font-semibold'}>{service.name}</div>
                </div>
                <Button
                  onClick={toggleSelect(service)}
                  variant={selected ? 'default' : 'outline'}
                  size='icon'
                >
                  {selected ? <LuCheck /> : <LuPlus className={'h-4 w-4'} />}
                </Button>
              </div>
            </div>
          </Card>
        )
      })}
      <BookingRedirectButtons />
    </div>
  )
}
